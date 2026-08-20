import { Button } from "@/components/ui/button";
import LogoImage from "@/components/common/logo";


import { navigationLinks } from "@/data/navigation";
import { NavLink } from "react-router-dom";
import MobileMenu from "@/layout/MobileMenu";
import { appName } from "@/data/appConstants";
import Anchor from "@/components/common/AnchorLink";

const Navbar = () => {
  return (
    <header className="fixed 
    z-50 
    inset-x-0
    top-0
     backdrop-blur-xl bg-surface/10 border-b border-white/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 ">

<div className="flex items-center gap-2 transition-colors ">
        {/* logo */}
       <NavLink to={"/"} >
         <div className="flex  items-center ">
          <LogoImage image={"https://i.imgur.com/8A6aYJN.jpeg"} />
        <span className="font-display text-primary-fixed-dim font-bold px-3 whitespace-nowrap hover:text-primary transition-colors">{appName}</span>
         </div>
       </NavLink>
      </div>

      <nav className="hidden md:flex">
    
   <ul className="flex items-center gap-8 list-none">
     {navigationLinks.map((navItem) =>{
      return <NavLink  key={navItem.href}  to={navItem.href} className={({isActive})=>{
        return (
            isActive ? "border-b-2 border-primary pb-1 text-primary font-bold hover:text-primary-fixed-dim" : "text-on-surface-variant font-medium hover:text-primary  duration-1000 hover:-translate-y-0.5 transition "
        )
      }}>
        <li >{navItem.label}</li>
      </NavLink>
    })}
   </ul>
      </nav>


<div className="hidden md:flex">
      <div className="flex items-center gap-4 ">
        {/* CTA */}

{/*       
        <Button   variant="ghost" size="lg" className="text-primary-fixed-dim font-bold hover:text-primary hover:bg-transparent transition-all">Request a Quote</Button> */}
  

<Anchor link={"https://docs.google.com/forms/d/e/1FAIpQLScYdUfbzA4pLz9VGbc6A11fVlWpgBiIxjgxrUThDxYj8qRLEA/viewform?usp=dialog"} >
        <Button variant="default" className="bg-primary-container text-on-primary-container font-bold rounded-lg glow-btn hover:bg-primary-container"
        >Get Started</Button>   </Anchor>
      </div>
</div>

<div className="md:hidden block">
  <MobileMenu  />
</div>
      </div>
    </header>
  );
};
export default Navbar;