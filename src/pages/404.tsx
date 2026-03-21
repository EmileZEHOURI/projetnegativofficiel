import Link from "next/link";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-zinc-400">
          404
        </p>

        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
          Cette page est en construction
        </h1>

        <p className="mt-6 text-base leading-7 text-zinc-300 md:text-lg">
          La page que vous cherchez n’est pas encore disponible ou a été déplacée.
          Vous allez être redirigé vers l’accueil dans {countdown} seconde
          {countdown > 1 ? "s" : ""}.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-zinc-950"
          >
            Retour à l’accueil
          </Link>

          <Link
            href="/nous-contacter"
            className="inline-flex items-center justify-center border border-zinc-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}