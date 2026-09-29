import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "../config";

export const metadata: Metadata = {
  title: "Paiement reçu | Agios",
  robots: { index: false },
};

export default function Merci() {
  const sujet = encodeURIComponent("Mon relevé pour Agios");
  return (
    <main className="mx-auto max-w-xl px-5 py-12">
      <h1 className="font-titre text-4xl font-extrabold leading-tight">
        Paiement reçu. Merci.
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        Il te reste une seule chose à faire : nous envoyer ton relevé.
      </p>

      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${sujet}`}
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl bg-moutarde px-6 text-lg font-semibold text-encre shadow-[0_3px_0_0_#14213d] active:translate-y-[2px] active:shadow-[0_1px_0_0_#14213d]"
      >
        Envoyer mon relevé par email
      </a>

      <ol className="mt-10 list-decimal space-y-3 pl-6 leading-relaxed">
        <li>Rassemble tes relevés des 12 derniers mois (PDF ou photos bien lisibles).</li>
        <li>Envoie-les à {CONTACT_EMAIL}, depuis l'adresse email utilisée pour payer.</li>
        <li>Tu reçois ton courrier de réclamation sous 48 h.</li>
      </ol>

      <p className="mt-10 text-sm">
        <Link href="/" className="underline">Retour à l'accueil</Link>
      </p>
    </main>
  );
}
