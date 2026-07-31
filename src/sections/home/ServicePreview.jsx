import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { Radio, Terminal, Tv, Podcast, Settings, Cloud, Globe, Code } from "lucide-react";

const ServicePreview = () => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <ContainerLayout>
        {/* Section Title */}

        <div className="mb-16 space-y-4 text-center">
          <Heading className="text-headline-lg">
            Full-Spectrum Infrastructure
          </Heading>

          <Paragraph className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
            From professional broadcasting to complex software engineering, we
            bridge the gap between media and technology.
          </Paragraph>
        </div>

        <div className="grid gap-gutter md:grid-cols-2">
          {/* Media & Broadcast */}

          <div className="space-y-gutter">
            <div className="mb-4 flex items-center gap-3">
              <Radio className="text-secondary" size={22} />

              <Head className="tech-label text-secondary">
                Media & Broadcast
              </Head>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-2xl p-6 transition-all">
                <Tv className="mb-4 text-primary-fixed-dim" size={30} />

                <Head className="mb-2 text-title-md font-semibold text-white">
                  IPTV Solutions
                </Head>

                <Paragraph className="text-body-sm text-on-surface-variant">
                  Custom middleware and delivery networks for modern TV
                  providers.
                </Paragraph>
              </div>

              <div className="glass-panel rounded-2xl p-6 transition-all">
                <Podcast className="mb-4 text-primary-fixed-dim" size={30} />

                <Head className="mb-2 text-title-md font-semibold text-white">
                  Streaming
                </Head>

                <Paragraph className="text-body-sm text-on-surface-variant">
                  Low-latency video and radio streaming for global audiences.
                </Paragraph>
              </div>

              <div className="glass-panel flex items-center gap-6 rounded-2xl p-6 transition-all sm:col-span-2">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface-bright">
                  <Settings className="text-primary-fixed-dim" size={28} />
                </div>

                <div>
                  <Head className="mb-1 text-title-md font-semibold text-white">
                    MCR & Engineering
                  </Head>

                  <Paragraph className="text-body-sm text-on-surface-variant">
                    Master Control Room design, setup, and maintenance services.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Solutions */}

          <div className="space-y-gutter">
            <div className="mb-4 flex items-center gap-3">
              <Terminal className="text-primary-fixed-dim" size={22} />

              <Head className="tech-label text-primary-fixed-dim">
                Technology Solutions
              </Head>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel flex items-center gap-6 rounded-2xl p-6 transition-all sm:col-span-2">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface-bright">
                  <Cloud className="text-primary-fixed-dim" size={28} />
                </div>

                <div>
                  <Head className="mb-1 text-title-md font-semibold text-white">
                    Cloud & Networks
                  </Head>

                  <Paragraph className="text-body-sm text-on-surface-variant">
                    Scalable cloud architecture and secure network
                    infrastructure.
                  </Paragraph>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 transition-all">
                <Globe className="mb-4 text-primary-fixed-dim" size={30} />

                <Head className="mb-2 text-title-md font-semibold text-white">
                  Web / Mobile
                </Head>

                <Paragraph className="text-body-sm text-on-surface-variant">
                  Premium software development for media platforms.
                </Paragraph>
              </div>

              <div className="glass-panel rounded-2xl p-6 transition-all">
                <Code className="mb-4 text-primary-fixed-dim" size={30} />

                <Head className="mb-2 text-title-md font-semibold text-white">
                  Custom Software
                </Head>

                <Paragraph className="text-body-sm text-on-surface-variant">
                  Bespoke automation tools for broadcast workflows.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ServicePreview;