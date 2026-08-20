import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import ContainerLayout from "@/layout/Container";

import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

const HomeContact = () => {

  const [state, handleSubmit] = useForm('xbdnepzo')
 
const [detail, setDetail] = useState({
  name: "",
  email: "",
  service: "",
  message: ""
})

if (state.succeeded){
  return <Paragraph>Done</Paragraph>
}

const formHandler = (e)=>{
  if (e.target.id === "name"){
    setDetail((prev)=>({...prev, name: e.target.value}))
    return;
  } else if (e.target.id === "email"){
    setDetail((prev)=>({...prev, email: e.target.value}))
  } else if (e.target.id === "service") {
    setDetail((prev)=>({...prev, service: e.target.value}))
    return;
  } else if (e.target.id === "message")
  setDetail((prev)=>({...prev, message: e.target.value}))
  return;
}




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

    <form className="space-y-6" onSubmit={handleSubmit} method="POST" >
    <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
    <Label htmlFor="name" className="tech-label text-on-surface-variant">
    Your Name
    </Label>
    
    <Input
    id="name"
    value={detail.name}
    type="text"
    name='name'
    onChangeFunc={formHandler}
    placeholder="kwesi Edutwem"
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />

    <ValidationError 
    prefix="name"
    field="name"
    errors={state.errors}
    />
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="email" className="tech-label text-on-surface-variant" >
    Business Email
    </Label>
   
    <Input
    id="email"
   value= {detail.email}
    onChangeFunc={formHandler}
    name='email'
    type="email"
    placeholder="kwesi@company.com"
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />
    <ValidationError 
    prefix="Email"
    field="email"
    errors={state.errors}
    />
    </div>
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="service" className="tech-label text-on-surface-variant">
    Service Interest
    </Label>
    

    <select
    onChange={formHandler}
    value={detail.select}
    id="service"
    name="service"
    className="w-full appearance-none rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
    >
    <option >IPTV & Streaming</option>
    <option>Software Development</option>
    <option>Broadcast Infrastructure</option>
    <option>Cloud Solutions</option>
    </select>

    <ValidationError
    
    prefix="service"
    field="service"
    errors={state.errors}
    />
    </div>
    
    <div className="space-y-2">
    <Label htmlFor="message" className="tech-label text-on-surface-variant">
    Message
    </Label>
    

    <Textarea
    id="message"
    onChange={formHandler}
    rows="4"
    name="message"
    value={detail.message}
    placeholder="Tell us about your project..."
    className="rounded-xl border-outline-variant bg-surface-container-low px-4 py-3 text-white"
    />
  <ValidationError 
  prefix="message"
  field="message"
  />

    </div>
    
    <Button
    type="submit"
    disable= {state.submitting}
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