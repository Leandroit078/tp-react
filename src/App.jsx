import TituloPrincipal from "./components/TituloPrincipal";
import Message from "./components/State";
import './style.css'

function App() {

  const titulo = "my friend" ;

  return (
    <>

<TituloPrincipal codigoTitulo={titulo} estado={true}/>
<Message note='My friend'></Message>

    </>
  );
}

export default App;
