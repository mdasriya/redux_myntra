
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { editProduct } from '../redux/productReducer/action'


const initState = {
  name: "",
  image: "",
  price: "",
  brand: "",
  discount: "",
  category: "",
  gender: ""
}

const EditProduct = () => {
  const [data, setData] = useState("")
  const [success, setSuccess] = useState(false)
  const { products } = useSelector(store => store.productReducer)
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(data, id)).
      then(() => {
        setSuccess(true)
        setData(initState)
      })
    alert("data has edited successfully!!!")
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }


  useEffect(() => {
    const filterProduct = products?.find((item) => item.id == id)
    console.log(filterProduct);
    setData(filterProduct)
  }, [])
  console.log("data", data);
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h2>Edit Page: {id}</h2>
        <h3 className='editmsg'>{success && "product edited success!!!"}</h3>
        <input type="text" name="name" onChange={handleChange} placeholder='Name' value={data?.name} />
        <input type="text" name="image" onChange={handleChange} placeholder='Image' value={data?.image} />
        <input type="number" name="price" onChange={handleChange} placeholder='Price' value={data?.price} />
        <input type="text" name="brand" onChange={handleChange} placeholder='brand' value={data?.brand} />
        <input type="number" name="discount" onChange={handleChange} placeholder='discount' value={data?.discount} />
        <input type="text" name="category" onChange={handleChange} placeholder='category' value={data?.category} />

        <select name="gender" onChange={handleChange} value={data?.gender}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">kids</option>
        </select>
        <button type='submit' >EDIT PRODUCT</button>
      </form>
    </DIV>
  )
}

export default EditProduct

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
.editmsg{
  color: green;
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
