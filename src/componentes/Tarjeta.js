import Item from './item'; // Importamos el componente Item
const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

// CONSIGNAS EN TARJETA:
// 1- Importar Item
// 2- Utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩
// 3- Cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma

// El componente Tarjeta es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método heredado de App y se lo pasa a cada Item.


export default function Tarjeta(props) {
  return (
    <ul>
      {listadoPlataformas.map((plataforma, index) => (
        <Item 
          key={index} 
          nombre={plataforma} 
          seleccionarPlataforma={props.seleccionarPlataforma} 
        />
      ))}
    </ul>
  );
}
