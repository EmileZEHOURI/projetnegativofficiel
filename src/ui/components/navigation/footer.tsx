import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";
import { Logo } from "@/ui/design-system/logo/logo";
import {
  footerBottomLinks,
  footerPrimaryColumns,
  footerSecondaryLinks,
} from "./app-links";

type FlatFooterLink = {
  label: string;
  href: string;
  type: "internal" | "external";
  target?: "_self" | "_blank";
};

const styles = {
  footerLink: "hover:text-ref/70 font-[700] transition",
  bottomLink: "hover:text-gray-300 transition",
};

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const primaryLinks: FlatFooterLink[] = footerPrimaryColumns.flatMap(
    (column) =>
      column.links.map((link) => ({
        label: link.label,
        href: link.baseUrl,
        type: link.type === LinkTypes.EXTERNAL ? "external" : "internal",
        target: link.target ?? "_self",
      })),
  );

  const secondaryLinks: FlatFooterLink[] = footerSecondaryLinks.map((link) => ({
    label: link.label,
    href: link.href,
    type: link.target === "_blank" ? "external" : "internal",
    target: link.target ?? "_self",
  }));

  const allFooterLinks = [...primaryLinks, ...secondaryLinks];
  const footerColumns = chunkArray(allFooterLinks, 4);

  return (
    <footer className="bg-zinc-950 ">
      <Container className="flex items-start gap-10 pt-16">
        <a href="/" rel="noopener noreferrer">
          <Logo size="xl-footer" />
        </a>

        <div className="flex gap-10 ">
          {footerColumns.map((column, columnIndex) => (
            <div
              key={`footer-column-${columnIndex}`}
              className="min-w-[190px] space-y-4"
            >
              {column.map((link) => (
                <FooterFlatLink
                  key={`${link.href}-${link.label}`}
                  link={link}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Typography  theme="white"
        variant="caption2"
        weight={700}
        stretch="condensed"
        className="text-center">
          NOUS SUIVRE

          </Typography>
          <SocialNetworksButtons className="flex items-center gap-1" />
        </div>
      </Container>

      <Container className="space-y-5 pt-5 pb-5">
        <hr className="border-gray-800" />

        <div className="flex  items-center justify-center gap-1 text-center">
          <ul className="flex items-center gap-1">
            {footerBottomLinks.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  target={link.target}
                  rel={
                    link.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className={styles.bottomLink}
                >
                  <Typography variant="caption3" theme="white" className="">
                    {link.label}
                  </Typography>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <Typography variant="caption3" theme="white">
              {`© Copyright ${currentYear} - `}
              <a
                href="/https://portfolio-emile-zehouri.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Emile ZEHOURI
              </a>
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

type FooterFlatLinkProps = {
  link: FlatFooterLink;
};

const FooterFlatLink = ({ link }: FooterFlatLinkProps) => {
  if (link.type === "internal") {
    return (
      <Typography
        theme="white"
        variant="caption2"
        weight={700}
        stretch="condensed"
        className={styles.footerLink}
      >
        <ActiveLink href={link.href}>{link.label}</ActiveLink>
      </Typography>
    );
  }

  return (
    <Typography
      theme="white"
      variant="caption2"
      stretch="condensed"
      weight={700}
      className={styles.footerLink}
    >
      <a
        href={link.href}
        target={link.target ?? "_blank"}
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    </Typography>
  );
};
