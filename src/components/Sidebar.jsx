
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

function Sidebar() {
    const [searchtext, setSearchText] = useState("")
    const [searchparams, setSearchparams] = useSearchParams()
    const initialGender = searchparams.getAll("gender")
    const initialOrder = searchparams.get("order")
const [gender, setGender] = useState(initialGender || [])
const [order, setOrder] = useState(initialOrder || "")

const handleChange = (e) => {
 let newgender = [...gender]
 let value = e.target.value;

 if(newgender.includes(value)){
    newgender = newgender.filter((el)=> el != value)
 }else{
    newgender.push(value)
 }
 setGender(newgender)
}


const handleSort = (e) => {
    const {value} = e.target
    setOrder(value)
}


// const handleSearch = () => {
    //    setSearchText()
    // }
    


    useEffect(()=>{
  let params = {
    gender,
  }
   order && (params.order = order)
   searchtext && (params.searchtext = searchtext)
   setSearchparams(params)
},[gender,order,searchtext])

    return (
        <DIV>
            <div>
                <div className='searchbox'>
                <input className='search' type="text" placeholder='search...' onChange={(e)=>setSearchText(e.target.value)}/>
                {/* <i className="fa fa-search" onClick={handleSearch}/> */}
                </div>
                <h3>Filter</h3>
            </div>
            <div className='checkbox_gap'>
                <input type="checkbox" value={"male"} onChange={handleChange} checked={gender.includes("male")}/>{" "}
                <label>Men</label>
            </div>
            <div className='checkbox_gap'>
                <input type="checkbox" value={"female"} onChange={handleChange} checked={gender.includes("female")}/>{" "}
                <label>Women</label>
            </div>
            <div className='checkbox_gap'>
                <input type="checkbox" value={"kids"} onChange={handleChange} checked={gender.includes("kids")}/>{" "}
                <label>Kids</label>
            </div><br />
<div onChange={handleSort}>
    <input type="radio" name='order' value={"asc"} defaultChecked={order ==="asc"}/>{" "}
    <label>Ascending</label><br />
    <input type="radio" name='order' value={"desc"} defaultChecked={order ==="desc"}/>{" "}
    <label>Decsending</label>
</div>

        </DIV>
    )
}

export default Sidebar

const DIV = styled.div`
     :nth-child(1){
       padding: 5px;
     }
     .checkbox_gap{
        gap: 3;
     }
     .searchbox{
        display: flex;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        margin-bottom: 10px;
        border-radius: 4px;
        border-style:none;
     }
     .search{
        width: 90%;
        margin-right: 10px;
        border: none;
     }
     .fa-search{
        /* border: 1px solid gray; */
        padding: 4px;
        cursor: pointer;
      
     }
     .fa-search:hover{
       background-color:blue;
        cursor: pointer;
        color: white;
     }
`