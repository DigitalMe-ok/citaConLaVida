
const textImg=({title,paragraph,img,imgDist,children})=> {
    
    return (
            !img ?
             
                <>
                <section className="flex flex-row flex-wrap justify-center items-center mt-10 p-10">
                <div className="flex flex-col  justify-center items-center  h-full text-gray-800 mr-10">
                        
                        <h2 className="text-3xl text-center ">{title}</h2>
                            <p className=" text-lg max-w-3xl min-w-md text-center">{paragraph}
                            </p>
                            {children}
                            </div>
                            <div>
                                    
                        </div>
                        </section>
                </>
                :
                imgDist == "izq"?
                <><section className="flex flex-col gap-10  w-full  mt-10  containerTxtImg">
                <div className="flex flex-row  gap-5 h-full text-gray-800 w-full txtImgContainer" >
                <img src={img} className="imgTxtImg rounded-xl" alt="imagen institucional"></img>
                        <div className="flex flex-col flex-wrap items-center justify-around h-full ">
                        <h2 className="text-3xl text-center ">{title}</h2>
                            <p className="parrafoTxtImg text-lg max-w-3xl  text-center">{paragraph}
                            </p>
                            {children}
                        </div>
                        
                            </div>
                            <div>
                                    
                        </div>
                        </section>
                </>
                :
                <><section className="flex flex-col flex-wrap gap-10 w-full mt-10 containerTxtImg">
                <div className="flex flex-row gap-5 h-full text-gray-800 mr-10 txtImgContainer">
                        <div className="flex flex-col flex-wrap items-center justify-around h-full ">
                        <h2 className="text-3xl text-center ">{title}</h2>
                            <p className="parrafoTxtImg text-lg max-w-3xl  text-center">{paragraph}
                            </p>
                            {children}
                        </div>
                        
                            </div>
                            <div>
                        <img src={img} className=" rounded-xl  imgTxtImg"  alt="imagen institucional"></img>
                                    
                        </div>
                        
                        </section>
                </>
                    
        
       
    )
}
 export default textImg