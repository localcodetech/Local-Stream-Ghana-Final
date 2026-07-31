

const LogoImage = ({image})=>{
    return(<div className="rounded-full">
<img src={image} alt="" loading="lazy" className="object-cover h-8 w-auto  rounded shadow-2xl" fetchPriority="auto"/>
    </div>)
};

export default  LogoImage;