import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

import { Smartphone, Database } from "lucide-react";

const CallToAction = () => {
    return (
        <section className="border-t border-primary/20 bg-surface-container-low py-24">
        <ContainerLayout>
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 md:p-16">
        {/* Code Decoration */}
        
        <div className="pointer-events-none absolute right-0 top-0 hidden whitespace-pre p-8 font-mono text-body-sm text-primary opacity-10 lg:block">
        {`const engine = new LocalCode.StreamProcessor({
  latency: 'ultra-low',
  codec: 'h.265',
  region: 'Ghana-West'
});`}
            </div>
            
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            {/* Text */}
            
            <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            
            <Head className="tech-label text-primary">
            Our R&D Division
            </Head>
            </div>
            
            <Heading className="text-display-lg">
            Powered by{" "}
            <span className="text-primary">LocalCode Technology</span>
            </Heading>
            
            <Paragraph className="text-body-lg text-on-surface-variant">
            Every great media platform needs a solid software foundation.
            Our dedicated technology division, LocalCode, focuses on
            engineering high-performance mobile apps, web dashboards, and
            automation scripts tailored for the broadcasting world.
            </Paragraph>
            
            <div className="flex flex-wrap gap-4">
            <span className="rounded-lg border border-outline-variant bg-surface-bright px-4 py-2 tech-label text-on-surface">
            Software Engineering
            </span>
            
            <span className="rounded-lg border border-outline-variant bg-surface-bright px-4 py-2 tech-label text-on-surface">
            Cloud Architecture
            </span>
            
            <span className="rounded-lg border border-outline-variant bg-surface-bright px-4 py-2 tech-label text-on-surface">
            DevOps
            </span>
            </div>
            </div>
            
            {/* Boxes */}
            
            <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel-active flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center">
            <Smartphone className="text-primary" size={36} />
            
            <Head className="text-title-md font-semibold text-white">
            App Dev
            </Head>
            </div>
            
            <div className="glass-panel flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center">
            <Database className="text-on-surface-variant" size={36} />
            
            <Head className="text-title-md font-semibold text-white">
            Big Data
            </Head>
            </div>
            </div>
            </div>
            </div>
            </div>
            </ContainerLayout>
            </section>
        );
    };
    
    export default CallToAction;