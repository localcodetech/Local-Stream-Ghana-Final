import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import {
  PlayCircle,
  BarChart3,
  Cloud,
  Video,
  AudioLines,
  ArrowUpRight,
  MonitorSmartphone,
  Network,
  Code2,
  Satellite,
  CloudCog,
} from "lucide-react";

const ServiceGridTwo = () => {
  return (
    <section className="bg-background pb-24">

      <ContainerLayout>

        <div className="space-y-gutter">

          {/* Row one */}

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

            <div className="space-y-gutter">

              <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-bright">
                  <PlayCircle size={20} className="text-primary" />
                </div>

                <Head className="font-display text-title-md font-semibold text-white">
                  Live Streaming Services
                </Head>

                <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                  Multi-camera production for corporate events, church services,
                  and live concerts with RTMP/SRT backup.
                </Paragraph>

                <div className="space-y-2 pt-2">

                  <div className="h-1 overflow-hidden rounded-full bg-surface-container">
                    <div className="h-full w-[85%] rounded-full bg-primary-fixed-dim" />
                  </div>

                  <div className="flex justify-between tech-label text-on-surface-variant">
                    <span>Signal Strength</span>
                    <span>Optimal</span>
                  </div>

                </div>

              </HeroCard>

              <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-bright">
                  <BarChart3 size={20} className="text-primary" />
                </div>

                <Head className="font-display text-title-md font-semibold text-white">
                  MCR Outsourcing
                </Head>

                <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                  24/7 Master Control Room services, ensuring your content stays
                  on air with zero downtime.
                </Paragraph>

                <div className="flex flex-wrap gap-2 pt-2">

                  <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">
                    Uptime: 99.9%
                  </span>

                  <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">
                    24/7 Support
                  </span>

                </div>

              </HeroCard>

            </div>

            <HeroCard className="glass-panel relative flex flex-col justify-end overflow-hidden rounded-2xl p-0 md:col-span-2">

              <img
                src="https://i.imgur.com/5U66MJO.jpeg"
                alt="Master control room"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-background via-background/85 to-transparent" />

              <div className="relative z-10 space-y-4 p-8">

                <span className="tech-label text-primary-fixed-dim">
                  04 Engineering
                </span>

                <Head className="font-display text-headline-lg font-semibold text-white">
                  Master Broadcast Solutions
                </Head>

                <Paragraph className="max-w-lg text-body-sm leading-6 text-on-surface-variant">
                  Turnkey engineering for TV and Radio stations. From acoustic
                  treatment to transmitter installation and OB Van integration.
                </Paragraph>

                <div className="grid gap-4 pt-2 sm:grid-cols-2">

                  <div className="glass-panel space-y-2 rounded-xl p-4">
                    <Cloud size={18} className="text-primary" />

                    <Paragraph className="tech-label text-on-surface">
                      Transmitter Design
                    </Paragraph>
                  </div>

                  <div className="glass-panel space-y-2 rounded-xl p-4">
                    <Video size={18} className="text-secondary" />

                    <Paragraph className="tech-label text-on-surface">
                      Studio Integration
                    </Paragraph>
                  </div>

                </div>

              </div>

            </HeroCard>

          </div>

          {/* Row two */}

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

            <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

              <div className="flex items-start justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-bright">
                  <AudioLines size={20} className="text-primary" />
                </div>

                <ArrowUpRight size={18} className="text-on-surface-variant" />

              </div>

              <Head className="font-display text-title-md font-semibold text-white">
                Professional Radio Talents
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                Access a roster of experienced radio DJs and voice-over artists
                for commercial and live programming.
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel-active space-y-4 rounded-2xl p-8 md:col-span-2">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <MonitorSmartphone size={20} className="text-primary" />
                </div>

                <span className="tech-label text-primary-fixed-dim">
                  07 Software
                </span>

              </div>

              <Head className="font-display text-title-md font-semibold text-white">
                Web & Mobile Ecosystems
              </Head>

              <Paragraph className="max-w-xl text-body-sm leading-6 text-on-surface-variant">
                Custom OTT platforms, broadcast automation software, and mobile
                apps for iOS and Android. Built with React Native and Node.js
                for scalability.
              </Paragraph>

              <div className="flex flex-wrap gap-2 pt-2">

                <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">
                  OTT / IPTV
                </span>

                <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">
                  E-Commerce
                </span>

                <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">
                  SaaS Infrastructure
                </span>

              </div>

            </HeroCard>

          </div>

          {/* Row three */}

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

            <HeroCard className="glass-panel relative space-y-4 overflow-hidden rounded-2xl p-8 md:col-span-2">

              <div className="flex items-center gap-3">

                <Network size={20} className="text-primary" />

                <Head className="font-display text-title-md font-semibold text-white">
                  Enterprise Network Infrastructure
                </Head>

              </div>

              <Paragraph className="max-w-lg text-body-sm leading-6 text-on-surface-variant">
                Mission-critical networking for media companies. Fiber optics,
                microwave links, and secure VPN tunnels for remote broadcasting.
              </Paragraph>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">

                <div className="rounded-xl border border-outline-variant bg-surface-container-low p-4 text-center">
                  <Head className="font-display text-title-md font-bold text-white">
                    10Gbps
                  </Head>

                  <Paragraph className="tech-label text-on-surface-variant">
                    Throughput
                  </Paragraph>
                </div>

                <div className="rounded-xl border border-outline-variant bg-surface-container-low p-4 text-center">
                  <Head className="font-display text-title-md font-bold text-white">
                    Zero
                  </Head>

                  <Paragraph className="tech-label text-on-surface-variant">
                    Packet Loss
                  </Paragraph>
                </div>

                <div className="rounded-xl border border-outline-variant bg-surface-container-low p-4 text-center">
                  <Head className="font-display text-title-md font-bold text-white">
                    AES-256
                  </Head>

                  <Paragraph className="tech-label text-on-surface-variant">
                    Encryption
                  </Paragraph>
                </div>

              </div>

            </HeroCard>

            <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

              <Code2 size={22} className="text-primary" />

              <Head className="font-display text-title-md font-semibold text-white">
                Custom Software Dev
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                Tailored ERP and CRM systems for media houses to manage
                advertising slots and talent contracts.
              </Paragraph>

            </HeroCard>

          </div>

          {/* Row four */}

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

            <HeroCard className="glass-panel space-y-4 rounded-2xl border-b-2 border-b-secondary p-6">

              <Satellite size={22} className="text-secondary" />

              <Head className="font-display text-title-md font-semibold text-white">
                Satellite Uplink
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                Global reach via C-Band and Ku-Band satellite services for
                international signal distribution.
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

              <CloudCog size={22} className="text-primary" />

              <Head className="font-display text-title-md font-semibold text-white">
                Cloud Playout
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                Linear channel playout from the cloud. Automate your 24/7
                broadcast without physical servers.
              </Paragraph>

            </HeroCard>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ServiceGridTwo;