import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer =({greeting})=>{


    const onAdd = (cantidad)=>{
        console.log (" onAdd desde padre ")
        console.log ("cantidad de Items" + cantidad)
        }

        return ( 
            <div>
                <h2> {greeting}</h2>
                <ItemCount stock ={5} initial={1} onAdd={onAdd}/>
            </div>
        )


 }

export default ItemListContainer

