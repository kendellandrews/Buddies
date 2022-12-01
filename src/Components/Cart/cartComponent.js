import React from 'react';
import axios from 'axios';
import Cart from './cart'
import {useState, useEffect, useContext} from 'react'
import AuthContext from "../../store/authContext";


const CartComponent = ({item, itemId, getCart}) => {

    let {userId, token} = useContext(AuthContext)

    const removeFromCart = () => {
        axios.delete(`/cart/${itemId}`, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                getCart()
            })
            .catch(err => {
                console.log(err)
            })
    }
       console.log(item)

    return (
        <section className="cartSection">
           <div>
                <img src={item.imageUrl}/>
           </div> 
           <div>
                <h3>{item.name}</h3>
            </div>
            <div>
                <h5>{item.description}</h5>
                <h3>${item.price}</h3>
            <button className='form-btn' style={{marginLeft: 10}} onClick={() => removeFromCart()}>
                            Remove
                        </button>
            </div>
        </section>
)}

export default CartComponent;
