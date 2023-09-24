import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Pagination = () => {
  const [searchparams, setSearchparams] = useSearchParams()
  const initialPage = searchparams.get("page")
  const [page, setPage] = useState(initialPage || 1)


  const handlePrevious = () => {
    setPage((prev) => prev - 1)
  }
  const handleNext = () => {
    setPage((prev) => prev + 1)
  }

  
  

  useEffect(() => {
    let params = {
      page,
    }
    setSearchparams(params)
  }, [page])

  return (
    <DIV page={page}>
      <button className='prev' onClick={handlePrevious}  disabled={page <=1} >PREVIOUS</button>
      <p>{page}</p>
      <button className='next' onClick={handleNext}  disabled={page >= 4}>NEXT</button>
    </DIV>
  )
}

export default Pagination

const DIV = styled.div`
    display: flex;
    gap:20px;
    justify-content: center;
    button{
      border: none;
      background-color: #3030f7;
      color: white;
      padding: 10px 20px; 
      border-radius: 3px;
      cursor: pointer;
    } 
    .prev{
      ${({page}) => (page==1 && `visibility:hidden`)}
    }
    .next{
      ${({page}) => (page>=4 && `visibility:hidden`)}
    }
    button:hover{
      border: none;
      background-color: #1717d3;
  
    } 
    p{
      padding: 10px 20px; 
      font-weight:700;
    } 
 `