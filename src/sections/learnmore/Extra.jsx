import HeroCard from "@/components/cards/HeroCard";
import Anchor from "@/components/common/AnchorLink";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container"
import {ArrowDown} from "lucide-react"


const LearnEXtra = () =>{
    
    return <>
    <ContainerLayout >
    
    <section className="space-y-4">
    
    <div>
    <HeroCard className="">
    <Head className="">
    Our Beginning
    </Head>
    
    <Head>
    Built from Real-World Technical Experience
    </Head>
    <Paragraph>
    Our foundation comes from practical experience in broadcasting, streaming and technical operations.
    {"\n"}
    {"\n"}
    Working with broadcast systems, streaming platforms, master control environments and digital media technologies gave us a clear understanding of what happens behind the screen.
    {"\n"}
    {"\n"}
    We learned that successful digital media is not simply about producing content.
    
    It requires: {"\n"}
    <ul className="list-disc">
    <li>Reliable infrastructure</li>
    <li>Stable connectivity</li>
    <li>Efficient content delivery</li>
    <li>Scalable technology</li>
    <li>Proper monitoring</li>
    <li>Strong technical operations</li>
    <li>Well-designed digital platforms</li>  
    </ul>
    {"\n"}
    These principles continue to shape everything we build today.
    </Paragraph>
    </HeroCard>
    
    </div>
    
    
    {/* 2 */}
    <div>
    <HeroCard>
    <Head>The Evolution</Head>
    
    <Head>From Streaming to Digital Infrastructure</Head>
    <Paragraph>
    What started around media and streaming gradually expanded into a wider technology ecosystem.
    {"\n"}
    {"\n"}
    Today, Local Stream Ghana works across multiple areas of technology and digital media, including:
    </Paragraph>
    <div>
    <span>Streaming & Media </span>
    <ul>
    <li>Live TV Streaming</li>
    <li>Radio Streaming</li>
    <li>IPTV</li>
    <li>OTT Platforms</li>
    <li>CDN Distribution</li>
    </ul>
    </div>
    
    <div>
    <span>Broadcast Technology</span>
    <ul>
    <li>Broadcast Engineering</li>
    <li>Master Control Room Services</li>
    <li>Signal Infrastructure</li>
    <li>Technical Operations</li>
    </ul>
    </div>
    
    <div>
    <span>Software & Digital Products</span>
    <ul>
    <li>Website Development</li>
    <li>Mobile Application Development</li>
    <li>Software Development</li>
    <li>API Development</li>
    <li>Digital Platforms</li>
    </ul>
    </div>
    
    <div>
    <span>Infrastructure</span>
    <ul>
    <li>Cloud Infrastructure</li>
    <li>Server Deployment</li>
    <li>Network Solutions</li>
    <li>Technical Audits</li>
    <li>Infrastructure Optimization</li>
    </ul>
    </div>
    <Paragraph>This allows us to approach projects from both the media side and the technology side.</Paragraph>
    
    </HeroCard>
    </div>
    
    
    <div>
    <HeroCard>
    <Head>Building for Africa</Head>
    <Head>Technology Designed Around Our Environment</Head>
    <Paragraph>
    We believe Africa should not simply consume technology.
    {"\n"}
    {"\n"}
    <strong> Africa should build it. </strong>
    {"\n"}
    {"\n"}
    Our goal is to help businesses, broadcasters, organizations, creators and institutions build reliable digital systems that can operate effectively within the realities of African markets.
    {"\n"}
    {"\n"}
    From connectivity challenges to infrastructure requirements, audience growth and regional distribution, we design solutions with practical requirements in mind.
    {"\n"}
    {"\n"}
    Our focus is not simply to introduce technology.
    {"\n"}
    {"\n"}
    <strong> Our focus is to make technology useful, reliable and scalable.</strong>
    </Paragraph>
    </HeroCard>
    </div>
    
    
    {/* 3 */}
    <div>
    <HeroCard>
    <Head>The Local Stream Ghana Ecosystem</Head>
    <Head>One Technology Partner. Multiple Capabilities.</Head>
    
    <Paragraph>
    Local Stream Ghana operates as the technology and media brand within the wider <Anchor target="_blank" link={"https://richbenmediagroup.com"}>RichBen Media Group Limited</Anchor> structure.
    {"\n"}
    {"\n"}
    Our ecosystem allows different areas of expertise to work together.
    
    </Paragraph>
    
    <section>
    <span>
    <strong>RichBen Media Group Limited</strong>
    <Paragraph>The parent group supporting the wider media and technology ecosystem.</Paragraph>
    </span>
    <ArrowDown/>
    
    <span>
    <strong>Local Stream Ghana</strong>
    <Paragraph>The primary media technology company providing streaming, broadcast, infrastructure and digital media solutions.</Paragraph>
    </span>
    <ArrowDown  />
    
    <span>
    <strong>LocalCode Technology</strong>
    <Paragraph>The technology-focused sub-company specializing in software and full-stack development.</Paragraph>
    </span>
    </section>
    
    <Paragraph>This structure allows us to combine media expertise with software engineering and infrastructure technology.</Paragraph>
    
    </HeroCard>
    
    </div>
    
    
    {/* 4 */}
    <div>
    <HeroCard>
    <Head>What We Believe</Head>
    
    <Head>Technology Should Work for People</Head>
    
    <Paragraph>We believe good technology should not create unnecessary complexity.</Paragraph>
    
    <Paragraph>
    <strong>Connect</strong>
    <span>People should be able to access information, entertainment and services wherever they are.</span>
    </Paragraph>
    
    <Paragraph>
    <strong>Scale</strong>
    <span>Businesses should be able to grow without constantly rebuilding their technology infrastructure.</span>
    </Paragraph>
    
    <Paragraph>
    <strong>Perform</strong>
    <span>Digital platforms should be fast, stable and dependable.</span>
    </Paragraph>
    
    <Paragraph>
    <strong>Empower</strong>
    <span>African businesses and creators should have access to the tools required to compete globally.</span>
    </Paragraph>
    </HeroCard>
    
    </div>
    </section>
    
    </ContainerLayout>
    </>
};

export default LearnEXtra