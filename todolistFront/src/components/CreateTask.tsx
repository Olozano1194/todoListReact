

const CreateTask = () => {

    return (
        <main className="w-full flex flex-col p-2">
            <div className="pb-10">
                <h1 className="text-center text-2xl md:text-4xl">ToDo <span className="text-green-400">List</span></h1>
            </div>
            <section className="w-full flex flex-col gap-6 md:flex-row md:items-center md:pb-8">
                <input 
                    type="text"
                    className="w-full p-2 border-solid border-b-2 border-gray-400 outline-none text-lg md:text-xl md:px-0"
                    placeholder="Agrega la tarea" 
                />
                <div className="w-full flex justify-center pb-6 md:pb-0 md:justify-end">
                    <button className="w-48 bg-green-200 rounded-2xl p-2 cursor-pointer text-lg hover:bg-green-600 hover:text-gray-100 md:text-xl">
                    Agregar
                </button>

                </div>                
            </section>
        </main>
    );
};
export default CreateTask;