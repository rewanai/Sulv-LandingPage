"use client";

import {
  BarChart,
  Rocket,
  Network,
  Wrench,
  PieChart,
  SquareKanban,
  BugOff,
} from "lucide-react";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Tab {
  title: string;
  icon: React.ReactNode;
  image: string;
}

export interface Hero195Props {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonUrl: string;
  secondaryButtonUrl?: string;
  tabs?: Tab[];
}

const defaultTabs: Tab[] = [
  { title: "Idea", icon: <SquareKanban />, image: "main.png" },
  { title: "Planning", icon: <BarChart />, image: "Planning.png" },
  { title: "Analysis", icon: <PieChart />, image: "user story board2.png" },
  { title: "Design", icon: <Network />, image: "Design.png" },
  { title: "QA", icon: <BugOff />, image: "qa.png" },
  { title: "Deploy", icon: <Rocket />, image: "deployy.png" },
  { title: "Maintain", icon: <Wrench />, image: "maintain.png" },
];

const Hero195 = ({
  title = "The Sulv Platform: How We Build at the Speed of Ideas.",
  description = "Sulv is our revolutionary internal platform that uses a team of specialized AI agents to automate the entire Software Development Life Cycle (SDLC).",
  primaryButtonText = "Book A Demo",
  primaryButtonUrl = "#contact",
  secondaryButtonUrl,
  secondaryButtonText,
  tabs = defaultTabs,
}: Hero195Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="-z-10 absolute inset-x-0 flex h-full w-full items-center justify-center opacity-600">
          <Image
            alt="background"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
            width={1440}
            height={800}
            className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90 object-cover w-full h-auto"
          />
        </div>

        <div className="py-20">
          <div className="relative mx-auto max-w-2xl p-2">
            <h1
              className="mx-1 mt-6 text-center text-5xl md:text-5xlM"
              style={{ fontFamily: "shiba" }}
            >
              {title}
            </h1>

            <p className="text-muted-foreground mx-2 mt-6 text-center text-lg font-medium md:text-lg">
              {description}
            </p>

            <div className="mx-2 mt-6 flex justify-center gap-2">
              <Button asChild>
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>

              {secondaryButtonText && (
                <Button variant="outline" asChild>
                  <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
                </Button>
              )}
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <Tabs defaultValue={tabs[0]?.title} onValueChange={setActiveTab}>
              <div className="px-2">
                <TabsList className="mx-auto mb-6 flex h-auto w-fit max-w-xs flex-wrap justify-center gap-2 md:max-w-none">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.title}
                      value={tab.title}
                      className="text-muted-foreground font-normal"
                    >
                      {tab.icon}
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="relative isolate">
                <div className="relative z-10">
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.title}
                      value={tab.title}
                      className={cn(
                        " -mx-px transition-opacity duration-500",
                        {
                          "animate-in fade-in opacity-100":
                            activeTab === tab.title,
                          "opacity-0": activeTab !== tab.title,
                        }
                      )}
                    >
                      <ContainerScroll titleComponent={tab.title}>
                        <Image
                          src={`/${tab.image}`}
                          alt={tab.title}
                          width={1400}
                          height={720}
                          className="mx-auto h-full rounded-2xl object-cover"
                          draggable={false}
                        />
                      </ContainerScroll>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero195 };

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      className="relative flex h-[20rem] items-center justify-center"
      ref={containerRef}
    >
      <div className="relative w-full" style={{ perspective: "1000px" }}>
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>{children}</Card>
      </div>
    </div>
  );
};

export const Header = ({
  titleComponent,
}: {
  titleComponent: React.ReactNode;
}) => (
    <motion.div
      style={{ position: "relative", zIndex: -1, opacity: 0 }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => (
    <motion.div
      style={{ rotateX: rotate, scale }}
      className="-4 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] p-2 shadow-2xl md:h-[40rem] md:p-6"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:p-4 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
