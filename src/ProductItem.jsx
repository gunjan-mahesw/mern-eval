import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import axios from "axios"

export default function Product() {
  const { id } = useParams();
  console.log(id, 'id')
  const [data, setData]= useState({});
  const[description, setDescription]= useState('');

  useEffect(() => {
    axios({
      url: `https://localhost:5000/api/products/${id}`,
      method: "GET"
    }).then((res)=> {
      setData(res.data.data)
    })
  }, [])
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  )
}
