import {motion} from "motion/react"

const Head = ({children, className=""})=>{
    return (
    <motion.h1  
   
    className={`${className}`}>
        {children}
    </motion.h1>
    )
};

export default Head;