import '../hojasDeEstilo/listaDeTareas.css';
import Formulario from './tareaFormulario';
import Tarea from './tarea';
import { useState } from 'react';

function ListaDeTareas() {

    const[tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {  // la tera que se recibe viene de formulario, el array tareaNueva
       if (tarea.texto.trim()) {  // Aca se verifica que la tera no este vacia
           tarea.texto = tarea.texto.trim(); // con esto quitamos los espacios en blanco que esten al principio o al final
           const tareasActualizadas = [tarea, ...tareas]; // con esto decimos que queremos que se ubique al principio del arreglo
           setTareas(tareasActualizadas);
       }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <Formulario 
                onSubmit={agregarTarea} />
            <div className="tareas-lista-contendor">
                {
                    tareas.map((tarea) => 
                    <Tarea
                        key={tarea.id} // este es para que react reconozca cada elemento sin embargo no lo reconoce como un valor
                        id={tarea.id}  // por eso pasamos este como propiedad y asi usarlo en las funciones de tarea
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea} />)
                }
            </div>
        </>
    );
}

export default ListaDeTareas;