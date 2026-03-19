import { Button } from "@/ui/design-system/button/button";

export const INTRO_TEXT = (
  <>
    <p>
      Retrouvez ci-dessous les tarifs de{" "}
      <strong>
        nos cotisations pour la{" "}
        <span className="text-primary">saison 2025-26 </span>
        ainsi que l’ensemble des aides dont vous pouvez bénéficier.
      </strong>{" "}
      Pour rappel, nous sommes une association et nous ne percevons aujourd’hui
      que peu de subventions publiques pour fonctionner.{" "}
      <strong>
        <span className="text-secondary">
          Vos cotisations nous permettent de fonctionner, d’exister !
        </span>
      </strong>
    </p>

    <p>
      <br />
      Vous pouvez faire baisser votre cotisation et aider un peu plus notre
      association{" "}
      <strong>
        <span className="text-secondary">en réalisant un don </span>
      </strong>
      qui vous sera défiscaliser. Retrouvez plus bas sur cette page tous les
      détails. Enfin, si votre entreprise ou celle d’un proche peut sponsoriser
      le club, n’hésitez pas à nous contacter. Cela pourrait permettre au club
      de ne pas avoir à augmenter le montant des cotisations dans les année à
      venir.
    </p>
  </>
);

export const PRACTICES_TEXT = (
  <p>
    Nous proposons deux pratique différentes. La{" "}
    <strong>
      <span className="text-primary">pratique en Loisirs,</span>
    </strong>{" "}
    qui compte un entrainement par semaine, et la pratique en Compétitions qui
    comptent elle deux entrainements par semaine et des matchs lors des
    week-ends. Pour s’inscrire dans une équipe Compétitions il faut avoir été
    sélectionné lors d’une détection.
  </p>
);

export const LOISIRS_TEXT = (
  <>
    <br />
    <p>La cotisation annuelle est de 265 €</p>
    <p>
      Pour les nouveaux adhérents, des frais d’adhésion de 79 € sont à régler{" "}
      <span className="font-light">(à partir de la catégorie U21) </span>
    </p>
  </>
);

export const COMPETITION_NEGATIV_TEXT = (
  <>
    <br />
    <p>La cotisation annuelle est de 310 €</p>
    <p>
      PPour les nouveaux adhérents, des frais d’adhésion de 79 € sont à régler{" "}
      <span className="font-light">(à partir de la catégorie U21) </span>
    </p>
  </>
);

export const LICENCE_PARENTS_TEXT = (
  <>
    <p>
      <br />
      Nous mettons en place cette saison une licence parents,{" "}
      <span className="text-primary-600 font-bold">pour seulement 30 € </span>
      annuel. Cette licence vous permettra de vous investir plus amplement dans
      la vie de notre club et notamment de pouvoir :
    </p>

    <ul className="space-y-3 mt-5">
      <li className="flex items-start gap-3">
        <span className="mt-[6px] h-[0.3rem] w-[0.3rem] rounded-full bg-secondary"></span>
        <span className="text-gray-700 font-normal">
          <span className="text-primary-600">
            participer activement aux séances
          </span>{" "}
          de l’Ecole de Basket
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-[6px] h-[0.3rem] w-[0.3rem] rounded-full bg-secondary"></span>
        <span className="text-gray-700 font-normal">
          être <span className="text-primary-600">Responsable de Salle</span>{" "}
          lors des matchs compétitions de vos enfants
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-[6px] h-[0.3rem] w-[0.3rem] rounded-full bg-secondary"></span>
        <span className="text-gray-700 font-normal">
          <span className="text-primary-600">
            tenir des tables de match et bénéficier des formations e-marque
          </span>{" "}
          réalisées par le club.
        </span>
      </li>
    </ul>

    <p>
      <br />
      Cette licence est aussi de façon{" "}
      <span className="text-primary-600 font-bold">
        {" "}
        de soutenir le club !{" "}
      </span>
    </p>
  </>
);

export const AIDES_TEXT = (
  <p>
    <br />
    Il existe plusieurs type d’aides comme le Pass’ Loisirs Activités et le
    Coupon Sport qui sont fourni par votre CAF. Le club met lui en place des
    facilités pour les familles nombreuses ainsi qu’un Fonds de Solidarité pour
    les personnes en plus grande difficultés. En cas de difficultés
    supplémentaires ou cas particuliers, n’hésitez pas à rentrer directement en
    contact avec nous.
  </p>
);

