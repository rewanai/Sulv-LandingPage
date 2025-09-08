"use client";

import { MenuIcon } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// Define a type for the feature objects
interface Feature {
    title: string;
    description: string;
    href: string;
}

const Navbar5 = () => {
    // Explicitly type the features array
    const features: Feature[] = [
        // You can add your actual features here
        // {
        //   title: "Feature Title",
        //   description: "Feature description.",
        //   href: "/your-link",
        // }
    ];

    return (
        <section className="py-4">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <a
                        href="https://www.shadcnblocks.com"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="Logo.png"
                            className="max-h-8"
                            alt="Shadcn UI Navbar"
                        />
                    </a>
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {features.map((feature, index) => (
                                            <NavigationMenuLink
                                                href={feature.href}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={feature.title}>
                                                    <p className="mb-1 font-semibold text-foreground">
                                                        {feature.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#process"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Process
                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#benefits"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Benefits
                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#capabilities"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Capabilities
                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden items-center gap-4 lg:flex">
                        <Button>Contact Us</Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <a
                                        href="https://www.shadcnblocks.com"
                                        className="flex items-center gap-2"
                                    >
                                        <img
                                            src="Logo.png"
                                            className="max-h-8"
                                            alt="Shadcn UI Navbar"
                                        />
                                    </a>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <Accordion type="single" collapsible className="mt-4 mb-2">
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {features.map((feature, index) => (
                                                    <a
                                                        href={feature.href}
                                                        key={index}
                                                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                    >
                                                        <div key={feature.title}>
                                                            <p className="mb-1 font-semibold text-foreground">
                                                                {feature.title}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex flex-col gap-6">
                                    <a href="#process" className="font-medium">
                                        Process
                  </a>
                                    <a href="#benefits" className="font-medium">
                                        Benefits
                  </a>
                                    <a href="#capabilities" className="font-medium">
                                        Capabilities
                  </a>
                                </div>

                                <div className="mt-6 flex flex-col gap-4">
                                    <Button>Book A Demo</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { Navbar5 };