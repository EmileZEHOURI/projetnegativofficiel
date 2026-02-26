import { Container } from "@/ui/components/container/container";
import { HighPhotoView } from "../../../components/high-photo/high-photo.view";



export const AgendaPageView = () => {
  return (
    <>
      <HighPhotoView
        position="left"
        title="Agenda"
        surtitle= " INFORMATIONS PRATIQUES "
        imageSrc="/assets/img-negativ/img/photo-agenda.jpg"
        alt="Photo du Club"
      />
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-start  ">
    vide
      </Container>
    </>
  );
};
