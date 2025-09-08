"use client";

import { Code, Cog, PenTool, Rocket, ScanEye } from "lucide-react";


const Services6 = () => {
  const services = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "The Strategist",
      description:
        "The process begins with our AI Strategist agent, which analyzes the initial idea, defines project scope, and creates a comprehensive development plan.",
      items: [],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "The Architect",
      description:
        "This agent takes the plan and designs the system architecture, database schemas, and user interface flows, creating a perfect blueprint.",
      items: [""],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "The Coder",
      description:
        "Following the blueprint, the Coder agent writes clean, efficient, and secure code on our rewan framework.",
      items: [""],
    },
    {
      icon: <ScanEye className="h-8 w-8" />,
      title: "The Inspector",
      description:
        "Our QA agent rigorously tests the application, running thousands of checks to identify bugs, security vulnerabilities, and performance issues before they ever become a problem.",
      items: [""],
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "The Deployer",
      description:
        "Once approved, the Deployer agent seamlessly packages and deploys the solution into the production environment.",
      items: [""],
    },
  ];

  return (
    <section id="process" className="bg-mutedd py-32">
      <div className="container">
        <div className="mx-auto  space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A Coordinated Team of AI Agents.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Within Sulv, every stage of creation is managed by a dedicated AI agent, ensuring expert execution and perfect coordination from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <div key={index} className="group space-y-6 text-center">
                <div className="bg-muted group-hover:bg-foreground group-hover:text-background mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-muted-foreground text-xs font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services6 };
