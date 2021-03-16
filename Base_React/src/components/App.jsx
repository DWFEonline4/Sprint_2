import '../css/App.css';
import bg from "../img/hello-world.jpg";
import Componente from './Componente';

export default function App() {
  return (
    <div className="App">
      <Componente
        css="image"
        cover={bg}
      />
    </div>
  );
}