import '../hojasDeEstilo/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                onClick={() => completarTarea(id)}
                className="tarea-texto">
                {texto}
            </div>
            <div 
                onClick={() => eliminarTarea(id)}
                className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea;