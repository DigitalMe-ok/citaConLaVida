const parallax = ({img,children})=>{
    return(
        <div className="w-screen relative min-h-200" style={{backgroundImage:`url(${img})`,backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <div className="min-h-200 flex flex-col justify-center items-center" style={{backgroundColor:"#000a"}}>
             {children}
             </div>
        </div>
    )
}
export default parallax