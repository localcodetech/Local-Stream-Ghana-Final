import { motion } from "motion/react"
import { ease } from "@/lib/motion"

// pass animated={false} when the section animates its own children
// (glass cards must animate themselves, see reveal() in lib/motion.js)
const ContainerLayout = ({children, animated = true}) =>{
    return(
        <motion.div
        initial={animated ? { opacity: 0, y: 100, scale: 0.94 } : false}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-24   ">
{children}
        </motion.div>
    )
};
export default  ContainerLayout;
