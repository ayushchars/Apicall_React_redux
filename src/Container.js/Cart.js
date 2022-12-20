import React from 'react'
import { useSelector } from 'react-redux';
function Cart() {
  const state = useSelector(state => state.addCart); 
  console.log(state)

  const prices = useSelector(state => state.productdetail.price) 

  console.log(state * prices)
  return (
    <div>
      <h1>{state*prices}</h1>
    </div>
  )
}

export default Cart