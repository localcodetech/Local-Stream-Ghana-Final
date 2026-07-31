

const HeroCard = ({children, className=""})=>{
    return(
        <div className={`rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-5 ${className}`}>
                {children}
        </div>
    )
};

export default HeroCard;