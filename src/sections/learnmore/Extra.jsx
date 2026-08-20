import HeroCard from "@/components/cards/HeroCard";
import Anchor from "@/components/common/AnchorLink";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";

import { ArrowDown } from "lucide-react";

const LearnEXtra = () => {
  return (
    <ContainerLayout>
      <section className="space-y-8 py-10">

        {/* Our Beginning */}
        <HeroCard className="space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <Head className="text-primary">
              Our Beginning
            </Head>

            <Head className="text-2xl font-bold md:text-3xl">
              Built from Real-World Technical Experience
            </Head>
          </div>

          <Paragraph className="max-w-4xl leading-8 text-muted-foreground">
            Our foundation comes from practical experience in broadcasting,
            streaming and technical operations.
          </Paragraph>

          <Paragraph className="max-w-4xl leading-8 text-muted-foreground">
            Working with broadcast systems, streaming platforms, master
            control environments and digital media technologies gave us a
            clear understanding of what happens behind the screen.
          </Paragraph>

          <Paragraph className="max-w-4xl leading-8 text-muted-foreground">
            We learned that successful digital media is not simply about
            producing content.
          </Paragraph>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Paragraph className="mb-4 font-semibold text-white">
              It requires:
            </Paragraph>

            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="list-inside list-disc">
                Reliable infrastructure
              </li>
              <li className="list-inside list-disc">
                Stable connectivity
              </li>
              <li className="list-inside list-disc">
                Efficient content delivery
              </li>
              <li className="list-inside list-disc">
                Scalable technology
              </li>
              <li className="list-inside list-disc">
                Proper monitoring
              </li>
              <li className="list-inside list-disc">
                Strong technical operations
              </li>
              <li className="list-inside list-disc">
                Well-designed digital platforms
              </li>
            </ul>
          </div>

          <Paragraph className="max-w-4xl leading-8 text-muted-foreground">
            These principles continue to shape everything we build today.
          </Paragraph>
        </HeroCard>


        {/* Evolution */}
        <HeroCard className="space-y-7 p-6 md:p-8">
          <div className="space-y-2">
            <Head className="text-primary">
              The Evolution
            </Head>

            <Head className="text-2xl font-bold md:text-3xl">
              From Streaming to Digital Infrastructure
            </Head>
          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            What started around media and streaming gradually expanded into
            a wider technology ecosystem.
          </Paragraph>

          <Paragraph className="leading-8 text-muted-foreground">
            Today, Local Stream Ghana works across multiple areas of
            technology and digital media, including:
          </Paragraph>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Streaming */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Streaming & Media
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Live TV Streaming</li>
                <li>Radio Streaming</li>
                <li>IPTV</li>
                <li>OTT Platforms</li>
                <li>CDN Distribution</li>
              </ul>
            </div>

            {/* Broadcast */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Broadcast Technology
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Broadcast Engineering</li>
                <li>Master Control Room Services</li>
                <li>Signal Infrastructure</li>
                <li>Technical Operations</li>
              </ul>
            </div>

            {/* Software */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Software & Digital Products
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Website Development</li>
                <li>Mobile Application Development</li>
                <li>Software Development</li>
                <li>API Development</li>
                <li>Digital Platforms</li>
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Infrastructure
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cloud Infrastructure</li>
                <li>Server Deployment</li>
                <li>Network Solutions</li>
                <li>Technical Audits</li>
                <li>Infrastructure Optimization</li>
              </ul>
            </div>

          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            This allows us to approach projects from both the media side and
            the technology side.
          </Paragraph>
        </HeroCard>


        {/* Building for Africa */}
        <HeroCard className="space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <Head className="text-primary">
              Building for Africa
            </Head>

            <Head className="text-2xl font-bold md:text-3xl">
              Technology Designed Around Our Environment
            </Head>
          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            We believe Africa should not simply consume technology.
          </Paragraph>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <Paragraph className="text-lg font-bold text-primary">
              Africa should build it.
            </Paragraph>
          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            Our goal is to help businesses, broadcasters, organizations,
            creators and institutions build reliable digital systems that
            can operate effectively within the realities of African markets.
          </Paragraph>

          <Paragraph className="leading-8 text-muted-foreground">
            From connectivity challenges to infrastructure requirements,
            audience growth and regional distribution, we design solutions
            with practical requirements in mind.
          </Paragraph>

          <Paragraph className="leading-8 text-muted-foreground">
            Our focus is not simply to introduce technology.
          </Paragraph>

          <Paragraph className="text-lg font-semibold leading-8 text-white">
            Our focus is to make technology useful, reliable and scalable.
          </Paragraph>
        </HeroCard>


        {/* Ecosystem */}
        <HeroCard className="space-y-7 p-6 md:p-8">
          <div className="space-y-2">
            <Head className="text-primary">
              The Local Stream Ghana Ecosystem
            </Head>

            <Head className="text-2xl font-bold md:text-3xl">
              One Technology Partner. Multiple Capabilities.
            </Head>
          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            Local Stream Ghana operates as the technology and media brand
            within the wider{" "}
            <Anchor
              target="_blank"
              link="https://richbenmediagroup.com"
            >
              RichBen Media Group Limited
            </Anchor>{" "}
            structure.
          </Paragraph>

          <Paragraph className="leading-8 text-muted-foreground">
            Our ecosystem allows different areas of expertise to work
            together.
          </Paragraph>

          <div className="mx-auto flex max-w-2xl flex-col items-center">

            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <strong className="text-lg text-primary">
                RichBen Media Group Limited
              </strong>

              <Paragraph className="mt-2 text-sm text-muted-foreground">
                The parent group supporting the wider media and technology
                ecosystem.
              </Paragraph>
            </div>

            <ArrowDown className="my-4 text-primary" />

            <div className="w-full rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
              <strong className="text-lg text-primary">
                Local Stream Ghana
              </strong>

              <Paragraph className="mt-2 text-sm text-muted-foreground">
                The primary media technology company providing streaming,
                broadcast, infrastructure and digital media solutions.
              </Paragraph>
            </div>

            <ArrowDown className="my-4 text-primary" />

            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <strong className="text-lg text-primary">
                LocalCode Technology
              </strong>

              <Paragraph className="mt-2 text-sm text-muted-foreground">
                The technology-focused sub-company specializing in software
                and full-stack development.
              </Paragraph>
            </div>

          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            This structure allows us to combine media expertise with
            software engineering and infrastructure technology.
          </Paragraph>
        </HeroCard>


        {/* What We Believe */}
        <HeroCard className="space-y-7 p-6 md:p-8">
          <div className="space-y-2">
            <Head className="text-primary">
              What We Believe
            </Head>

            <Head className="text-2xl font-bold md:text-3xl">
              Technology Should Work for People
            </Head>
          </div>

          <Paragraph className="leading-8 text-muted-foreground">
            We believe good technology should not create unnecessary
            complexity.
          </Paragraph>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <strong className="text-lg text-primary">
                Connect
              </strong>

              <Paragraph className="mt-2 text-sm leading-7 text-muted-foreground">
                People should be able to access information, entertainment
                and services wherever they are.
              </Paragraph>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <strong className="text-lg text-primary">
                Scale
              </strong>

              <Paragraph className="mt-2 text-sm leading-7 text-muted-foreground">
                Businesses should be able to grow without constantly
                rebuilding their technology infrastructure.
              </Paragraph>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <strong className="text-lg text-primary">
                Perform
              </strong>

              <Paragraph className="mt-2 text-sm leading-7 text-muted-foreground">
                Digital platforms should be fast, stable and dependable.
              </Paragraph>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <strong className="text-lg text-primary">
                Empower
              </strong>

              <Paragraph className="mt-2 text-sm leading-7 text-muted-foreground">
                African businesses and creators should have access to the
                tools required to compete globally.
              </Paragraph>
            </div>

          </div>
        </HeroCard>

      </section>
    </ContainerLayout>
  );
};

export default LearnEXtra;