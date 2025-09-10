import {
  AudioLines,
  Rotate3d,
  BrainCircuit,
  BookOpenText,
} from "lucide-react"; // ✅ Removed WandSparkles, ZoomIn

const reasons = [
  {
    title: "Initiate & Plan",
    description:
      "Sulv’s agents begin by gathering requirements, identifying stakeholders, and setting project objectives. They translate high-level ideas into structured roadmaps, ensuring clarity, alignment, and a solid foundation for the entire lifecycle.",
    icon: <AudioLines className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />,
  },
  {
    title: "Analyze & Design",
    description:
      "Specialized agents run feasibility checks, conduct risk assessments, and produce architectural blueprints. This guarantees that every solution is technically sound, business-aligned, and designed for long-term scalability and performance.",
    icon: (
      <Rotate3d
        className="size-7 shrink-0 md:size-8"
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Build & Test",
    description:
      "Development agents generate clean, efficient code while testing agents continuously validate functionality, performance, and security. Automated debugging and quality assurance reduce errors early, accelerating timelines without compromising reliability.",
    icon: (
      <BrainCircuit className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />
    ),
  },
  {
    title: "Deploy & Maintain",
    description:
      "Deployment agents manage releases, configurations, and monitoring in production environments. Maintenance agents handle updates, patches, and feedback integration, ensuring your software stays secure, adaptable, and consistently optimized.",
    icon: (
      <BookOpenText className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />
    ),
  },
];

const Feature85 = () => {
  return (
    <section id="capabilities" className="pt-32">
      <div>
        <div>
          <div className="relative container overflow-hidden border-x border-muted-foreground/20">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                The Building Blocks of Advanced Intelligence
              </h1>
              <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-center md:text-xl">
                Our rewan framework integrates a suite of state-of-the-art technologies, enabling us to build Cyber Employees and applications that can see, hear, talk, and reason with your business data.
              </p>
            </div>
          </div>
          <div className="relative container border-muted-foreground/20">
            <div className="border-x border-muted-foreground/20 px-0">
              <div className="grid gap-px bg-muted-foreground/20 md:grid-cols-2 lg:grid-cols-2">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-mutedd px-6 pt-8 pb-8 md:flex-col md:gap-0 md:px-8 md:pt-16"
                  >
                    {reason.icon}
                    <div>
                      <h3 className="mb-2 md:mt-6 md:text-lg">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>{/* spacer or future content */}</div>
        </div>
      </div>
    </section>
  );
};

export { Feature85 };
