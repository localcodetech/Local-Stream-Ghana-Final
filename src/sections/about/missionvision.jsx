import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import TextLink from "@/components/common/TextLink";
import aboutImage from "@/assets/images/server-farm.jpg";

import ContainerLayout from "@/layout/Container";

const MissionVision = () => {
  return (
    <section className="bg-surface-dim py-24">
      <ContainerLayout>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-8">

            <Head className="max-w-xl font-display text-headline-lg font-bold leading-tight text-white lg:text-display-lg">
              Architecting West Africa's{" "}
              <span className="text-primary-fixed-dim">Digital Future.</span>
            </Head>

            <div className="max-w-2xl space-y-6">

              <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
                Founded as the technical powerhouse of{" "}
                <TextLink
                  text="RichBen Media Group Limited"
                  link="https://www.facebook.com/richbenmedia"
                />
                , Local Stream Ghana emerged from a critical need—to bridge the gap
                between traditional broadcasting and the high-speed demands of the
                modern internet era.
              </Paragraph>

              <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
                We don't just stream video; we engineer the infrastructure that
                powers national conversations, enterprise innovation, and cultural
                moments across Africa.
              </Paragraph>

              <Paragraph className="text-body-lg leading-relaxed text-on-surface-variant">
                Our mission is to combine the reliability of Tier-1 broadcast
                infrastructure with the agility of modern cloud technology,
                delivering secure, scalable, and future-ready digital solutions.
              </Paragraph>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="glass-panel relative w-full max-w-xl overflow-hidden rounded-3xl p-2">

              <img
                src={aboutImage}
                alt="Local Stream Ghana Infrastructure"
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />

              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />

            </div>

          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MissionVision;