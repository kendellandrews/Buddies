
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import ProductCard from '../Product/productCard'
import AuthContext from '../../store/authContext'
import Header from '../Header/header'


const Home = () => {
    let [products, setProducts] = useState([])

    function getAllProducts(){
        axios.get('/product')
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
    }
    useEffect(()=> {
        getAllProducts()
    },[])

    return (
        <div className='homeReturn'>
            {products.map(product => {
                return <ProductCard product={product} />
            })}
        </div>
      )
   
}

export default Home