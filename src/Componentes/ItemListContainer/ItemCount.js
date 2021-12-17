import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemCount = ({ stock, initial, onAdd }) => {

    let [contador, setContador] = useState(initial);

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const agregarItem = () => {
        console.log("Agrega un item con onAdd")
        setContador(initial)
        onAdd(contador)
        
    }

    return (

        <div className="counter" >
            <div className="card">
                <img src="/camisa2.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Camisa LINO CRUDO</h5>
                    <p className="card-text">Camisa manga corta de Fibrana, súper fresca y liviana. Logo de la marca bordado, etiqueta y botones teñidos a tono</p>
                    <p> <strong>$5.290</strong> </p>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Elige tu Talle</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="3">XL</option>
                    </select>
                    <p className="card-text1">Cantidad: {contador} </p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={sumar} >+</button>
                        <button type="button" className="btn btn-secondary" onClick={restar} >-</button>
                    </div>
                    <button type="button" className="btn btn-success" onClick={agregarItem} >Agregar al Carrito </button>
                </div>
            </div>
        </div>

    )
}

export default ItemCount;
