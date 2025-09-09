import { Globe } from "@/components/magicui/globe";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon


const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer2 = ({
  logo = {
    url: "",
    src: "./Logo.png",
    alt: "logo",
    title: "",
  },
}: Footer2Props) => {
  return (
    <section>
      <div className="container">
        <footer>
          <Separator className="my-14" />
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="lg:max-w-md">
              <div className="flex items-center justify-start gap-2">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <h2 className="text-xl font-semibold tracking-tight">
                  {logo.title}
                </h2>
              </div>
              <p className="mt-4 text-left text-sm text-muted-foreground">
                Sulv is our revolutionary internal platform that uses a team of
                specialized AI agents to automate the entire Software
                Development Life Cycle (SDLC).
              </p>

              {/* ✅ Social Icons Row */}
              <div className="mt-4 flex gap-6 text-muted-foreground">
                <a
                  href="https://www.linkedin.com/company/rewanai/?trk=public_post_feed-actor-name&originalSubdomain=om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/Rewan_Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/rewan_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Instagram size={24} />
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=96876626636&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaWhatsapp size={24} />
                </a>

              </div>
            </div>

            <div className="mt-8 flex w-full flex-wrap justify-between gap-12 lg:mt-0 lg:w-fit">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4">
                  <h3 className="mb-4 font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-52 overflow-hidden lg:h-82">
            <Globe className="absolute top-10 md:scale-125 lg:top-16 lg:scale-150" />
          </div>
        </footer>
      </div>
    </section >
  );
};

export { Footer2 };
