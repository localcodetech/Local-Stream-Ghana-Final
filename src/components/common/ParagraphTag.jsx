

const Paragraph = ({children, className=""})=>{
    return (<p className={`font- ${className}`}>
        {children}
    </p> )
};

export default  Paragraph