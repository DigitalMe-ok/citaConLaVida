const CartaEquipo = ({ nombre, cargo, descripcion, imagen, enlace = "#" }) => {
    return (
        <a 
            href={enlace} 
            className="grid grid-cols-2 w-auto h-auto bg-gray-800 rounded-lg"
        >
            <img 
                className="  h-full rounded-t-lg md:rounded-none md:rounded-s-lg" 
                src={imagen || "/docs/images/blog/image-4.jpg"} 
                alt={nombre || "Miembro del equipo"}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {nombre || "Nombre del miembro"}
                </h5>
                <p className="mb-2 text-lg font-semibold text-red-300 ">
                    {cargo || "Cargo"}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {descripcion || "Descripción del miembro del equipo."}
                </p>
            </div>
        </a>
    );
};

export default CartaEquipo;