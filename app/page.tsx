import { ParticlesBackground } from "@/components/particles-background";
import { Logo } from "@/components/logo";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Social } from "@/components/social";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <main className="container mx-auto px-4 py-12 relative z-10">
        <header className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-6">
          <Logo />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </header>

        <Services />
        <Contact />
        <Social />
      </main>
    </div>
  );
}