import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { Headphones, Handshake, Receipt } from "lucide-react";

const ContactProduction = () => {
  return (
    <section className="bg-background pb-24">

      <ContainerLayout>

        <Head className="mb-12 text-center font-display text-headline-lg font-semibold text-white">
          Production Consultation
        </Head>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <Headphones size={24} className="text-primary" />

            <Head className="font-display text-title-md font-semibold text-white">
              Technical Support
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Immediate technical assistance for ongoing broadcast operations or
              streaming sessions.
            </Paragraph>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <Handshake size={24} className="text-secondary" />

            <Head className="font-display text-title-md font-semibold text-white">
              Partnerships
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Explore strategic media partnerships, sponsorship opportunities,
              and hardware distribution.
            </Paragraph>

          </HeroCard>

          <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

            <Receipt size={24} className="text-primary" />

            <Head className="font-display text-title-md font-semibold text-white">
              Billing & Sales
            </Head>

            <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
              Inquiries regarding service tiers, invoicing, custom quotes, and
              corporate account management.
            </Paragraph>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ContactProduction;