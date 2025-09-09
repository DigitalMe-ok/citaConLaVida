import Link from"next/link";
import Image from "next/image";
const seccionRecursos = ({parConstr}) =>{
    return(
        <section className="py-12 px-6 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Galería</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                parConstr.map((item,index) =>(
                        <Link key={index} href={item.link}><Image src={item.img} alt={item.name} width={350} height={250} className="rounded-xl shadow-md"/></Link>
                ))
            }
            
            </div>
        </section>
    )
    
}
export default seccionRecursos;