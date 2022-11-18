import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreator} from '../state/index';



const Shop = () => {
  const dispatch= useDispatch();
  // Used the help of destructuring
  const {delItem,addItem}= bindActionCreators(actionCreator,dispatch)

  return (
        <>
        <div className='container my-4'>
            <button className="btn btn-primary mx-2" onClick={()=>{delItem(1)}}> - </button>
                ADD Items TO CART
            <button className="btn btn-primary mx-2" onClick={()=>{addItem(1)}}> + </button>

            {/* OR WITHOUT BINDACTIONCREATOR  */}
            {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.delItem(1))}}> - </button>
                ADD Items TO CART
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.addItem(1))}}> + </button> */}
        </div>
        </>
  )
}

export default Shop