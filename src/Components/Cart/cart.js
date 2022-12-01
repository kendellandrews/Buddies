import React from "react";
import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import AuthContext from "../../store/authContext";
import CartComponent from "./cartComponent"


const Cart = () => {
    // const {userId, token} = useContext(AuthContext)

    let [cart, setCart] = useState([])
    let {userId, token} = useContext(AuthContext)

    function getCart(){
        axios.get(`/cart/${userId}`)
        .then((res) => {
            console.log(res.data)
            setCart(res.data)
        })
    }


    useEffect(()=> {
        getCart()
    },[])

   


    return (
        <div className="cart">
            <div className="cartmap">
                {cart.map(item => {
                    return <CartComponent item={item.product} itemId={item.id} getCart={getCart}/>
                })}
                 
            </div>

            <div className="cartTotal">
                <p>{cart.reduce((total, item) => total += +item.product.price, 0)}Cart Total</p>
            </div>
        </div>
    )
}

export default Cart;