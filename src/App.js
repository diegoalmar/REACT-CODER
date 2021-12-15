import { useState } from "react";
import Header from "./Componentes/header/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Main from "./Componentes/main/Main";
import ItemCount from "./Componentes/ItemListContainer/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";


function App () {
    
    const links = [
        {href:"#",name: "+Info"},
        {href:"#",name: "Contáctenos"}
         ]

    return (
       <>
            <Header nombre="Moda Urbana" edad="" links={links}/>
            
            <ItemListContainer/>
           
        </>
    )
}

export default App
