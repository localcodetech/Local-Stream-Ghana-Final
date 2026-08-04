import Paragraph from "@/components/common/ParagraphTag";
import Head from "@/components/common/HeadOne";
import { Separator } from "@/components/ui/separator";
import ContainerLayout from "./Container";
import { Rss, Satellite, Mail, Copyright } from "lucide-react";
import TextLink from "@/components/common/TextLink";
import { appName } from "@/data/appConstants";

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">

      <ContainerLayout>

        <section className="py-16">

          {/* Top Footer */}

          <div className="grid gap-gutter md:grid-cols-2 xl:grid-cols-4">

            {/* Company */}

            <div className="space-y-6">

              <Head className="font-display text-headline-lg font-bold text-on-surface">
                {appName}
              </Head>

              <Paragraph className="max-w-sm text-body-sm leading-6 text-on-surface-variant">
                Empowering Africa's digital narrative through cutting-edge media
                technology and software solutions.
              </Paragraph>

            </div>

            {/* Group */}

            <div className="space-y-6">

              <Head className="text-title-md font-semibold text-white">
                Group
              </Head>

              <div className="flex flex-col gap-3">

                <TextLink text="RichBen Media" link="" />
                <TextLink text="LocalCode Technology" link="" />
                <TextLink text="Portfolio" link="/" />

              </div>

            </div>

            {/* Solutions */}

            <div className="space-y-6">

              <Head className="text-title-md font-semibold text-white">
                Solutions
              </Head>

              <div className="flex flex-col gap-3">

                <TextLink text="Live Streaming" />
                <TextLink text="Broadcast Infrastructure" />
                <TextLink text="Cloud Solutions" />
                <TextLink text="Website Development" />
                <TextLink text="Mobile App Development" />

              </div>

            </div>

            {/* Legal */}

            <div className="space-y-6">

              <Head className="text-title-md font-semibold text-white">
                Legal
              </Head>

              <div className="flex flex-col gap-3">

                <TextLink text="Privacy Policy" link="/privacy" />
                <TextLink
                  text="Terms of Service"
                  link="/termsofservices"
                />
                <TextLink text="Contact Us" link="/contact" />

              </div>

            </div>

          </div>

          <Separator className="mt-16 bg-outline-variant/20" />

          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-4 text-body-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-2">

              <Copyright size={16} />

              <span>
                {new Date().getFullYear()} RichBen Media Group Limited. All
                Rights Reserved.
              </span>

            </div>

            <div className="flex items-center gap-6">

              <button className="text-on-surface-variant transition-colors hover:text-primary">
                <Rss size={18} />
              </button>

              <button className="text-on-surface-variant transition-colors hover:text-primary">
                <Satellite size={18} />
              </button>

              <button className="text-on-surface-variant transition-colors hover:text-primary">
                <Mail size={18} />
              </button>

            </div>

          </div>

        </section>

      </ContainerLayout>

    </footer>
  );
};

export default Footer;