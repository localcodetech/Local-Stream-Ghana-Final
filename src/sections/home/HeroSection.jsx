import heroImage from "@/assets/images/homepage.jpg";

import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import HeroCard from "@/components/cards/HeroCard";

import { Button } from "@/components/ui/button";

import ContainerLayout from "@/layout/Container";

import { ArrowRight, Play, Video, Server, Activity } from "lucide-react";
import Anchor from "@/components/common/AnchorLink";

const HeroSection = () => {
  return (
    <section className="bg-[url(homepage.jpg)] bg-cover bg-center bg-no-repeat relative isolate min-h-dvh overflow-hidden  ">
    {/* Background Image */}
    {/* <img
    src={heroImage}
    alt="Local Stream Ghana"
    loading="lazy"
    className="absolute inset-0 h-full w-full object-cover object-center"
    /> */}
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
    
    {/* Content */}
    <div className="relative z-10 flex min-h-dvh items-center pt-24">
    <ContainerLayout>
    <div className="grid items-center gap-16 lg:grid-cols-2">
    {/* left side*/}
    
    <div className="space-y-8">
    {/*  */}
    
    <span
    className=" inline-flex items-center gap-2 rounded-full
         border border-primary/30 bg-primary-container/20 px-4 py-2
                tech-label
                text-primary-fixed-dim
                "
    >
    <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />
    Live Infrastructure Ready
    </span>
    
    {/* Heading */}
    
    <Heading className="max-w-2xl font-display text-display-lg text-white hover:text-accent-foreground duration-1000 transition hover:translate-y-0.5">
    Connecting Africa Through{" "}
    <span className="text-primary-fixed-dim hover:text-primary/90 animation-duration-initial transition-all">Digital Media</span> & Technology
    </Heading>
    
    {/* Paragraph */}
    
    <Paragraph
    className="
                max-w-xl
                text-body-lg
                leading-relaxed
                text-on-surface-variant
                "
    >
    Professional IPTV, streaming, broadcast engineering, cloud
    infrastructure, website development, and software solutions for
    broadcasters, enterprises, governments, and organizations across
    Africa.
    </Paragraph>
    
    {/* CTA */}
    
    <div className="flex flex-wrap items-center gap-4">
   
   <Anchor link={"/services"}>
    <Button
    size="lg"
    className="
                  bg-primary-container
                  text-on-primary-container
                  font-bold
                  rounded-xl
                  glow-btn
                  hover:bg-primary-container
                  "
    >
    Explore Services
    <ArrowRight />
    </Button>
   </Anchor>
    
   <Anchor link={"/portfolio"}>
     <Button
    size="lg"
    variant="outline"
    className="
                  border-secondary
                  text-secondary
                  font-bold
                  rounded-xl
                  bg-transparent
                  hover:bg-secondary/10
                  hover:text-secondary
                  "
    >
    <Play />
    View Portfolio
    </Button>
   </Anchor>
    </div>
    </div>
    
    {/*right side */}
    
   
   {/*right side */}

            <div className="relative hidden lg:block">
              {/* Bottom Card - the big one, sits in normal flow */}

              <HeroCard
                className="
                w-full
                glass-panel
                rounded-3xl
                "
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Paragraph className="tech-label text-on-surface-variant">
                        Infrastructure
                      </Paragraph>

                      <Head className="mt-2 font-display text-3xl font-bold text-primary-fixed-dim">
                        99.99%
                      </Head>
                    </div>

                    <Server size={35} className="text-primary" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 flex justify-between text-body-sm text-on-surface-variant">
                        <span>Servers</span>

                        <span>100%</span>
                      </div>

                      <div className="h-2 rounded-full bg-surface-container overflow-hidden">
                        <div className="h-full w-full rounded-full bg-primary-fixed-dim" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-body-sm text-on-surface-variant">
                        <span>Network</span>

                        <span>99%</span>
                      </div>

                      <div className="h-2 rounded-full bg-surface-container overflow-hidden">
                        <div className="h-full w-[99%] rounded-full bg-primary-fixed-dim" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
                    <Activity size={15} className="text-secondary" />
                    All systems operational
                  </div>
                </div>
              </HeroCard>

              {/* Top Card - floats on the corner */}

              <HeroCard
                className="
                absolute
                -top-10
                -left-10
                z-20
                w-72
                glass-panel-active
                rounded-2xl
                "
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <Paragraph className="tech-label text-primary-fixed-dim">
                      Live Uplink
                    </Paragraph>

                    <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                      <Video className="text-primary" />
                    </div>

                    <div>
                      <Head className="text-title-md font-semibold text-white">
                        4K Broadcast
                      </Head>

                      <Paragraph className="text-body-sm text-on-surface-variant">
                        Ultra Low Latency
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </HeroCard>
            </div>
    </div>
    </ContainerLayout>
    </div>
    </section>
  );
};

export default HeroSection;