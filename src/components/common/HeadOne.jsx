

const Head = ({children, className=""})=>{
    return (
    <h1 className={`${className}`}>
        {children}
    </h1>
    )
};

export default Head;