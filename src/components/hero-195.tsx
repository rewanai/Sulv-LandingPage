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

import { useState } from "react";



import { cn } from "@/lib/utils";

import { LineShadowText } from "@/components/magicui/line-shadow-text";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import React, { useRef } from "react";

import { BorderBeam } from "@/components/magicui/border-beam";

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

  {

    title: "Idea",

    icon: <SquareKanban />,

    image: "main.png",

  },

  {

    title: "Planning",

    icon: <BarChart />,

    image: "Planning.png",

  },

  {

    title: "Analysis",

    icon: <PieChart />,

    image: "user story board2.png",

  },

  {

    title: "Design",

    icon: <Network />,

    image: "Design.png",

  },

  {

    title: "QA",

    icon: <BugOff />,

    image: "qa.png",

  },

  {

    title: "Deploy",

    icon: <Rocket />,

    image: "deployy.png",

  },

  {

    title: "Maintain",

    icon: <Wrench />,

    image: "maintain.png",

  },



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

          <img

            alt="background"

            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"

            className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"

          />

        </div>

        <div className=" py-20">



          <div className="relative mx-auto max-w-2xl p-2">
            <h1
              className="mx-1 mt-6 text-center text-5xl md:text-5xlM"
              style={{ fontFamily: 'shiba' }}
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

                      className="text-mutedd-foreground font-normal"

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

                        },

                      )}

                    >

                      <ContainerScroll

                        titleComponent={tab.title}

                      >

                        <img

                          src={tab.image}

                          alt={tab.title}

                          height={720}

                          width={1400}

                          className="mx-auto h-full rounded-2xl object-cover "

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

  const { scrollYProgress } = useScroll({

    target: containerRef,

  });

  const [isMobile, setIsMobile] = React.useState(false);



  React.useEffect(() => {

    const checkMobile = () => {

      setIsMobile(window.innerWidth <= 768);

    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {

      window.removeEventListener("resize", checkMobile);

    };

  }, []);



  const scaleDimensions = () => {

    return isMobile ? [0.7, 0.9] : [1.05, 1];

  };



  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);



  return (

    <div

      className="relative flex h-[20rem] items-center justify-center"

      ref={containerRef}

    >

      <div

        className="relative w-full"

        style={{

          perspective: "1000px",

        }}

      >

        <Header translate={translate} titleComponent={titleComponent} />

        <Card rotate={rotate} translate={translate} scale={scale}>

          {children}

        </Card>

      </div>

    </div>

  );

};



export const Header = ({

  translate,

  titleComponent,

}: {

  translate: MotionValue<number>;

  titleComponent: React.ReactNode;

}) => {

  return (

    <motion.div

      style={{



        position: 'relative',

        zIndex: -1,

      }}

      className="div mx-auto max-w-5xl text-centerr"

    >

      {titleComponent}

    </motion.div>

  );

};



export const Card = ({

  rotate,

  scale,

  children,

}: {

  rotate: MotionValue<number>;

  scale: MotionValue<number>;

  translate: MotionValue<number>;

  children: React.ReactNode;

}) => {

  return (

    <motion.div

      style={{

        rotateX: rotate,

        scale,

      }}

      className="-4 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] p-2 shadow-2xl md:h-[40rem] md:p-6"

    >

      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900">

        {children}

      </div>

    </motion.div>

  );

};

