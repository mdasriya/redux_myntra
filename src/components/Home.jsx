import React from 'react'
import ProductList from '../pages/ProductList'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Pagination from '../pages/Pagination'


const Home = () => {

  return (
    <DIV>
      <div className='sidebar'>
      <Sidebar />
      </div>

      <div className='second'>
      <div className='productlist'>
      <ProductList />
      </div>
      <div className='pagination'>
        <Pagination />
      </div>
      </div>
    
    </DIV>
  )
}

export default Home


const DIV = styled.div`
display: flex;
.sidebar{
  width:15%;
  padding: 10px;
  border-right:1px solid gray;
  
}
.productlist{
  width:100%;
  margin-top: 10px;
  border-bottom: 1px solid gray;
}
.second{
  display: flex;
  flex-direction: column;
}
.pagination{
  align-items:center;
  padding: 20px;
  width: 100%;
  /* border: 1px solid red; */
}
`