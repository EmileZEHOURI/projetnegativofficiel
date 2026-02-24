import { Navigation } from "@/ui/components/navigation/navigation"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"


export const HighPhotoView = () => {
    return(
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
            <Image
            src="/assets/img-negativ/img/photo-group-1.jpg"
            alt="Photo du Club"
            fill
            priority
            className="object-cover"
          
            />
        {/* Contenu hero (titres etc.) */}
            <div className="absolute top-0 left-0 z-50 w-full">
                <Navigation variant="overlay"/>
            </div>

            {/* Contenu hero (titres etc.) */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <Typography variant='h2' component="h1" theme="white" >
                    Le Nouveau Club Parisien
                </Typography>

            </div>

        
        </section>
    )
}