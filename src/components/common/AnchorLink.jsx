



const Anchor = ({children,className="", link})=>{

    return <a href={link} className={`${className}`}  rel="noopener noreferrer" >{children}</a>
};

export default Anchor;