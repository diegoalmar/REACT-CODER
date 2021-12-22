import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const productoInicial = {
    nombre: "Camisa",
    precio : 5290
}


const ItemDetailContainer = ()=>{

    let [producto, setProducto] = useState(null)

    useEffect(()=>{

        const getItem = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productoInicial)
            },2000)
        })

        getItem
        .then((producto)=>{
             console.log("producto in")
             console.log (producto)
             setProducto (productoInicial)
        })

    },)

    return (
        <div>
            <ItemDetail producto={productoInicial}/>
        </div>
    )
}


export default ItemDetailContainer