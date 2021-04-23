import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState([])
  let textRef = useRef();

  function enviar() {
    if (textRef.value != "") {
      setState(
        state.concat(textRef.value)
      )
    }
    textRef.value = "";
  }

  const borrar = (index) => {
    state.splice(index, 1)
    setState(
      state.concat()
    )
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="form-group col mb-2">
                <input type="text" ref={t => textRef = t} className="form-control" placeholder="Ingresar tarea" />
              </div>
              <button className="btn btn-primary mb-2" onClick={enviar}>Agregar</button>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"></li>
          {state.map((item, index) => {
            return (
              <li key={index} className="list-group-item">{item} <span id="borrar" onClick={() => borrar(index)}> Borrar</span></li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
export default App;
