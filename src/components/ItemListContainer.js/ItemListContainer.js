import { useEffect } from "react";
import { getProducts, getProductByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    const asyncFunc = async (categoryId) =>{
        if (categoryId) {
            return getProductByCategory(categoryId)    
        }else{
            return getProducts()
        }
    }

    useEffect(() => {
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;