import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { handleDelete } from '../redux/productReducer/action'


const ProductCard = ({name,gender,id,category,image,price,brand,discount}) => {
const dispatch = useDispatch()
const navigate = useNavigate()
const handleDeleteProduct = () => {
  dispatch(handleDelete(id))
  .then(()=> {
    alert("product deleted success!!!")
  })
  setTimeout(()=> {
   navigate("/") 
  })
}

  return (
    <>
    <DIV>
      <div className='cart'>
      <img src={image} alt="image" />
      <h4>{name}</h4>
      <h4>Price: ₹{price}</h4>
      <p>brand: {brand}</p>
      <p>discount: {discount}%</p>
      <p>category: {gender}</p>

      
      <button>
        <Link className='edit' to={`/edit/${id}`}>Edit</Link>
      </button>
      <button className='delete' onClick={handleDeleteProduct}>
        Delete
      </button>
    
      </div>
    </DIV>
    </>
  )
}

export default ProductCard


const DIV = styled.div`

.cart{
 border: 1px solid #ececec;
    padding: 10px;
    width:250px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
}
   
    .cart:hover{
      border:none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 3px;
    }
   
img{
    width: 100%;
    height: 200px;
}
button{
  margin-top: 20px;
border: none;
}
.edit{
  text-decoration: none;
  color: #fcfafa;
  padding: 10px 30px;
  background-color: #017c01;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.edit:hover{
  background-color: #049c04;


}
.delete{
  text-decoration: none;
  color: #fcfafa;
  padding: 10px 30px;
  background-color: #e20b0b;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
}
.delete:hover{
 background-color: red;
}
`