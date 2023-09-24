import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { addProduct } from '../redux/productReducer/action'
import { CircularProgress, Button } from '@chakra-ui/react'


const initialProduct = {
  name: "",
  image: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
  category: "",

}

export const Admin = () => {
  const [product, setProduct] = useState(initialProduct)
  const dispatch = useDispatch()

  const { isLoading } = useSelector(store => store.productReducer)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addProduct(product))
    setProduct(initialProduct)
  }

  return (
    <DIV>
      <form>
        <h2>Add Product</h2>
        <input onChange={(e) => handleChange(e)} type="text" name="name" value={product.name} placeholder='Enter Product Name' />
        <input onChange={(e) => handleChange(e)} type="text" name="image" value={product.image} placeholder='Enter Product Image' />
        <input onChange={(e) => handleChange(e)} type="number" name="price" value={product.price} placeholder='Enter Product Price' />
        <input onChange={(e) => handleChange(e)} type="text" name="brand" value={product.brand} placeholder='Enter Product Brand' />
        <input onChange={(e) => handleChange(e)} type="number" name="discount" value={product.discount} placeholder='Enter Product Discount' />

        <select name="gender" value={product.gender} onChange={(e) => handleChange(e)} >
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>

        <select name="category" value={product.category} onChange={(e) => handleChange(e)}>
          <option value="">Select Category</option>
          <option value="top-wear">Top-wear</option>
          <option value="bottom-wear">Bottom-wear</option>
          <option value="shoes">Shoes</option>
        </select>

        
      <button type='submit' onClick={handleAdd}>ADD PRODUCT</button>
        


      </form>
    </DIV>
  )
}

const DIV = styled.div`
  margin-top: 10px;
form{
    width: 30%;
    border: 1px solid gray;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
}
input, select{
    width: 80%;
    height: 30px;
    border: 1px solid gray;
}
option{
  font-size  :larger ;
}
h2{
    font-size:30px;
    font-weight: 600;
}
button{
  width :80%;
  height: 30px;
  background-color: #2d2df3;
  color: #fff;
  border: none;
  border-radius: 5px;
}
button:hover{
 cursor: pointer;
 background-color: #0a0afc;
}  
`
