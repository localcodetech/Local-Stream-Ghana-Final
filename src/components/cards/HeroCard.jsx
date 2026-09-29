import {motion} from "motion/react"
import { reveal } from "@/lib/motion"

// animates in on scroll by default; pass delay to stagger, or motion props to override
// lift={false} turns off the hover lift for large content blocks
const HeroCard = ({children, className="", delay = 0, lift = true, ...props})=>{
    return(
        <motion.div className={`rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-5 ${lift ? "card-lift" : ""} ${className}`} {...reveal(delay)} {...props}>
                {children}
        </motion.div>
    )
};

export default HeroCard;
