import { Navbar5 } from "@/components/navbar-5";
import { Hero195 } from "@/components/hero-195";
import { Hero27 } from "@/components/hero27";
import { Cta13 } from "@/components/cta-13";
import { Footer2 } from "@/components/footer-2";
import { Services6 } from "@/components/Services6";
import { Feature250 } from "@/components/Feature250";
import { Feature76 } from "@/components/Feature76";
import { Feature85 } from "@/components/Feature85";
import { ProBlocksPricingSection4 } from "@/components/footer-2 copy";

export default function Home() {
  return (
    <>
      <Navbar5 />
      <Hero195
        title="The Sulv Platform: How We Build at the Speed of Ideas."
        description="Sulv is our revolutionary internal platform that uses a team of specialized AI agents to automate the entire Software Development Life Cycle (SDLC)."
        primaryButtonText="Book A Demo"
        primaryButtonUrl="#contact"
      />
      <Feature250 />
      <Services6 />
      <Feature76 />
      <Hero27 />
      <Feature85 />
      <Cta13 />
      <ProBlocksPricingSection4 />
      <Footer2 />
      {/* Place the new component here */}
    </>
  );
}
