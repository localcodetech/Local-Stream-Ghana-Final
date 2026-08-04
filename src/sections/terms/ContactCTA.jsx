import { ArrowRight, MessageCircle } from "lucide-react";

import HeroCard from "@/components/cards/HeroCard";
import Heading from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";
import ContainerLayout from "@/layout/Container";

const ContactCTA = () => {
  return (
    <section className="pb-24">

      <ContainerLayout>

        <HeroCard className="overflow-hidden rounded-4xl border border-border bg-card">

          <div className="flex flex-col gap-10 p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="max-w-2xl space-y-5">

              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-primary">
                Need Assistance?
              </span>

              <Heading className="text-4xl lg:text-5xl">
                Still Have Questions?
              </Heading>

              <Paragraph className="leading-8 text-muted-foreground">
                If you have questions about our Terms of Service,
                Privacy Policy or any of our services, our team is
                ready to help. Contact us before starting your
                project and we'll gladly provide clarification.
              </Paragraph>

            </div>

            {/* Right */}

            <div className="flex flex-wrap items-center gap-4">

              <Button size="lg">

                Contact Us

                <ArrowRight />

              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-background"
              >

                <MessageCircle />

                Chat on WhatsApp

              </Button>

            </div>

          </div>

        </HeroCard>

      </ContainerLayout>

    </section>
  );
};

export default ContactCTA;