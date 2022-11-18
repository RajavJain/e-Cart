import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import {actionCreator} from '../state/index';
// export * as actionCreator from "../state/action-creator/index" 


const Shop = () => {
  const dispatch= useDispatch();

  return (
        <>
        <div className='container my-4'>
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.delItem(1))}}> - </button>
                ADD Items TO CART
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.addItem(1))}}> + </button>
        </div>
        </>
  )
}

export default Shop