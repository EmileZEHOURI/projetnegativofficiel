import { Container } from "@/ui/components/container/container";
import { HighPhotoView } from "../../../components/high-photo/high-photo.view";
import { Typography } from "@/ui/design-system/typography/typography";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { GYMNASES } from "@/ui/components/gym-map/gym-data";
import GymMap from "@/ui/components/gym-map/gym-map";

export const GymnasesPageView = () => {
  return (
    <>
      <HighPhotoView
        position="left"
        title="GYMNASES"
        surtitle=" INFORMATIONS PRATIQUES "
        imageSrc="/assets/img-negativ/img/photo-gymnases-modified-1.png"
        alt="Photo du Club"
      />
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center ">
        <Typography
          variant="caption3"
          component="span"
          theme="gray"
          className="mt-10 justify-center items-center text-center"
        >
          <p>
            Nous sommes situés sur plusieurs gymnases du 10e arrondissement, qui
            diffèrent en fonction des catégories d’âge et des équipes.
          </p>
          <p>
            <br />
            Voici l'adresse des gymnases :
          </p>
        </Typography>
        <Typography
          variant="caption3"
          component="span"
          theme="secondary"
          className="mt-[160px] justify-center items-center text-center"
        >
          <ul className="list-disc pl-6 space-y-10">
            {GYMNASES.map((gym) => (
              <li key={gym.name}>
                <span className="text-primary font-medium">{gym.name}</span>
                <span className="text-gray-700"> – {gym.address}</span>
              </li>
            ))}
          </ul>
        </Typography>
        <div className="mt-16 w-[75%]">
          <GymMap  />
        </div>
        <div>
          <PreFooter highText="Découvrir aussi" lowText="LES HORAIRES" />
        </div>
      </Container>
    </>
  );
};
