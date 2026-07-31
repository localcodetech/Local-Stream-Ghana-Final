import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import { Network, Check, Radio } from "lucide-react";

import ContainerLayout from "@/layout/Container";


const ServiceGrid = () => {
  return (
    <section className="bg-background pb-24">

      <ContainerLayout>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

          {/* left side */}

          <HeroCard className="glass-panel relative flex gap-5 overflow-hidden rounded-2xl p-8 md:col-span-2">

            <div className="space-y-4">

              <span className="inline-block rounded border border-outline-variant px-2 py-1 tech-label text-on-surface-variant">
                01 Core Infrastructure
              </span>

              <Head className="font-display text-headline-lg font-semibold text-white">
                Next-Gen IPTV Solutions
              </Head>

              <Paragraph className="max-w-md text-body-sm leading-6 text-on-surface-variant">
                End-to-end middleware solutions for residential and hospitality
                environments, Custom UI/UX, VOD Integration, and localized
                content delivery networks
              </Paragraph>

              <div>
                <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                  <li className="flex items-center gap-2 tech-label text-on-surface-variant">
                    <Check size={14} className="text-primary" /> 4k Ultra HD Support
                  </li>
                  <li className="flex items-center gap-2 tech-label text-on-surface-variant">
                    <Check size={14} className="text-primary" /> Multi-Device Sync
                  </li>
                  <li className="flex items-center gap-2 tech-label text-on-surface-variant">
                    <Check size={14} className="text-primary" /> DRM Protection
                  </li>
                  <li className="flex items-center gap-2 tech-label text-on-surface-variant">
                    <Check size={14} className="text-primary" /> Dynamic Ad Insertion
                  </li>
                </ul>
              </div>

            </div>

            <Network
              size={150}
              className="pointer-events-none absolute -right-6 top-6 text-white/5"
            />

          </HeroCard>

          {/* right side */}

          <HeroCard className="glass-panel flex flex-col gap-4 overflow-hidden rounded-2xl p-0">

            <div className="relative h-44 shrink-0">
              <img
                src="https://i.imgur.com/5U66MJO.jpeg"
                alt="stream bg"
                loading="lazy"
                fetchPriority="auto"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
            </div>

            <div className="space-y-3 p-6 pt-0">

              <span className="tech-label text-secondary">02 Streaming</span>

              <Head className="font-display text-title-md font-semibold text-white">
                Online TV & Radio
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                Launch your digital Station with low-latency HLS Stream and
                High-digital audio encoders
              </Paragraph>

              <span className="flex items-center justify-between border-t border-outline-variant/50 pt-4 tech-label text-on-surface-variant">
                64-320kbps AAC+
                <Radio size={16} className="text-primary" />
              </span>

            </div>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ServiceGrid;