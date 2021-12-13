import Header from "./Componentes/header/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
    const links = [
        {href:"#",name: "+Info"},
        {href:"#",name: "Contáctenos"}
         ]

    return (
       <>
            <Header nombre=" Diego" edad="" links={links}/>
            <main></main>
           
        </>
    )
}

export default App
