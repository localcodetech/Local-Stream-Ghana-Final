import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import ContainerLayout from "@/layout/Container";

import { MapPin, Building2, Mail, Phone, MessageSquare, Globe, Link2, Send, GitBranchIcon,
} from "lucide-react";
import TextLink from "@/components/common/TextLink";
import Anchor from "@/components/common/AnchorLink";

const ContactCardFull = () => {
  return (
    <section className="bg-background pb-24">

      <ContainerLayout>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">

          {/* Left column */}

          <div className="space-y-gutter">

            <HeroCard className="glass-panel flex gap-4 rounded-2xl p-6">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-bright">
                <MapPin size={18} className="text-primary" />
              </div>

              <div className="space-y-2">

                <Head className="font-display text-title-md font-semibold text-white">
                  Accra Office
                </Head>

                <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                  No. 24 Spintex Road, Opposite Zenith Bank, Accra, Ghana.
                </Paragraph>

               <Anchor  className="tech-label text-primary-fixed-dim hover:text-primary">
                View on map ↗
               </Anchor>

              </div>

            </HeroCard>

            <HeroCard className="glass-panel flex gap-4 rounded-2xl p-6">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-bright">
                <Building2 size={18} className="text-primary" />
              </div>

              <div className="space-y-2">

                <Head className="font-display text-title-md font-semibold text-white">
                  Kumasi Branch
                </Head>

                <Paragraph className="text-body-sm leading-6 text-on-surface-variant">
                  Adum, Kumasi, around Melcom Building
                </Paragraph>

                <Anchor link={"https://maps.app.goo.gl/ewGEoQssJ3XFLWfe9"} target="_blank" className="tech-label text-primary-fixed-dim hover:text-primary">
                  View on map ↗
                </Anchor>

              </div>

            </HeroCard>

            <HeroCard className="glass-panel space-y-4 rounded-2xl p-6">

              <Paragraph className="tech-label text-on-surface-variant">
                Direct Communication
              </Paragraph>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <Paragraph className="text-body-sm text-on-surface">
                  <TextLink text={"info@localstreamgh.com"} link={"mailto:info@localstreamgh.com"} />
                </Paragraph>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <Paragraph className="text-body-sm text-on-surface">
                  <TextLink text={"call us now"} link={"tel:+233507288745"} />
                </Paragraph>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-primary" />
                <Paragraph className="text-body-sm text-on-surface">
                  <TextLink  text={"WhatsApp Support"} link={"https://wa.me/233507288745"} />
                </Paragraph>
              </div>

              <div className="space-y-4 border-t border-outline-variant/50 pt-4">

                <Paragraph className="tech-label text-on-surface-variant">
                  Follow Our Stream
                </Paragraph>

                <div className="flex gap-3">

                  <Anchor  link={"https://www.youtube.com/@richbenmediatech"}>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary">
                    <Globe size={16} />
                  </button>
                  </Anchor>

                  <Anchor link={"https://github.com/localcodetech"}>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary">
                    <GitBranchIcon size={16} />
                  </button>
                  </Anchor>


                 <Anchor link={"https://www.linkedin.com/in/richbenmedia/"}>
                   <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-bright text-on-surface-variant transition-colors hover:text-primary">
                    <Link2 size={16} />
                  </button> 
                 </Anchor>

                </div>

              </div>

            </HeroCard>

          </div>

          {/* Form */}

          <HeroCard className="glass-panel rounded-2xl p-8 lg:col-span-2">

            <Head className="mb-8 font-display text-headline-lg font-semibold text-white">
              Service Request Form
            </Head>

            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div className="space-y-2">
                  <Label htmlFor="fullname" className="tech-label text-on-surface-variant">
                    Full Name
                  </Label>

                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Kofi Mensah"
                    className="rounded-lg border-outline-variant bg-surface-container-low px-4 py-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="tech-label text-on-surface-variant">
                    Email Address
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="kofi@organization.gh"
                    className="rounded-lg border-outline-variant bg-surface-container-low px-4 py-3 text-white"
                  />
                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="space-y-2">
                  <Label htmlFor="category" className="tech-label text-on-surface-variant">
                    Service Category
                  </Label>

                  <select
                    id="category"
                    className="w-full appearance-none rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option>Select a Service</option>
                    <option>Live Streaming</option>
                    <option>Broadcast Engineering</option>
                    <option>Cloud Solutions</option>
                    <option>Software Development</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="tech-label text-on-surface-variant">
                    Estimated Budget
                  </Label>

                  <select
                    id="budget"
                    className="w-full appearance-none rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option>GHS 5,000 - GHS 15,000</option>
                    <option>GHS 15,000 - GHS 50,000</option>
                    <option>GHS 50,000+</option>
                  </select>
                </div>

              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="tech-label text-on-surface-variant">
                  Project Details
                </Label>

                <Textarea
                  id="details"
                  rows="5"
                  placeholder="Briefly describe your production needs, expected audience size, and venue location..."
                  className="rounded-lg border-outline-variant bg-surface-container-low px-4 py-3 text-white"
                />
              </div>

              <div className="flex items-center gap-3">
                <Checkbox id="urgent" className="border-outline-variant" />

                <Label htmlFor="urgent" className="text-body-sm text-on-surface-variant">
                  This is an urgent request (Required within 48 hours)
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg bg-primary-container font-bold text-on-primary-container glow-btn hover:bg-primary-container"
              >
                Send Transmission
                <Send size={16} />
              </Button>

            </form>

          </HeroCard>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ContactCardFull;