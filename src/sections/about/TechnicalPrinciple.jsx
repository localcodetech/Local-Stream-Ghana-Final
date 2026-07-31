import Head from "@/components/common/HeadOne";
import HeroCard from "@/components/cards/HeroCard";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { Flag, Eye, Calendar, Users, RadioTower, ShieldCheck } from "lucide-react";

const TechnicalPrinciple = () => {
  return (
    <section className="bg-surface-container-lowest py-24">

      <ContainerLayout>

        <div className="space-y-16">

          {/* Heading */}
          <div className="mx-auto max-w-2xl space-y-4 text-center">

            <Paragraph className="tech-label text-secondary">
              Core Principles
            </Paragraph>

            <Head className="font-display text-headline-lg font-semibold text-white">
              Our Mission & Vision
            </Head>

            <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
              Everything we build is driven by innovation, reliability and our
              commitment to transforming media technology across Africa.
            </Paragraph>

          </div>

          {/* Mission & Vision */}

          <div className="grid gap-gutter lg:grid-cols-2">

            <HeroCard className="glass-panel space-y-6 rounded-2xl p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Flag className="text-primary" />
              </div>

              <Head className="font-display text-title-md font-semibold text-white">
                Our Mission
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                To empower businesses, media organizations, and communities with
                innovative digital media, broadcast, and technology solutions by
                delivering reliable streaming infrastructure, software development,
                and professional technical services that connect people across
                Africa and beyond.
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel space-y-6 rounded-2xl p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Eye className="text-primary" />
              </div>

              <Head className="font-display text-title-md font-semibold text-white">
                Our Vision
              </Head>

              <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                To become Africa's leading media technology company, recognized for
                transforming digital broadcasting, streaming, and software
                innovation through reliable infrastructure, exceptional service, and
                cutting-edge technology.
              </Paragraph>

            </HeroCard>

          </div>

          {/* Statistics */}

          <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">

            <HeroCard className="glass-panel flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">

              <Calendar className="text-primary" size={28} />

              <Head className="font-display text-4xl font-bold text-primary-fixed-dim">
                2024
              </Head>

              <Paragraph className="tech-label text-on-surface-variant">
                Founded
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">

              <Users className="text-primary" size={28} />

              <Head className="font-display text-4xl font-bold text-primary-fixed-dim">
                50+
              </Head>

              <Paragraph className="tech-label text-on-surface-variant">
                Projects Delivered
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">

              <RadioTower className="text-primary" size={28} />

              <Head className="font-display text-4xl font-bold text-primary-fixed-dim">
                10,000+
              </Head>

              <Paragraph className="tech-label text-on-surface-variant">
                Streaming Hours
              </Paragraph>

            </HeroCard>

            <HeroCard className="glass-panel flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">

              <ShieldCheck className="text-primary" size={28} />

              <Head className="font-display text-4xl font-bold text-primary-fixed-dim">
                99.99%
              </Head>

              <Paragraph className="tech-label text-on-surface-variant">
                Infrastructure Uptime
              </Paragraph>

            </HeroCard>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default TechnicalPrinciple;