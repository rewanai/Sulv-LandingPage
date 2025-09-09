
import { Card } from "@/components/ui/card";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Greenfield Product Development",
      description:
        "Launch Your Next Big Idea, Built on an Enterprise Foundation",
      content:
        "Take a new product from a simple idea to a fully architected, deployable .NET application in a fraction of the time. Sulv.ai ensures your v1 is built with the scalability and best practices of a v5. Ideal for startups, innovation labs, and new product teams.",
    },
    {
      title: "API Modernization & Migration",
      description: "Modernize Legacy Systems with Confidence",
      content:
        "Ingest your existing system's requirements and let Sulv.ai design and build a modern, Clean Architecture-based API. Accelerate your move to microservices or serverless on Azure with a consistent, well-documented foundation. Ideal for teams migrating from .NET Framework or monolithic architectures.",
    },
    {
      title: "Team Acceleration & Standardization",
      description: "Onboard Developers and Enforce Best Practices, Instantly",
      content:
        "Use Sulv.ai as your 'Chief Architect in a Box.' Ensure every developer on your team, regardless of experience level, is building to the same high standard of quality, security, and architectural purity. Ideal for growing teams and organizations committed to engineering excellence.",
    },
  ];

  return (
    <section id="solutions" className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Solutions for Modern .NET Challenges
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Where Sulv.ai Makes a Difference
            </p>
          </div>
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-3xl opacity-60"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-background"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-base font-medium text-muted-foreground mb-4">
                      {useCase.description}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">{useCase.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { UseCasesSection };
