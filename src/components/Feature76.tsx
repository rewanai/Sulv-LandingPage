import { Gauge, ShieldCheck, BadgeCheck, BrickWall } from "lucide-react";

const features = [
  {
    id: "feature-1",
    title: "Unprecedented Speed to Market",
    description:
      "By automating our own development, we can design, build, and deploy your custom automation solutions in a fraction of the time of traditional development, delivering value faster.",
    icon: <Gauge className="size-10" strokeWidth={1.5} />,
  },
  {
    id: "feature-2",
    title: "Rock-Solid Reliability",
    description:
      "An AI-driven QA process and standardized coding mean your applications are more robust, with fewer bugs and greater dependability from day one.",
    icon: <BadgeCheck className="size-10" strokeWidth={1.5} />,
  },
  {
    id: "feature-3",
    title: "Inherent Security",
    description:
      "Automating the build and deployment process minimizes human intervention, reducing the attack surface and embedding security best practices at every step.",
    icon: <BrickWall className="size-10" strokeWidth={1.5} />,
  },
  {
    id: "feature-4",
    title: "Exceptional Value",
    description:
      "Our extreme efficiency isn't just an internal metric; it allows us to deliver technologically advanced solutions with a lower total cost of ownership and a faster return on your investment.",
    icon: <ShieldCheck className="size-10" strokeWidth={1.5} />,
  },
];

const Feature76 = () => {
  return (
    <section id="benefits" className="relative pt-32" >
      <div className="container relative z-10 flex flex-col space-y-14 ">
        <h2 className="px-6 text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6 lg:max-w-md lg:px-10 ">
          What Our Sulv Platform Means For You.
        </h2>
        <div className="relative mt-6 md:mt-10">
          <div className="bg-border absolute left-0 right-0 top-0 h-px" />
          <div className="divide-border grid md:grid-cols-4 md:divide-x">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative px-6 pb-20 md:pb-10 lg:px-10"
              >
                <div className="bg-border absolute left-0 right-0 top-0 h-px md:hidden" />
                <div className="bg-background relative -mt-6 mb-10 flex aspect-square w-12 items-center justify-center md:-mt-10 md:mb-10 md:w-20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-3 max-w-[12rem] text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-border absolute bottom-0 left-0 right-0 h-px" />
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">

        </div>
      </div>
    </section>
  );
};

export { Feature76 };
