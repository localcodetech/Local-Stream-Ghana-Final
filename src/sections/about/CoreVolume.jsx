import Head from "@/components/common/HeadOne";
import HeroCard from "@/components/cards/HeroCard";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import {
  Lightbulb,
  Award,
  ShieldCheck,
  UserCheck,
  Zap,
  Eye,
} from "lucide-react";

const CoreValues = () => {
  return (
    <section className="space-y-16 bg-surface-container-lowest py-24">

      <ContainerLayout>

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">

          <Paragraph className="tech-label text-secondary">
            Company Culture
          </Paragraph>

          <Head className="font-display text-headline-lg font-semibold text-white">
            Our Core Values
          </Head>

          <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
            These principles define how we innovate, collaborate, and deliver
            world-class digital media and technology solutions every day.
          </Paragraph>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-3">

          {/* Innovation */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Lightbulb size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              Innovation
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Pushing boundaries through cutting-edge broadcast technology,
              cloud infrastructure, and intelligent digital solutions.
            </Paragraph>

          </HeroCard>

          {/* Excellence */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Award size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              Excellence
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Delivering ultra-low latency, crystal-clear streaming, and
              uncompromising quality in every solution.
            </Paragraph>

          </HeroCard>

          {/* Reliability */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <ShieldCheck size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              Reliability
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Providing dependable infrastructure with industry-leading uptime,
              security, and performance.
            </Paragraph>

          </HeroCard>

          {/* Empowerment */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <UserCheck size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              Empowerment
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Equipping African creators, broadcasters, and businesses with
              technology that enables global reach.
            </Paragraph>

          </HeroCard>

          {/* Transparency */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Zap size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              Transparency
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Building trust through clear communication, honest pricing,
              measurable performance, and accountability.
            </Paragraph>

          </HeroCard>

          {/* User-Centric */}
          <HeroCard className="glass-panel flex flex-col items-center gap-6 rounded-2xl p-8 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Eye size={28} />
            </div>

            <Head className="text-title-md font-semibold text-white">
              User-Centric
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Creating intuitive digital experiences that prioritize our clients,
              their audiences, and long-term success.
            </Paragraph>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default CoreValues;