export const FAMILLES_NOMBREUSES_TEXT = (
  <>
    <p>
      Conscient de la difficultés des familles nombreuses à pouvoir assumer
      plusieurs cotisations, nous avons mis en place des réductions pour elles.
      Nous avons donc mis en places les réductions suivantes :
    </p>

    <ul className=" space-y-1 mt-1">
      <li>
        2e enfant : frais d’adhésion de 79€ offerts (pour les nouveaux
        adhérents) et -30€ sur la seconde cotisation.
      </li>
      <li>
        3e enfant : frais d’adhésion de 79€ offerts et -50€ sur la 3e cotisation
      </li>
      <li>
        4e enfant : frais d’adhésion de 79€ offerts et -70€ sur la 4e
        cotisation.
      </li>
      <li>
        5e enfant : frais d’adhésion de 79€ offerts et -90€ sur la 5e
        cotisation.
      </li>
    </ul>
  </>
);

export const TICKETS_LOISIRS_TEXT = (
  <p>
    Bénéficiez d’une aide de 220 € maximum par enfant selon la situation. Toutes
    les informations sont sur cette page du site www.caf.fr
  </p>
);

export const PASS_SPORT_TEXT = (
  <p>
    Bénéficiez de 70 € si vous avez entre 14 et 30 ans. Toutes les informations
    sont sur cette page du site www.pass.sports.gouv.fr
  </p>
);

export const COUPONS_SPORT_TEXT = (
  <p>
    Bénéficiez de chèques de 10 €, 15 € ou 20 € de réduction. Toutes les
    informations sont sur cette page du site www.aide-sociale.fr
  </p>
);

export const OFFRE_DONATEURS_TEXT1 = <p></p>;

export const OFFRE_DONATEURS_TEXT2 = (
  <>
    {" "}
    <p>
      <span className="font-bold text-gray-700">
        {" "}
        <span className="text-primary font-bold">
          {" "}
          Une cotisation à 50 € seulement ?{" "}
        </span>{" "}
        C’est possible et en plus en aidant le club !{" "}
      </span>
    </p>
    <p>
      <br />
      En faisant un don, et grâce à une déduction d’impôt, votre cotisation vous
      revient moins cher ! Retrouvez un explicatif de cette solution dans le
      document ci-dessous et contactez-nous si jamais vous avez des questions à
      ce sujet.
    </p>
  </>
);

export const FONDS_SOLIDARITE_TEXT = (
  <>
    <p>
      <br />
      Afin de venir en aide aux personnes les plus en difficultés, nous avons
      mis en place un fonds de solidarité. Cette cagnotte est utilisée pour
      offrir ou réduire les cotisations des personnes dont le règlement de la
      cotisation est compliqué.
    </p>
    <p>
      <br />
      Ce don est déductible de vos impôts (pour toute demande d’un Cerfa à ce
      sujet contactez nous).
    </p>
    <Button
      variant="accent"
      size="large"
      baseUrl=""
      className="mt-5 text-base font-bold tracking-tighter font-extended"
      weight={800}
    >
      FAITES UN DON ICI
    </Button>
  </>
);

export const COTISATION_USAGE_TEXT1 = (
  <>

  </>
);

export const COTISATION_USAGE_TEXT2 = (
  <>
    <p>
      <span className="font-bold"> Notre club est avant tout une association, <span className="text-primary-500">financée en très grande
      majorité par vos cotisations. </span> </span>
         La stabilité de notre structure (comme la
      majorité des associations) est très fragile. L’équilibre financier est
      recherché chaque saison et cela relève parfois de l’exploit, notamment
      grâce à l’énergie déployée par nos dirigeants bénévoles sur les sujets
      comptables. 
      </p>
      <p>
        <br/>
      Notre association bénéficie de quelques subventions publiques,
      mais encore trop peu pour permettre de baisser les cotisations. Retrouvez
      dans le document ci-dessous une explication détaillée du financement de
      notre association et un graphique schématisant l’utilisation qui est faite
      de votre cotisation.
    </p>

    
  </>
);
