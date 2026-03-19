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
        title="LES GYMNASES"
        surtitle=" INFORMATIONS PRATIQUES "
        imageSrc="/assets/img-negativ/img-alain/photo-gymnases-1.jpeg"
        alt="Photo du Club"
      />
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center">
        <div className="justify-center items-center m-20 p-10">
          <Typography
          variant="caption2"
          component="div"
          theme="gray"
          className="text-left self-start"
          weight={400}
        >
          <p>
            Nous sommes situés sur plusieurs gymnases du 10e arrondissement, qui
            diffèrent en fonction des catégories d’âge et des équipes.
          </p>
          <p>
            <br /> <br />
            Voici l'adresse des gymnases :
          </p>
        </Typography>
        <Typography
          variant="caption2"
          component="div"
          theme="secondary"
          className="mt-[10px] text-left self-start"
          weight={300}
          
        >
          <ul className=" mt-10 list-disc pl-6 space-y-3">
            {GYMNASES.map((gym) => (
              <li key={gym.name}>
                <span className="text-primary font-medium">{gym.name}</span>
                <span className="text-gray-700 font-medium"> | {gym.address}</span>
              </li>
            ))}
          </ul>
        </Typography>
        </div>
        
        <div className="w-full h-full self-center ">
          <GymMap  />
        </div>
        <div>
          <PreFooter highText="DÉCOUVRIR AUSSI" lowText="LES HORAIRES" href="/informations-pratiques/horaires" />
        </div>
      </Container>
    </>
  );
};
