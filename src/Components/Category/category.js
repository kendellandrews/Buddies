import React from 'react';
import ProductCard from '../Product/productCard'
import { useState } from 'react';

// import { BiSearchAlt2 } from "react-icons/bi";

const Category = CategoryContainer() /// not sure wht to put here. 

const CategoryContainer = ({Category}) => {
    const [search, setSearch] = useState("");
    // const [products, setProducts] = useState([]);

    const CategoryDisplay = Categorys
    .filter((Categorys, index) => {
      let title = Categorys.title.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((Categorys, index) => {
      return <CategoryDisplay/> /// not sure what to put in this return
    })

}

const getAllCatagorys = (state) => { return
    state.getAllCategorys.map((Categorys) => {
        return {
            id: Categorys.id,
            name: Categorys.name,
            image: Categorys.image,
        }
    })
}

export default Categorys;