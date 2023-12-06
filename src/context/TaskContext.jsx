import { createContext, useState, useEffect } from "react";
// 'as' es para asignarle un ALIAS
import { tasks as data} from "../data/tasks";


// La funcion 'createContext()' retorna un objeto
// taskConext es el nombre del contexto
export const TaskConext = createContext();

// Este componente engloba al resto
export function TaskContextProvider(props) {
  {/*Utiliza el hook useState para declarar una variable de estado tasks 
  inicializada con un array vacío y su función actuaalizadora setTasks.*/}
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    {/*Crea un nuevo arreglo y copia todo lo que está en tasks,
    despues de la primera coma empiezan los nuevos elementos*/}
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // Establezco el nuevo elemento en el estado
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  /*Cuando el componente 'TaskContextProvider' es  creado,
  el useEffect se ejecuta y establece las tareas, los datos.
  Estos datos vienen de */
  useEffect(() => {
    // Esto establece el estado tasks con el valor de data.
    setTasks(data)
  }, [])  // -> Una sola vez no importa si cambia

  return (
    <TaskConext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskConext.Provider>
  );
}
