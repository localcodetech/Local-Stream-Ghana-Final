import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";

import ContainerLayout from "@/layout/Container";

import { ArrowRight, GitBranchPlus, LucideMapPinCheckInside, Mail } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="bg-background pb-16 pt-32">

      <ContainerLayout>

        <div className="grid items-center gap-16 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-6 lg:col-span-2">

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/20 px-4 py-2 tech-label text-primary-fixed-dim">
              <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />
              Available for Work
            </span>

            <Head className="font-display text-headline-lg font-bold text-white lg:text-display-lg">
              Hi, I'm  Ben Richard Ephraim {" "}.
              <span className="block text-primary-fixed-dim">
                I build for the web.
              </span>
            </Head>

            <Paragraph className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Frontend developer based in Accra, Ghana. I build fast, accessible
              interfaces with React and Tailwind, and I care about the details
              most people scroll past.
            </Paragraph>

            <div className="flex flex-wrap items-center gap-4 pt-2">

              <Button
                size="lg"
                className="rounded-lg bg-primary-container font-bold text-on-primary-container glow-btn hover:bg-primary-container"
              >
                View My Work
                <ArrowRight size={16} />
              </Button>

              <div className="flex gap-3">
                <a
                
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary"
                >
                  <GitBranchPlus size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary"
                >
                  <LucideMapPinCheckInside size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary"
                >
                  <Mail size={18} />
                </a>

              </div>

            </div>

          </div>

          {/* Photo */}

          <div className="glass-panel relative overflow-hidden rounded-3xl p-2">

            <img
              src="https://a3hsldrxqggrzozj.public.blob.vercel-storage.com/localstreamghceo.jpg"
              alt="Portrait"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />

            <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioHero;