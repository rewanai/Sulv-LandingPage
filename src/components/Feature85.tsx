import {
  AudioLines,
  Rotate3d,
  BrainCircuit,
  BookOpenText,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Natural Voice Communication",
    description:
      "We engineer solutions with advanced speech-to-speech technology, allowing your Cyber Employees to understand spoken commands and respond with natural, human-like voice. This is the engine for automating interactive customer service calls, internal IT helpdesks, and other voice-activated workflows for the Omani market and beyond.",
    icon: < AudioLines className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />,
  },
  {
    title: "Immersive 3D Experiences",
    description:
      "We move beyond flat screens to create AI-driven, interactive 3D models that run directly in a web browser. This allows for immersive product demonstrations, complex virtual training for employees, and dynamic visualization of real estate or engineering data.",
    icon: (
      <Rotate3d
        className="size-7 shrink-0 md:size-8"
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Intuitive Human-AI Collaboration",
    description:
      "Effective automation requires a seamless bridge between human and digital workers. We design and build highly intuitive and interactive web interfaces, dashboards, and control panels that allow your team to assign tasks, monitor performance, and collaborate with their Cyber Employee counterparts in real time.",
    icon: (
      <BrainCircuit className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />
    ),
  },
  {
    title: "Grounded, Factual Reasoning",
    description:
      "To ensure our AI provides answers grounded in your reality, we build with Retrieval-Augmented Generation (RAG). This advanced system allows a Cyber Employee to access your company’s private knowledge base—technical manuals, internal policies, past project data—to provide responses that are accurate, context-aware, and specific to your business, eliminating generic or incorrect information.",
    icon: (
      <BookOpenText className="size-7 shrink-0 md:size-8" strokeWidth={1.5} />
    ),
  },

];

const Feature85 = () => {
  return (
    <section id="capabilities" className="pt-32">
      <div className="">
        <div>
          <div className="relative container overflow-hidden border-x border-muted-foreground/20 ">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                The Building Blocks of Advanced Intelligence
        </h1>
              <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-center md:text-xl">
                Our rewan framework integrates a suite of state-of-the-art technologies, enabling us to build Cyber Employees and applications that can see, hear, talk, and reason with your business data.
        </p>
            </div>
          </div>
          <div className="relative container  border-muted-foreground/20">
            <div className=" border-x border-muted-foreground/20 px-0">
              <div className="grid gap-px bg-muted-foreground/20 md:grid-cols-2 lg:grid-cols-2">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-mutedd px-6 pt-8 pb-8 md:flex-col md:gap-0 md:px-8 md:pt-16"
                  >
                    {reason.icon}
                    <div>
                      <h3 className="mb-2 md:mt-6 md:text-lg">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature85 };
