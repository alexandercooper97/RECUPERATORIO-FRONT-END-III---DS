import { useState } from "react";

import "./index.css";

// CONSIGNAS EN APP:
// 1- Implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- Desarrollar los métodos que me permitan asignarle valor correspondiente a esas variables.
// 3- Incorporar el componete Tarjeta en 🚩

// ESTADO: App tiene dos estados, uno para manejar el tema Claro/Oscuro, y otro para guardar como texto la Plataforma favorita.
// MÉTODOS: App tiene dos métodos, uno para cambiar el color del tema y otro para setear la plataforma favorita.
// PROPS: App no tiene props.

import { useState } from "react";
import Tarjeta from "./componenetes/tarjeta"; // Importamos Tarjeta
import "./index.css";

function App() {
  // Estados
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [favorita, setFavorita] = useState("");

  // Método para cambiar entre tema claro y oscuro
  const handleTema = () => {
    setTemaOscuro(!temaOscuro); // Cambiamos el estado al opuesto
  };

  // Método para establecer la plataforma favorita
  const handleFavorita = (plataforma) => {
    setFavorita(plataforma);
  };

  return (
    <div id="App" className={temaOscuro ? "dark" : ""}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>

      {/* Mostrar la plataforma favorita seleccionada */}
      {favorita !== "" ? (
        <h4
          className={
            favorita === "Twitter"
              ? "tw"
              : favorita === "Facebook"
              ? "fb"
              : "yt"
          }
        >
          {favorita}
        </h4>
      ) : (
        ""
      )}

      {/* 🚩 Integración del componente Tarjeta */}
      <Tarjeta seleccionarPlataforma={handleFavorita} />

      {/* Botón para cambiar el tema */}
      <button onClick={handleTema}>
        {temaOscuro ? "Cambiar a Tema Claro" : "Cambiar a Tema Oscuro"}
      </button>
    </div>
  );
}

export default App;

