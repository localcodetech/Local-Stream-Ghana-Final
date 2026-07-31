

import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import TextLink from "@/components/common/TextLink";

import ContainerLayout from "@/layout/Container";

import { ArrowUpRight } from "lucide-react";

const PortfolioProjects = () => {
  return (
    <section className="bg-background py-24">

      <ContainerLayout>

        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">

          <Paragraph className="tech-label text-secondary">
            Selected Work
          </Paragraph>

          <Head className="font-display text-headline-lg font-semibold text-white">
            Things I've Built
          </Head>

        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

          {/* Featured */}

          <HeroCard className="glass-panel flex flex-col overflow-hidden rounded-2xl p-0 md:col-span-2">

            <div className="relative h-64 shrink-0">
              <img
                src="https://geyetv.com/assets/logo-BmN54SqH.png"
                alt="Project one"
                loading="lazy"
                className="h-full w-full object-contain"
              />

              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
            </div>

            <div className="space-y-4 p-8">

              <div className="flex items-start justify-between">

                <span className="tech-label text-primary-fixed-dim">
                  01 Featured
                </span>

                <ArrowUpRight size={18} className="text-on-surface-variant" />

              </div>

              <Head className="font-display text-headline-lg font-semibold text-white">
              <TextLink text={"G-EYE TV IPTV PANEL"}  link={"https://live.geyetv.com/"}/>
              </Head>

              <Paragraph className="max-w-lg text-body-sm leading-6 text-on-surface-variant">
                G-EYE TV IP channel is Internet Protocol Television located at Ivory Coast, 
              </Paragraph>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">html </span>
                <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">JavaScript</span>
                <div className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">CSS </div>
              </div>

            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-on-surface-variant">
                02 Web App
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              <TextLink text="Valt Manager" link={"https://github.com/localcodetech/passwordmanager"} />
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
          VaultLane Password Manager is a secure application designed to help users safely store and manage their login credentials. The system uses a master password for authentication, ensuring that only authorized users can access the stored information.

            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Python </span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">FireBase</span>
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-on-surface-variant">
                03 Landing Page
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              Third Project
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Short description of what you built and why it mattered.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">HTML</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">CSS</span>
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl border-b-2 border-b-secondary p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-secondary">
                04 Dashboard
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              Fourth Project
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Short description of what you built and why it mattered.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">React</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Charts</span>
            </div>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioProjects;