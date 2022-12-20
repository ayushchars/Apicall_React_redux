import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {SetProduct} from "../redux/action/actionCreator"
import ProductComponent from './ProductComponent'
function Productlisting() {
    const dispatch = useDispatch()

    const FetchProduct = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch(err=>{
            console.log(err)
        })
        dispatch(SetProduct(response.data))
    };
    useEffect(() => {
  FetchProduct();
    },[])
    

  return (
    <div><ProductComponent/></div>
  )
}

export default Productlisting