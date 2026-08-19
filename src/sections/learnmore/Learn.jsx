import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";

const LearnMoreHero = () => {
  return (
    <ContainerLayout>
      <div className="flex flex-col items-center justify-center space-y-6 border-b border-white/10 py-12">
        <Head className="rounded px-6 py-2 text-center text-2xl font-bold uppercase tracking-[0.2rem] shadow transition duration-200 hover:shadow-xl md:text-4xl">
          Learn More About Our Journey
        </Head>

        <Head className="text-center tracking-wider text-primary">
          From Media to Technology Infrastructure
        </Head>

        <Paragraph className="max-w-4xl text-center leading-8">
          Local Stream Ghana was built around a simple idea:{" "}
          <strong>Africa's digital future requires reliable infrastructure.</strong>
          <br />
          <br />
          Our journey began from the world of broadcasting and digital media,
          where we experienced firsthand the challenges organizations face when
          delivering television, radio, video and digital content to their
          audiences.
          <br />
          <br />
          As technology evolved, so did the demands of broadcasters, businesses
          and organizations. Traditional broadcasting increasingly needed to
          work alongside streaming platforms, cloud infrastructure, software
          applications and connected digital services.
          <br />
          <br />
          This created an opportunity for us to build something broader.
          <br />
          <br />
          Local Stream Ghana evolved into a media technology company focused on
          building the infrastructure behind modern digital communication.
        </Paragraph>
      </div>
    </ContainerLayout>
  );
};

export default LearnMoreHero;