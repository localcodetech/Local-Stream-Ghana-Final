import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";

import ContainerLayout from "@/layout/Container";

import { NavLink } from "react-router-dom";

import { AlertOctagonIcon , Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-dvh items-center bg-background pt-24">

      <ContainerLayout>

        <div className="mx-auto max-w-xl space-y-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-bright">
            <AlertOctagonIcon size={36} className="text-secondary animate-live-pulse"  />
          </div>

          <div className="space-y-4">

            <Paragraph className="tech-label text-secondary">
              Error 404 · Signal Lost
            </Paragraph>

            <Head className="font-display text-headline-lg font-bold text-white lg:text-display-lg">
              This channel is
              <span className="block text-primary-fixed-dim">
                off the air.
              </span>
            </Head>

            <Paragraph className="mx-auto max-w-md text-body-lg leading-relaxed text-on-surface-variant">
              The page you're looking for was moved, renamed, or never existed.
              Let's get you back to a working frequency.
            </Paragraph>

          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">

            <NavLink to="/">
              <Button
                size="lg"
                className="rounded-lg bg-primary-container font-bold text-on-primary-container glow-btn hover:bg-primary-container"
              >
                <Home size={16} />
                Back to Home
              </Button>
            </NavLink>

            <NavLink to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-secondary bg-transparent font-bold text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                <ArrowLeft size={16} />
                Contact Support
              </Button>
            </NavLink>

          </div>

          <div className="glass-panel mx-auto flex max-w-xs items-center justify-center gap-2 rounded-full px-4 py-2 tech-label text-on-surface-variant">
            <span className="size-2 rounded-full bg-secondary live-pulse" />
            No stream detected on this route
          </div>

        </div>

      </ContainerLayout>

    </main>
  );
};

export default NotFound;