import React,{ useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


const ProductDetail = () => {
    const {id} =  useParams()// Получаем параметр 'id' из URL
    const[product, setProduct] = useState(null);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/products/${id}/`)
            .then(response=>response.json())
            .then(data=>setProduct(data))
            .catch(error => console.error('Error fetching product:', error)); 
        }, [id]);
    if (!product){
        return<div>load..</div>
    }
    return(
        <div>
            <h1>Product detail</h1>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price:${product.price}</p>
            {product.image && <img src={product.image} alt={product.name}/>}
        </div>
    );
};

export default ProductDetail;