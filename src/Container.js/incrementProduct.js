import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from '../redux/action/actionCreator'
import { Decrement } from '../redux/action/actionCreator'
import Cart from './Cart'
import "./style.css"
function IncrementProduct() {
    const addCart = useSelector(state => state.addCart)

    const dispatch = useDispatch()

    const state = useSelector(state => state.productdetail) 
    const {price} = state ;

 


  const functions =()=>{
     if(addCart < 0){
      alert(`price can not be less then zero`)
     }
     else if(addCart > 0 ){
      alert(`Thank you for Shoping Total is ${addCart*price}`)
     }
     else{
     return addCart   
    }

  }



    return (
      <div className='inc_container'>
    <div className='Increment'>
            <button onClick={()=>dispatch(Increment(1))} className="btn">+</button>

            <h1>{addCart}</h1>
            
            <button onClick={()=>dispatch(Decrement(1))} className="btn">-</button>
    </div>
          <button className='Shop' onClick={functions}>Buy Now</button>
      </div>

  )
}

export default IncrementProduct