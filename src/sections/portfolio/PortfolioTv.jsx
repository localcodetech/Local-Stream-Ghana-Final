import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { tvClients } from "@/data/portfolio";

import { Tv, ArrowUpRight } from "lucide-react";

const PortfolioTv = () => {
  return (
    <section className="bg-surface-container-lowest py-24">

      <ContainerLayout>

        <div className="mb-12 space-y-4">

          <div className="flex items-center gap-3">
            <Tv size={20} className="text-primary-fixed-dim" />

            <Paragraph className="tech-label text-primary-fixed-dim">
              IPTV Clients
            </Paragraph>
          </div>

          <Head className="font-display text-headline-lg font-semibold text-white">
            Channels On Our Network
          </Head>

          <Paragraph className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
            Television stations delivered through our IPTV middleware and cloud
            playout.
          </Paragraph>

        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">

          {tvClients.map((channel) => {
            return (
              <a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noreferrer"
              >
                <HeroCard className="glass-panel flex h-full flex-col overflow-hidden rounded-2xl p-0">

                  <div className="relative h-40 shrink-0">
                    <img
                      src={channel.image}
                      alt={channel.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
                  </div>

                  <div className="space-y-3 p-6">

                    <div className="flex items-start justify-between">

                      <Head className="font-display text-title-md font-semibold text-white">
                        {channel.name}
                      </Head>

                      <ArrowUpRight size={18} className="text-on-surface-variant" />

                    </div>

                    <Paragraph className="text-body-sm text-on-surface-variant">
                      {channel.location}
                    </Paragraph>

                    <div className="border-t border-outline-variant/50 pt-4 tech-label text-on-surface-variant">
                      {channel.detail}
                    </div>

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

export default PortfolioTv;