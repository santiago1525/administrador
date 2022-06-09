import '../hojasDeEstilo/tareaFormulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

    const[input, setInput] = useState('');

    const cambio = e => {
        setInput(e.target.value);
    }

    const envio = e => {
        e.preventDefault();

       
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva); // esta se pasa a la funcion de agregar tarea
    }

    return(
        <form 
            onSubmit={envio}
            className='tarea-formulario' >
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={cambio} />
            <button className='tarea-boton'>
                Agregar
            </button>
        </form>
    );
}

export default Formulario;