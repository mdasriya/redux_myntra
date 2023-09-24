import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { UserLogin } from '../redux/authReducer/action'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()
const navigate = useNavigate()

console.log(location);
    const {auth} = useSelector(store=> store.authReducer)
    const handleLogin = (e) => {
        e.preventDefault()
        let userData = {email, password}
        dispatch(UserLogin(userData)).then(()=> {
          navigate(location.state, {replace:true})
        })
        setEmail("")
        setPassword('')
         
    }

  return (
    <DIV auth={auth}>
        <form>
      <h2>User Login</h2>
  <h3>{auth ? "Login Success!!!":"Login to Continue"}</h3>
<input type="email" value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
<button type='submit' onClick={handleLogin}>Login</button>
        </form>

    </DIV>
  )
}

const DIV = styled.div`
margin-top: 10px;
form{
    width: 20%;
    border: 1px solid gray;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;
}
input{
    width: 90%;
    height: 30px;
}
h3{
  ${({auth} )=> (auth? `color:green`:`color:red`)}
}
button{
  width :90%;
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
`;
