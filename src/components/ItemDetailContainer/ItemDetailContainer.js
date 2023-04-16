import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailcontainer = () =>{
    const[product, setProduct] = useState(null)

    useEffect(() =>{
        getProductById("1")
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
    

};

export default ItemDetailcontainer;