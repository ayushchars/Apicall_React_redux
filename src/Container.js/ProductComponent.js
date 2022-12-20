import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./style.css"

function ProductComponent() {
    const products = useSelector(state => state.allproduct.product);
    const productlist = products.map(item =>{
        const {id,title,image,price} = item
        return(

            <div key={id}>
            <Link to={`/product/${id}`}>
               <div className='Product_item' key={id}>
                <img src={image}/>

                <h1>{title}</h1>
                <h2>$ {price}</h2>
                </div>
            </Link>
            </div>
        )
    })

  return (
    <div className="product_component_container">{productlist}</div>

    )
}

export default ProductComponent