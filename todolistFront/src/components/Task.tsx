import CreateTask from "./CreateTask";
import ListTask from "./ListTask";

const Task = () => {

    return (
        <main className="w-[90%] py-6 px-4 bg-gray-100 rounded-xl md:w-[75%] lg:w-[60%]">
            <CreateTask />
            < ListTask />
        </main>
    );

};

export default Task;