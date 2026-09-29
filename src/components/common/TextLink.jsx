import { Link } from "react-router-dom";

// internal paths ("/contact") use the router so the page doesn't reload
const TextLink =({text, link})=>{
    if (link?.startsWith("/")) {
        return <Link to={link} className="text-brand">{text}</Link>
    }

    return( <a href={link} className="text-brand">
            {text}
    </a>)
};

export default  TextLink;
