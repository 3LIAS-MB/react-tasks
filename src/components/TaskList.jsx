import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskConext } from "../context/TaskContext";

// Contiene la lista de tareas y la muestra en pantalla
function TaskList() {
  const { tasks } = useContext(TaskConext);

  if (tasks.length === 0) {
    return <h2 className="text-white text-4xl font-bold text-center">No hay tareas aún</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
