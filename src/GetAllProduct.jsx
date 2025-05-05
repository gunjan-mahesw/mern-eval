import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const GetAllProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td><button onClick={() => navigate(`/product/${product._id}`)}>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default GetAllProduct;