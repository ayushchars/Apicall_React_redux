import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {SelectedProduct} from "../redux/action/actionCreator"
import IncrementProduct from './incrementProduct';
import "./style.css"
function ProductDetail() {
  const {id} = useParams();

    const dispatch = useDispatch()

    const FetchDetail = async()=>{
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch(err=>{
        console.log(err)
      })
      dispatch(SelectedProduct(response.data))
    }
    useEffect(() => { 
      if(id && id !== "") FetchDetail()
    }, [id])
   
    const state = useSelector(state => state.productdetail) 
    const {category,description,image,price,title} = state ;

    return (
  
    <div className='Detail_Container'>
     <div className='detail_category'>
      <h2 className='category_title'>{category}</h2>
     </div> 
    <div className='detail_img'>
      <img src={image} alt={image} className="img"/>
    </div>


    <div className='detail_description'>

      <h1>{title}</h1>
      <p>{description}</p>
      <div className='detail_price'>

      <h1>$ {price}</h1>
      <IncrementProduct/>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail