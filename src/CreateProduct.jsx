import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateProduct = () => {
    const [name,setName]=useState('');
    const [discount,setDiscount]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/products',{
                name,
                description,
                price,
                image,
                category
            });
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }   
    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Description</label>
                <input type="text" value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
                <label>Price</label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <label>Category</label>
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
} 
export default CreateProduct;