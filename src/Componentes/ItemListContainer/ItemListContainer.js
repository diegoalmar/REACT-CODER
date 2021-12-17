import { useState , useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productosIniciales = [
    {nombre: "Camisa", precio: 5290},
    {nombre: "Remera", precio: 2550},
    {nombre: "Bermuda", precio: 3200}
]


const ItemListContainer =({greeting}) => {

    /*const [item,setItem] = useState(0)*/
    let [lista, setLista] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        promesa
        .then((productos)=>{
             console.log("lista de productos ok ")
             console.log (productos)
             setLista (productos)
        })
        .catch(()=>{
        console.log("wrong")
        })

    },[])

    const onAdd = (cantidad)=>{
        console.log (" onAdd desde padre ")
        console.log ("cantidad de Items" + cantidad)
        /*setItem(cantidad)*/
        }

        return ( 
            <div>
                <h2> {greeting}</h2>
                {/*<ItemCount stock ={5} initial={1} onAdd={onAdd}/>*/}
                <ItemList lista = {lista}/> 
            </div>
        )


}

export default ItemListContainer;

