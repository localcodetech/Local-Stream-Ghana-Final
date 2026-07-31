

import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import SpanWithClass from "@/components/common/Span";
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
                src="https://a3hsldrxqggrzozj.public.blob.vercel-storage.com/android%20app%20"
                alt="Project one"
                loading="lazy"
                className="h-full w-full object-cover rounded shadow-xl"
              />

              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
            </div>

            <div className="space-y-4 p-8">

              <div className="flex items-start justify-between">

                <span className="tech-label text-primary-fixed-dim">
                  01 Mobile Applications
                </span>

                <ArrowUpRight size={18} className="text-on-surface-variant" />

              </div>

              <Head className="font-display text-headline-lg font-semibold text-white">
              <TextLink text={"ANDROID APPLICATION"}  link={"https://play.google.com/store/apps/dev?id=7483170876338846380"}/>
              </Head>

              <Paragraph className="max-w-lg text-body-sm leading-6 text-on-surface-variant">  
                I have built mobile applications via < TextLink text={"LocalCode Technology"} link={"https://localcodetech.netlify.app/"}/> for businesses, media organizations, churches, and clients across different industries. My focus is on developing secure, scalable, and high-performance applications that deliver excellent user experiences on Android and iOS devices
              </Paragraph>

              <div className="flex flex-wrap gap-2 pt-2">
                < SpanWithClass text={"DART"} />
                <SpanWithClass text={"FLUTTER"} />
                <SpanWithClass text={"REACT NATIVE"} />
              </div>

            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-on-surface-variant">
                02 Python App
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              <TextLink text="VAULT-LANE MANAGER" link={"https://github.com/localcodetech/passwordmanager"} />
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
          VaultLane Password Manager is a secure application designed to help users safely store and manage their login credentials. The system uses a master password for authentication, ensuring that only authorized users can access the stored information.

            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
             <SpanWithClass text={"Python"} />
              <SpanWithClass text={"FireBase"} />
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-on-surface-variant">
                03 Browser Extension
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              <TextLink text={"SCREEN SNAPPER"}  link={"https://github.com/localcodetech/Screen-Snapper"} />
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              
              Screen Snapper is a lightweight browser extension built with Plasmo and React that allows users to quickly capture screenshots directly from their browser.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <SpanWithClass text={"PLASMO"} />
              <SpanWithClass text={"REACT"} />
              <SpanWithClass text={"TAILWINDCSS"} />
              <SpanWithClass text={"TYPESCRIPT"} />
              <SpanWithClass text={"JAVASCRIPT"} />
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl border-b-2 border-b-secondary p-6">

            <div className="flex items-start justify-between">

              <span className="tech-label text-secondary">
                04 G-EYE TV IPTV Panel
              </span>

              <ArrowUpRight size={18} className="text-on-surface-variant" />

            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              <TextLink text={"IPTV MANAGEMENT & STREAMING PLATFORM"}  link={"https://live.geyetv.com/"}/>
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
            
            I developed the G-EYE TV IPTV Panel, a comprehensive IPTV management platform designed to simplify the delivery, administration, and monitoring of television streaming services. 
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <SpanWithClass text={"ANT MEDIA SERVER"} />
              <SpanWithClass text={"MINISTRA"} />
              <SpanWithClass text={"SRT | RTMP | ZIXI "} />
              <SpanWithClass text={"REACT"} />

            </div>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioProjects;