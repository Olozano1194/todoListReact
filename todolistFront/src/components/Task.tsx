import CreateTasks from "./CreateTask";
import ListTask from "./ListTask";

const Task = () => {

    return (
        <main className="w-full flex flex-col justify-center items-center py-6 px-4 bg-gray-100 rounded-xl md:px-8">
            <CreateTasks />
            < ListTask />
        </main>
    );

};

export default Task;