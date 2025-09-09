/* 
const bannerCards =({imgBanner,children}) =>{
  

    return(

        <div className=" bannerInicio relative w-full " style={{"backgroundImage":`url(${imgBanner ?`../${imgBanner.src}`:""})`,backgroundPosition:"center",backgroundSize:"cover",height:"100vh"}}>        
            <div className=" contenido pb-30 h-full w-full flex flex-col justify-center gap-20 items-center " style={{backgroundImage:`linear-gradient(to top left,#000d, #0003)`, backdropFilter:"2px"}}>
            <div className=" flex flex-col items-center content-center w-full pl-20 pr-20">
                {children}
                </div>

                </div>
            </div>
            
    );
}
export default bannerCards; */
const BannerCards = ({ imgBanner, children }) => {
    return (
      <div
        className="bannerInicio relative w-full"
        style={{
          backgroundImage: `url(${imgBanner ? imgBanner.src : ""})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          className="contenido pb-30 h-full w-full flex flex-col justify-center gap-20 items-center"
          style={{
            backgroundImage: `linear-gradient(to top left, #000e, #0003)`,
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="flex flex-col items-center content-center w-full ">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default BannerCards;
  