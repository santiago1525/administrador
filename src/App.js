import './App.css';
import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo'>Gestor de Tareas</div>
      <div className='tareas-lista-principal'>
        <h1 className='titulo'> Mis Tareas </h1>
         <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
