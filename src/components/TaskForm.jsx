import { useState, useContext} from "react";
// Este es el nombre del contexto
import { TaskConext } from '../context/TaskContext'

function TaskForm() {
  // La constante 'title' tiene el valor
  // de lo que el usuario esta tipeando
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Ahora tengo acceso a un objeto del contexto
  const {createTask} = useContext(TaskConext)

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title) -> muestra lo que ingrese el usuario en string
    //console.log(newTasK) -> {tile: 'tarea nueva'} -> Si envio una tarea
    createTask({
        title,
        description
    });
    // Establece el titulo y la descripción en vacio  
    setTitle('')
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
      placeholder="Escribe la descripcion de la tarea"
      onChange={(e) => setDescription(e.target.value)}
      className="bg-slate-300 p-3 w-full mb-2"
      value={description}
      ></textarea>
      <button
      className="bg-indigo-500 px-3 py-1 text-while"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
