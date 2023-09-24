import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

export const Navbar = () => {
    const [searchtext, setSearchText] = useState("")

    const navigate = useNavigate()
    const [searchparams, setSearchparams] = useSearchParams()
    useEffect(()=>{
        let params = {}
         searchtext && (params.searchtext = searchtext)
         setSearchparams(params)
      },[searchtext])

    return (
        <DIV>

            <div>
                <h2 onClick={() => navigate("/")}>Shopee App</h2>
            </div>

            <div>
                <Link  className="link" to={"/"}>Home</Link>
            </div>
            <div className='searchbox'>
            <input className='search' type="text" placeholder='search...' onChange={(e)=>setSearchText(e.target.value)}/>
                <i className="fa fa-search" />
                </div>

            <div className='last'>
                <div>
                    <Link className="link"  to={"/admin"}>Admin</Link>
                </div>
                <div>
                    <Link className="link"  to={"/login"}>Login</Link>
                </div>
            </div>


        </DIV>
    )
}

const DIV = styled.div`
width: 100%;
border-bottom: 1px solid gray;
display: flex;
align-items: center;
justify-content: space-between;

.last{
    display: flex;
   gap: 10px;
}
.searchbox{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: 5px;
    border-radius: 5px;
    padding-right: 10px;
}
.search{
    padding: 5px;
    margin: 5px;
    border: none;
}
.fa-search{
    font-size: 15px;
    cursor: pointer;
    color: #bdbdbd;
    opacity: .8;
    /* border: 1px solid gray; */
}
.link{
    text-transform: uppercase;
   text-decoration: none;
}
h2{
    font-size:30px;
    font-weight: 600;
}
.link:hover{
   border-bottom :2px solid blue;
}
h2{
    cursor: pointer;
}

`
