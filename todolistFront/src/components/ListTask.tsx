import { Link } from "react-router-dom";
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const ListTask = () => {

    return (
        <main className="w-full grid grid-cols-1 grid-rows-3 p-2 text-lg md:text-xl xl:text-2xl">
            <div className="mb-4.5">
                <p>
                    Te quedan <span className="text-lg text-green-500 md:text-2xl">3</span> tareas por hacer
                </p>
            </div>
            <form className="w-full flex justify-between">                
                <label htmlFor="" className="flex gap-2 items-center"><input type="checkbox" className="appearance-none w-3 h-3 border border-gray-600 cursor-pointer rounded-full checked:bg-green-500 checked:border-transparent relative" name="" id=""/>Aqui va algo</label>
                {/* btn */}
                <section className="w-[30%] cursor-pointer flex justify-end items-center gap-2 text-xl md:text-2xl">
                    <Link to='#' className="text-green-600 hover:scale-125 hover:text-green-800"><RiPencilLine /></Link>
                    <Link to='#' className="text-red-600 hover:text-red-700 hover:scale-125"><RiDeleteBinLine /></Link>
                </section>
            </form>
            
        </main>        
    );
};

export default ListTask;