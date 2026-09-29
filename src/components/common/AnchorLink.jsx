import { Link } from "react-router-dom";

// internal paths ("/services") use the router so the page doesn't reload
const Anchor = ({children,className="", link, ...props})=>{

    if (link?.startsWith("/")) {
        return <Link to={link} className={`${className}`} {...props}>{children}</Link>
    }

    return <a href={link} className={`${className}`}  rel="noopener noreferrer" {...props}>{children}</a>
};

export default Anchor;
