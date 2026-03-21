import { onRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp();
}

const db = getFirestore();

type SubjectType = "inscription" | "aide";
type CategoryType = "U21" | "Seniors" | null;

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  subject: SubjectType;
  category: CategoryType;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const submitContactForm = onRequest(
  {
    region: "europe-west1",
    cors: true,
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({
        ok: false,
        error: "Méthode non autorisée",
      });
      return;
    }

    try {
      const body = req.body as Partial<ContactPayload>;

      const firstName = body.firstName?.trim() || "";
      const lastName = body.lastName?.trim() || "";
      const email = body.email?.trim() || "";
      const subject = body.subject;
      const category = body.category ?? null;
      const message = body.message?.trim() || "";

      if (!firstName || !lastName || !email || !subject || !message) {
        res.status(400).json({
          ok: false,
          error: "Tous les champs obligatoires doivent être remplis.",
        });
        return;
      }

      if (!isValidEmail(email)) {
        res.status(400).json({
          ok: false,
          error: "Adresse mail invalide.",
        });
        return;
      }

      if (subject !== "inscription" && subject !== "aide") {
        res.status(400).json({
          ok: false,
          error: "Sujet invalide.",
        });
        return;
      }

      if (subject === "inscription" && category !== "U21" && category !== "Seniors") {
        res.status(400).json({
          ok: false,
          error: "La catégorie est obligatoire pour une inscription.",
        });
        return;
      }

      const payload = {
        firstName,
        lastName,
        email,
        subject,
        category: subject === "inscription" ? category : null,
        message,
        status: "new",
        createdAt: new Date().toISOString(),
      };

      const docRef = await db.collection("contact_submissions").add(payload);

      res.status(200).json({
        ok: true,
        id: docRef.id,
      });
    } catch (error) {
      console.error("[SUBMIT_CONTACT_FORM_ERROR]", error);

      res.status(500).json({
        ok: false,
        error: "Impossible d’enregistrer la demande.",
      });
    }
  }
);