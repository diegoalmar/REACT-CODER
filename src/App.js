import { useState } from "react";
import Header from "./Componentes/header/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Main from "./Componentes/main/Main";
import ItemCount from "./Componentes/ItemListContainer/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemListContainer/ItemDetailContainer";
import ItemDetail from "./Componentes/ItemListContainer/ItemDetail";


function App () {
    
    const links = [
        {href:"#",name: "+Info"},
        {href:"#",name: "Contáctenos"}
         ]

    return (
       <>
            <Header nombre="Moda Urbana" edad="" links={links}/>
            <ItemListContainer/>
            <ItemDetailContainer/>
           
        </>
    )
}

export default App
