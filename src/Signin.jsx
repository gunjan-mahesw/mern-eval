import React,{useState} from 'react';
import axios from '../api/axios';
import {useNavigate} from 'react-router-dom';
import './Signin.css';
const SignIn=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post('/users/signin',{
                email,
                password
            });
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('userInfo',JSON.stringify(res.data));
            navigate('/CreateProduct');
        }catch(err){
            alert('Invalid credentials');
        }
    }
    return(
        <div className="signin-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
export default SignIn;