
import Anchor from "@/components/common/AnchorLink";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";

import ContainerLayout from "@/layout/Container";

import { Mail, GitBranchPlus } from "lucide-react";

import {FaInstagram, FaLinkedin, } from "react-icons/fa"

const PortfolioContact = () => {
  return (
    <section className="bg-surface-container-lowest py-24">

      <ContainerLayout>

        <div className="glass-panel rounded-3xl px-8 py-16 text-center">

          <div className="mx-auto max-w-2xl space-y-6">

            <Head className="font-display text-headline-lg font-bold text-white lg:text-display-lg">
              Let's work together.
            </Head>

            <Paragraph className="mx-auto max-w-xl text-body-sm leading-6 text-on-surface-variant">
              Got a project in mind, or just want to say hello? My inbox is
              always open.
            </Paragraph>

            <div className="flex flex-wrap justify-center gap-4 pt-4">

             <Anchor link={"mailto:superadmin@localstreamgh.com"}>
               <Button
                size="lg"
                className="rounded-lg bg-primary-container font-bold text-on-primary-container glow-btn hover:bg-primary-container"
              >
                <Mail size={16} />
                Send Me an Email
              </Button>
             </Anchor>

             <Anchor  target="_blank" link={"https://github.com/localcodetech"}>
               <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-secondary bg-transparent font-bold text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                <GitBranchPlus size={16} />
                View GitHub
              </Button>
             </Anchor>

            </div>

            <div className="flex items-center justify-center gap-6 pt-6 tech-label text-on-surface-variant">

              <a href="https://www.instagram.com/richben_media/" target="_blank" className="transition-colors hover:text-primary">
                <FaInstagram size={18} />
              </a>

              <a href="https://www.linkedin.com/in/richbenmedia/" className="transition-colors hover:text-primary">
                <FaLinkedin size={18} />
              </a>

              <a href="mailto:localstreamghana@gmail.com"   className="transition-colors hover:text-primary">
                <Mail size={18} />
              </a>

            </div>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default PortfolioContact;