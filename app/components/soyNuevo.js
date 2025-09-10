
"use client"
const SoyNuevo = () =>{
    const closeToast=()=>{
        const toast = document.getElementById("toast-interactive");
        toast.classList.remove("toastSoyNuevo")
        toast.classList.remove("bottom-10")
        toast.classList.add("desaparecerToast")

    }
    return(
        <div id="toast-interactive" className="toastSoyNuevo   fixed bottom-10 z-999 right-5 w-full max-w-xs p-4 text-gray-500  rounded-lg shadow-sm bg-cardSoyNuevoIn hover:bg-cardSoyNuevoIn"  role="alert">
    <div className="flex">
        
        <div className="ms-3 text-sm font-normal flex flex-col justify-center alig-center">
            <span className="mb-1 text-lg font- text-gray-200 ">¿Eres nuevo?</span>
            <div className="mb-2 text-sm font-normal text-gray-300">Contactanos para que oremos por ti.</div> 
            <div className="flex flex-col justify-center items-center">
                <div>
                    <a href="/soyNuevo" className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-amber-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-amber-950">Contáctanos</a>
                </div>

            </div>    
        </div>
        <button onClick={()=>{closeToast()}} type="button" className="z-999 ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "style={{backgroundColor:"#450a0ace"}} data-dismiss-target="#toast-interactive" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div>
    )
}
export default SoyNuevo;