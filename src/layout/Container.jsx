import {motion} from "motion/react"
const ContainerLayout = ({children}) =>{
    return( 
        <motion.div 
       
        className="relative z-10 mx-auto max-w-7xl px-6 pt-24   ">
{children}
        </motion.div>
    )
};
export default  ContainerLayout;