import React from 'react';
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import  {useContext} from 'react';
import axios from 'axios';
import AuthContext from '../../store/authContext'


const ProductCard = ({product}) => {
    let navigate = useNavigate()
    console.log(product)
    const handleClick = () => {
        navigate(`/productCard/${product.ProductCard}`) /// what needs to be inside the curly braces?
    }
const authCtx = useContext(AuthContext)

const addToCart = () => {
    axios
        .post("/cart", {
            userId: authCtx.userId,
            productId: product.id
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}
    console.log(addToCart)

    return (
        <div className='productCard'>
            <div>
                <img className='productCard__image' src={product.imageUrl} alt={product.name} />
            </div>
            <div>
                <h3>{product.name}</h3>
            </div>
            <div>
                <h5>{product.description}</h5>
                <h3>${product.price}</h3>
                <button className="addtocartBtn" onClick={() => addToCart()} >Add To Cart</button>
                {/* <button onClick={() => Navigate(`/products/${product.ProductCard}`)}>Go to Product</button> */}

            </div>
        </div>
    )
}

export default ProductCard;
