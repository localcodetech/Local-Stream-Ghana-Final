import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { radioClients } from "@/data/portfolio";

import { Radio, ArrowUpRight } from "lucide-react";

const PortfolioRadio = () => {
  return (
    <section className="bg-background py-24">

      <ContainerLayout>

        <div className="mb-12 space-y-4">

          <div className="flex items-center gap-3">
            <Radio size={20} className="text-secondary animate-live-pulse" />

            <Paragraph className="tech-label text-secondary">
              Radio Clients
            </Paragraph>
          </div>

          <Head className="font-display text-headline-lg font-semibold text-white">
            Stations We Stream
          </Head>

          <Paragraph className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
            Live radio stations running on our streaming infrastructure. Click
            through to listen.
          </Paragraph>

        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">

          {radioClients.map((station) => {
            return (
              <a
                key={station.name}
                href={station.link}
                target="_blank"
                rel="noreferrer"
              >
                <HeroCard className="glass-panel h-full space-y-4 rounded-2xl p-6">

                  <div className="flex items-start justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-bright">
                      <Radio size={18} className="text-primary" />
                    </div>

                    <ArrowUpRight size={18} className="text-on-surface-variant" />

                  </div>

                  <Head className="font-display text-title-md font-semibold text-white">
                    {station.name}
                  </Head>

                  <Paragraph className="text-body-sm text-on-surface-variant">
                    {station.location}
                  </Paragraph>

                  <div className="flex items-center gap-2 border-t border-outline-variant/50 pt-4 tech-label text-on-surface-variant">
                    <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />
                    {station.detail}
                  </div>

                </HeroCard>
              </a>
            );
          })}

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioRadio;