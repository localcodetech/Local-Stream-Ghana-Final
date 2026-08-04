import aboutImage from "@/assets/images/homepage.jpg";
import Anchor from "@/components/common/AnchorLink";

import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { CheckCircle2, ArrowRight } from "lucide-react";

const PortfolioPreview = () => {
  return (
    <div className="bg-surface-dim py-24">
      <ContainerLayout>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="glass-panel relative aspect-square overflow-hidden rounded-3xl p-2 lg:aspect-video">
            <img
              src={aboutImage}
              alt="Broadcast engineer at a mixing console"
              className="h-full w-full rounded-2xl object-cover object-center"
            />

            <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
          </div>

          {/* Text */}

          <div className="space-y-8">
            <Heading className="text-headline-lg">
              Media Tech Infrastructure Specialists
            </Heading>

            <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
              Local Stream Ghana is more than a service provider; we are the
              architects of West Africa's digital transition. We specialize in
              building the mission-critical infrastructure that allows TV
              stations, radio houses, and corporate giants to reach their
              audiences with zero downtime.
            </Paragraph>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-primary" size={20} />

                <div>
                  <Head className="text-title-md font-semibold text-white">
                    Broadcast Grade Reliability
                  </Head>

                  <Paragraph className="text-body-sm text-on-surface-variant">
                    Tier-4 data center standards for all our streaming nodes.
                  </Paragraph>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-primary" size={20} />

                <div>
                  <Head className="text-title-md font-semibold text-white">
                    Local Expertise, Global Standards
                  </Head>

                  <Paragraph className="text-body-sm text-on-surface-variant">
                    A Ghanaian team with international certification and reach.
                  </Paragraph>
                </div>
              </div>
            </div>

            <Anchor className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-4">
              Learn more about our journey
              <ArrowRight size={18} />
            </Anchor>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default PortfolioPreview;