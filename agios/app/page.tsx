import { STRIPE_LINK, CONTACT_EMAIL, PRIX } from "./config";

// Cette phrase doit reprendre mot pour mot la promesse de tes vidéos.
const PROMESSE = "Récupère les frais bancaires prélevés à tort.";

const lignes: [string, string][] = [
  ["Commission d'intervention", "8,00 €"],
  ["Commission d'intervention", "8,00 €"],
  ["Frais de rejet de prélèvement", "12,00 €"],
  ["Option « Alerte solde » jamais utilisée", "2,50 €"],
  ["Lettre d'information découvert", "4,20 €"],
];

const benefices = [
  {
    t: "Toutes les lignes, retrouvées.",
    d: "Commissions, rejets, options facturées sans usage : chaque frais caché dans ton relevé est repéré.",
  },
  {
    t: "Comparé à ce que la loi autorise.",
    d: "Ton total sur douze mois face aux plafonds légaux. Tu vois exactement ce qui dépasse.",
  },
  {
    t: "Un courrier prêt à envoyer.",
    d: "Adressé à ton agence, rédigé pour être pris au sérieux. Tu n'as qu'à le signer et l'envoyer.",
  },
];

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={STRIPE_LINK}
      className={`flex min-h-14 w-full items-center justify-center rounded-xl bg-moutarde px-6 text-lg font-semibold text-encre shadow-[0_3px_0_0_#14213d] active:translate-y-[2px] active:shadow-[0_1px_0_0_#14213d] ${className}`}
    >
      Récupérer mes frais pour {PRIX}
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-10 md:pb-16 md:pt-16">
      <h1 className="font-titre text-[2.6rem] font-extrabold leading-[1.05] tracking-tight md:text-6xl">
        {PROMESSE}
      </h1>
      <p className="mt-5 text-lg leading-relaxed">
        Dépose ton relevé. On repère chaque ligne de frais, on la compare aux plafonds
        légaux et tu reçois ton courrier de réclamation.
      </p>

      <div className="mt-8">
        <Bouton />
        <p className="mt-3 text-center text-sm">
          Paiement unique, sans abonnement. Courrier livré sous 48 h.
        </p>
      </div>

      {/* Le ticket : la douleur chiffrée */}
      <section
        aria-label="Exemple de relevé"
        className="mt-14 -rotate-1 border-2 border-encre bg-papier px-5 py-6 shadow-[6px_6px_0_0_#14213d]"
      >
        <p className="font-titre text-xl font-semibold">Un mois ordinaire sur un relevé</p>
        <ul className="mt-4 space-y-2">
          {lignes.map(([nom, montant], i) => (
            <li key={i} className="flex items-baseline gap-2">
              <span>{nom}</span>
              <span aria-hidden className="flex-1 border-b-2 border-dotted border-encre/40" />
              <span className="tabular-nums">{montant}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-baseline justify-between border-t-2 border-encre pt-4">
          <span className="font-semibold">Total du mois</span>
          <span className="font-titre text-2xl font-extrabold tabular-nums">34,70 €</span>
        </div>
        <p className="mt-4 bg-moutarde px-3 py-2 font-titre text-2xl font-extrabold leading-tight">
          416,40 € sur douze mois, si ça se répète.
        </p>
        <p className="mt-3 text-sm">Exemple illustratif, montants fictifs.</p>
      </section>

      <p className="mt-10 text-lg leading-relaxed">
        Ces frais s'ajoutent par petites lignes illisibles. La plupart sont plafonnés par la
        loi, souvent négociables, et presque jamais contestés.
      </p>

      <section className="mt-10">
        {benefices.map((b) => (
          <div key={b.t} className="border-t-2 border-dotted border-encre/40 py-6">
            <h2 className="font-titre text-2xl font-semibold leading-snug">{b.t}</h2>
            <p className="mt-2 leading-relaxed">{b.d}</p>
          </div>
        ))}
        <div className="border-t-2 border-dotted border-encre/40" />
      </section>

      <section className="mt-6">
        <h2 className="font-titre text-2xl font-semibold">Comment ça se passe</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed">
          <li>Tu paies {PRIX}, une seule fois.</li>
          <li>Tu nous envoies ton relevé par email.</li>
          <li>Tu reçois ton courrier de réclamation sous 48 h.</li>
        </ol>
      </section>

      <div className="mt-10">
        <Bouton />
      </div>

      <footer className="mt-14 border-t-2 border-encre pt-6 text-sm leading-relaxed">
        <p>Une question ? Écris-nous à {CONTACT_EMAIL}.</p>
        <p className="mt-2">
          Agios fournit une information et une aide à la rédaction. Ce n'est pas un conseil
          juridique.
        </p>
      </footer>

      {/* Bouton collé au pouce, mobile uniquement */}
      <div className="fixed inset-x-0 bottom-0 border-t-2 border-encre bg-creme px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
        <Bouton />
      </div>
    </main>
  );
}
