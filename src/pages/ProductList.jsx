import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productReducer/action'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'

const ProductList = () => {
    const [searchparams, _] = useSearchParams()
  const location  = useLocation()
const dispatch = useDispatch()

const {products} = useSelector((store)=> store.productReducer)

// console.log(result);
let obj = {
    params:{
        gender:searchparams.getAll("gender"),
        _sort:searchparams.get("order") && "price",
        _order: searchparams.get("order"),
        _limit: 5,
        _page:searchparams.get("page"),
        q:searchparams.getAll("searchtext") 
    }
}

useEffect(()=> {
  dispatch(getProduct(obj))
},[location.search])
  return (
    <DIV>
      {
        products.length>0 && products.map((el)=> {
            return <ProductCard key={el.id} {...el}/>
        })
      }
    </DIV>
  )
}

export default ProductList;

const DIV = styled.div`
    display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
/* border: 1px solid blue; */
padding: 5px 40px;
.pagination{
  align-items: end;
}
`
