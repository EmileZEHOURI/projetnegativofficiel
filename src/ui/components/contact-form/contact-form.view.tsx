"use client";

import { useMemo, useState } from "react";

type SubjectType = "inscription" | "aide" | "";
type CategoryType = "U21" | "Seniors" | "";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: SubjectType;
  category: CategoryType;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  subject: "",
  category: "",
  message: "",
};

export const ContactFormView = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);

  const isInscription = form.subject === "inscription";
  const hasSelectedSubject = form.subject !== "";

  const messagePlaceholder = useMemo(() => {
    if (!hasSelectedSubject) {
      return "CHOISISSEZ D’ABORD UN SUJET POUR RÉDIGER VOTRE MESSAGE";
    }

    if (isInscription) {
      return `MESSAGE
EXEMPLE : ÂGE DU JOUEUR, EXPÉRIENCE, CATÉGORIE SOUHAITÉE, DISPONIBILITÉS, MOTIVATIONS.

BONJOUR, JE SOUHAITE INSCRIRE MON ENFANT / MOI-MÊME AU CLUB. VOICI QUELQUES INFORMATIONS UTILES...`;
    }

    return `MESSAGE
EXEMPLE : TYPE D’AIDE RECHERCHÉE, CONTEXTE, URGENCE, BUDGET OU BESOIN PRÉCIS.

BONJOUR, JE VOUS CONTACTE AU SUJET D’UNE DEMANDE D’AIDE. VOICI LES DÉTAILS...`;
  }, [hasSelectedSubject, isInscription]);

  const fieldClassName =
    "w-full border border-zinc-300 bg-transparent px-4 py-4 text-sm text-gray-800/80 outline-none transition-colors placeholder:text-gray-800/60 focus:border-zinc-900 focus:text-gray-800/80 font-[700] uppercase";

  const selectClassName =
    "w-full appearance-none border border-zinc-300 bg-transparent px-4 py-4 pr-12 text-sm text-gray-800/80 outline-none transition-colors focus:border-zinc-900 font-[700] uppercase";

  const textareaClassName =
    "w-full resize-none border border-zinc-300 bg-transparent px-4 py-4 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-500 focus:border-zinc-900 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 disabled:placeholder:text-zinc-400";

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === "subject") {
        const nextSubject = value as SubjectType;

        return {
          ...prev,
          subject: nextSubject,
          category: nextSubject === "inscription" ? prev.category : "",
          message: "",
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 mb-10 flex flex-col gap-5">
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={form.firstName}
        onChange={onChange}
        placeholder="PRÉNOM"
        aria-label="Prénom"
        className={fieldClassName}
      />

      <input
        id="lastName"
        name="lastName"
        type="text"
        value={form.lastName}
        onChange={onChange}
        placeholder="NOM"
        aria-label="Nom"
        className={fieldClassName}
      />

      <input
        id="phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={onChange}
        placeholder="NUMÉRO DE TÉLÉPHONE"
        aria-label="Numéro de téléphone"
        className={fieldClassName}
      />

      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="ADRESSE MAIL"
        aria-label="Adresse mail"
        className={fieldClassName}
      />

      <div className="relative">
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          aria-label="Sujet"
          className={selectClassName}
        >
          <option value="" disabled hidden>
            SUJET
          </option>
          <option value="inscription">INSCRIPTION</option>
          <option value="aide">AIDE</option>
        </select>

        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isInscription && (
        <div className="relative">
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={onChange}
            aria-label="Catégorie"
            className={selectClassName}
          >
            <option value="" disabled hidden>
              CATÉGORIE
            </option>
            <option value="U21">U21</option>
            <option value="Seniors">SENIORS</option>
          </select>

          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <input
          id="attachments"
          name="attachments"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={onFileChange}
          className="hidden"
        />

        <label
          htmlFor="attachments"
          className="flex cursor-pointer items-center justify-between border border-zinc-300 px-4 py-4 text-sm font-[700] uppercase text-gray-800/60 transition-colors hover:border-zinc-900 hover:text-zinc-900"
        >
          <span>AJOUTER DES FICHIERS</span>

          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 16V4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7.5 8.5L12 4L16.5 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 20H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </label>

        {files.length > 0 && (
          <div className="border border-zinc-300 px-4 py-3 text-sm text-gray-800/60">
            {files.map((file) => (
              <div key={`${file.name}-${file.size}`}>{file.name}</div>
            ))}
          </div>
        )}
      </div>

      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={onChange}
        rows={10}
        placeholder={messagePlaceholder}
        aria-label="Message"
        disabled={!hasSelectedSubject}
        className={textareaClassName}
      />

      <div className="self-end">
         <button
        type="submit"
        className=" mt-2 inline-flex w-fit items-center justify-center border  px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-800/70 transition animate hover:bg-zinc-950/60 hover:text-white"
      >
        ENVOYER
      </button>
      </div>

     
    </form>
  );
};