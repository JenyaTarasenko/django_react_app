import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const ProductList = () => {
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/products/`)
        .then(response=>response.json())
        .then(data =>setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    },[]);

    return(
        <div>
            <h1>ProductList</h1>
            <ul>
                {products.map(product=>(
                    <li key={product.id}>
                        <Link to={`/product/${product.id}/`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ProductList;