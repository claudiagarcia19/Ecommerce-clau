import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseEcommerce/database";

const ItemDetailcontainer = () =>{
    const[product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() =>{
        const docRef = doc(db,"products",itemId)
        getDoc(docRef)
          .then(response =>{
            const dataProducto= 
                response.data()
            const productoCompleto = { ...dataProducto, id:response.id}
            setProduct(productoCompleto)
            })
          .catch(error => {
            console.log(error)
        })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
    

};

export default ItemDetailcontainer;