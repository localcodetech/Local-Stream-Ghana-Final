import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import ContainerLayout from "@/layout/Container";

import { Mail, MapPin } from "lucide-react";
// import { useState } from "react";

const HomeContact = () => {
 
  return (
    <section className="bg-surface-container-lowest py-24">
    <ContainerLayout>
    <div className="grid gap-20 lg:grid-cols-2">
    {/* Left side */}
    
    <div className="space-y-12">
    <div className="space-y-6">
    <Heading className="text-headline-lg">
    Let's Build the Future of Media Together
    </Heading>
    
    <Paragraph className="text-body-lg text-on-surface-variant">
    Ready to modernize your broadcast infrastructure or launch a new
    streaming platform? Our team of engineers is ready to help.
    </Paragraph>
    </div>
    
    <div className="space-y-6">
    <div className="flex items-center gap-6">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-bright">
    <Mail className="text-primary" size={22} />
    </div>
    
    <div>
    <Paragraph className="tech-label text-on-surface-variant">
    Email Us
    </Paragraph>
    
    <Head className="text-title-md font-semibold text-white">
    info@localstreamgh.com
    </Head>
    </div>
    </div>
    
    <div className="flex items-center gap-6">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-bright">
    <MapPin className="text-primary" size={22} />
    </div>
    
    <div>
    <Paragraph className="tech-label text-on-surface-variant">
    Headquarters
    </Paragraph>
    
    <Head className="text-title-md font-semibold text-white">
    Kumasi, Ghana  
    </Head>
    </div>
    </div>
    </div>
    </div>
    
    {/* Form */}
    
    <div className="glass-panel rounded-3xl p-8">

    <form className="space-y-6" >
    <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
    <Label htmlFor="name" className="tech-label text-on-surface-variant">
    Your Name
    </Label>
    
    <Input
    id="name"
    // value={form.name}
    type="text"
    placeholder="kwesi Edutwem"
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="email" className="tech-label text-on-surface-variant" >
    Business Email
    </Label>
   
    <Input
    id="email"
   
    
    
    type="email"
    placeholder="kwesi@company.com"
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />
    </div>
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="service" className="tech-label text-on-surface-variant">
    Service Interest
    </Label>
    
    <select
    
    // value={form.select}
    id="service"
    className="w-full appearance-none rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
    >
    <option>IPTV & Streaming</option>
    <option>Software Development</option>
    <option>Broadcast Infrastructure</option>
    <option>Cloud Solutions</option>
    </select>
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="message" className="tech-label text-on-surface-variant">
    Message
    </Label>
    
    <Textarea
    id="message"
    rows="4"
    // value={form.message}
    placeholder="Tell us about your project..."
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />
    </div>
    
    <Button
    type="submit"
    className="w-full rounded-xl bg-primary-container py-4 font-bold text-on-primary-container glow-btn hover:bg-primary-container"
    >
    Send Inquiry
    </Button>
    </form>
    </div>
    </div>
    </ContainerLayout>
    </section>
  );
};

export default HomeContact;