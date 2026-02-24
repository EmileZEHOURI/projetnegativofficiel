//COMPONENT
import { Container } from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo/seo";
//DESIGN SYSTEM
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { BurgerMenu } from "@/ui/design-system/burgerMenu (Not Use)/burgerMenu";

//ICO
import { RiUser6Fill } from "react-icons/ri";
import { Layout } from "@/ui/components/layout/layout";

export default function DesignSystem() {
  return (
    <div>
      <Seo title="Projet Negativ" description="Dieu est Grand" />
      <Layout>
        <Container>
          <div className="space-y-6 p-10">
            {/* Spinners*/}
            <Typography variant="caption2" weight="medium">
              Spinner
            </Typography>
            <div className="flex items-center gap-4 p-1  ">
              <div className="flex items-center gap-4 p-10 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
            </div>

            {/* Logo*/}
            <Typography variant="caption2" weight="medium">
              Logo
            </Typography>
            <div className="flex items-center gap-4 p-1 ">
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo />
                <Logo size="large" />
              </div>
            </div>

            {/* Buttons*/}
            <Typography variant="caption2" weight="medium">
              Button
            </Typography>
            <div className="items-center gap-4 p-10 border border-gray-400 rounded">
              <div className="flex items-center gap-4 p-10 ">
                <Button isLoading size="small">
                  Accent
                </Button>
                <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
                  Accent
                </Button>
                <Button
                  isLoading
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button isLoading size="small" variant="secondary">
                  Accent
                </Button>
                <Button isLoading size="small" variant="outline">
                  Accent
                </Button>
                <Button isLoading size="small" variant="disabled" disabled>
                  Accent
                </Button>
                <Button
                  isLoading
                  size="small"
                  variant="ico"
                  icon={{ icon: RiUser6Fill }}
                />
              </div>

              {/* Button with icon and text */}
              <div className="flex items-center gap-4 p-10 ">
                <Button size="small">Accent</Button>
                <Button size="small" icon={{ icon: RiUser6Fill }}>
                  Accent
                </Button>
                <Button
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button size="small" variant="secondary">
                  Accent
                </Button>
                <Button size="small" variant="outline">
                  Accent
                </Button>
                <Button size="small" variant="disabled" disabled>
                  Accent
                </Button>
                <Button
                  size="small"
                  variant="ico"
                  icon={{ icon: RiUser6Fill }}
                />
              </div>
              {/* Black and White Button with icon and text */}
              <div className="flex items-center gap-4 p-10 ">
                <Button size="small" variant="black">
                  Black
                </Button>
                <Button size="small" variant="white">
                  White
                </Button>
                <Button
                  size="small"
                  variant="black"
                  icon={{ icon: RiUser6Fill }}
                >
                  Black
                </Button>
                <Button
                  variant="white"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                  iconPosition="left"
                >
                  White
                </Button>
                <Button
                  size="small"
                  iconTheme="black"
                  variant="ico"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  size="small"
                  iconTheme="white"
                  variant="ico"
                  icon={{ icon: RiUser6Fill }}
                />
              </div>
            </div>

            {/* Typography*/}
            <Typography variant="caption2" weight="medium">
              Typography
            </Typography>
            <div className="items-center gap-4 p-10 border border-gray-400 rounded">
              <div className="flex items-center gap-4 p-1 ">
                <Typography variant="display" component="div">
                  Projet Negativ
                </Typography>
                <Typography theme="primary" variant="h1" component="div">
                  Projet Negativ
                </Typography>
                <Typography theme="secondary" variant="lead" component="div">
                  Projet Negativ
                </Typography>
                <Typography variant="body-sm" component="div">
                  Projet Negativ
                </Typography>
                <Typography variant="caption4" component="div">
                  Projet Negativ
                </Typography>
                <Typography variant="caption4" weight="medium" component="div">
                  Projet Negativ
                </Typography>
              </div>
            </div>

            {/* Avatar*/}
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-4 p-1 ">
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Avatar
                  alt="Avatar Example"
                  src="/img/logoNegativ.png"
                  size="small"
                />
                <Avatar alt="Avatar Example" src="/img/logoNegativ.png" />
                <Avatar
                  alt="Avatar Example"
                  src="/img/logoNegativ.png"
                  size="large"
                />
              </div>
            </div>

            {/*BurgerMenu*/}

            <Typography variant="caption2" weight="medium">
              BpWhite Button
            </Typography>
            <div className="flex items-center gap-4 p-1 ">
              <div className="flex items-center gap-2 p-5 border border-gray-400 bg-red-600 rounded">
               <Button  
                  size="bpmedium"
                  variant="bpwhite"

                >
                Test
               </Button>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
