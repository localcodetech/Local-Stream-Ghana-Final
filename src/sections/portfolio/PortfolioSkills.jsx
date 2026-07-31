import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { Code2, Layout, Server, Wrench } from "lucide-react";

const PortfolioSkills = () => {
  return (
    <section className="bg-surface-container-lowest py-24">

      <ContainerLayout>

        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">

          <Paragraph className="tech-label text-secondary">
            What I Do
          </Paragraph>

          <Head className="font-display text-headline-lg font-semibold text-white">
            Skills & Tools
          </Head>

          <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
            The stack I reach for, and the kind of work I take on.
          </Paragraph>

        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Layout size={22} className="text-primary" />
            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              Frontend
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Building responsive interfaces that work on every screen size,
              with a focus on speed and accessibility.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">React</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Tailwind</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">JavaScript</span>
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Server size={22} className="text-primary" />
            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              Backend
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              APIs, authentication, and databases. Getting data where it needs
              to go without the app falling over.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Node.js</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Express</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">MongoDB</span>
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Code2 size={22} className="text-primary" />
            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              UI Systems
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Reusable component libraries and design systems that keep a
              product consistent as it grows.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">shadcn/ui</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Figma</span>
            </div>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Wrench size={22} className="text-primary" />
            </div>

            <Head className="font-display text-title-md font-semibold text-white">
              Tooling
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Version control, deployment, and the everyday workflow that keeps
              projects shipping.
            </Paragraph>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Git</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Vite</span>
              <span className="rounded border border-outline-variant bg-surface-bright px-3 py-1 tech-label text-on-surface">Vercel</span>
            </div>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioSkills;