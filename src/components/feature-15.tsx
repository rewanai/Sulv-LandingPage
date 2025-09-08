import {
  Infinity as InfinityIcon,
  MessagesSquare,
  Zap,
  ZoomIn,
} from "lucide-react";

const feature = [
  {
    title: "Architectural Precision",
    description:
      " Our agents build with an in-depth understanding of your blueprint, ensuring consistent, structured, and maintainable systems from day one.",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Intelligent Automation",
    description:
      "Specialized AI agents collaborate to automate the entire SDLC, accelerating development while preserving architectural integrity.",
    icon: <Zap className="size-6" />,
  },
  {
    title: "Enterprise-Grade Standards",
    description:
      "We enforce proven architectural patterns and best practices, creating robust, secure, and scalable applications.",
    icon: <MessagesSquare className="size-6" />,
  },
  {
    title: "Continuous Evolution",
    description:
      "By eliminating technical debt and embedding governance, we ensure your systems are built to continuously evolve and adapt.",
    icon: <InfinityIcon className="size-6" />,
  },
];

const Feature15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-muted-foreground">WHY WE ARE UNIQUE</p>
            <h2 className="text-3xl font-medium md:text-5xl">
              Bringing the best to you by the best in the industry
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Sulv.ai redefines software development by embedding Architectural
              Precision into an Intelligently Automated workflow. We deliver
              Enterprise-Grade Standards from the first line of code, ensuring
              Continuous Evolution and minimizing technical debt for your
              critical .NET applications on Azure.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature15 };
