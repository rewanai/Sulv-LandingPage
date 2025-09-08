"use client";

import Fade from "embla-carousel-fade";
import { Zap, Code, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const DURATION = 8000;

const accordions = [
  {
    id: "1",
    question: "How fast can Sulv deliver a project?",
    icon: <Zap className="w-5" />,
    answer: "From idea to launch before the day is over.",
    image: "2.png",
  },
  {
    id: "2",
    question: "Do I need coding skills to use Sulv?",
    icon: <Code className="w-5" />,
    answer: "No. You provide your requirements, and Sulv’s AI agents handle the entire software development life cycle for you.",
    image: "3.png",
  },
  {
    id: "3",
    question: "Is my data secure with Sulv?",
    icon: <LockKeyhole className="w-5" />,
    answer: "Yes. Security best practices are embedded at every step, and automation reduces human access to sensitive information.",
    image: "4.png",
  },
];

const Hero27 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentAccordion, setCurrentAccordion] = useState("1");

  useEffect(() => {
    api?.scrollTo(+currentAccordion - 1);
    const interval = setInterval(() => {
      setCurrentAccordion((prev) => {
        const next = parseInt(prev) + 1;
        return next > 3 ? "1" : next.toString();
      });
    }, DURATION);

    return () => clearInterval(interval);
  }, [api, currentAccordion]);

  return (
    <section className="relative pt-32">
      <div className="container">
        <div className="mx-auto grid  gap-20 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">
              Platform
            </Badge>
            <h1 className="mb-8 text-3xl font-medium lg:text-5xl">
              Build your own project
            </h1>
            <Accordion
              type="single"
              value={currentAccordion}
              onValueChange={(value) => {
                setCurrentAccordion(value);
                console.log(value);
                api?.scrollTo(+value - 1);
              }}
            >
              {accordions.map((accordion) => (
                <AccordionItem
                  key={accordion.id}
                  value={accordion.id}
                  className="border-b-0"
                >
                  <AccordionTrigger className="text-left data-[state=closed]:text-muted-foreground">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                        {accordion.icon}
                      </span>
                      <span className="font-medium lg:text-lg">
                        {accordion.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground lg:text-base">
                    {accordion.answer}
                    <div className="mt-8 h-px bg-muted">
                      <div
                        className="h-px animate-progress "
                        style={{
                          animationDuration: `${DURATION}ms`,
                        }}
                      ></div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Carousel
              opts={{
                duration: 50,
              }}
              setApi={setApi}
              plugins={[Fade()]}
            >
              <CarouselContent>
                {accordions.map((accordion) => (
                  <CarouselItem key={accordion.id}>
                    <div>
                      <img
                        src={accordion.image}
                        alt="placeholder"
                        className="max-h-96 w-full object-cover lg:max-h-none"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero27 };
