const Item = (item)=>{
    return(
        <article>
            <h3>{item.nombre}</h3>
            <p>Precio : ${item.precio}</p>
            <button> Ver Detalle</button>
        </article>
    )
}


export default Item;