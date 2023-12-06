// Asi como existe el createContexto para crear el contexto, tambien
// tenemos la funcion 'useContext' para poder usar ese contexto
import { useContext } from "react";
// Este es el nombre del contexto
import { TaskConext } from "../context/TaskContext";

function TaskCard({ task }) {
  //Ahora tengo acceso al contexto
  const { deleteTask } = useContext(TaskConext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
