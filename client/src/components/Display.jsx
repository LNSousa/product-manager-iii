import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Display = () => {

    const [product, setProduct] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res) => {setProduct(res.data.results[0])})
    .catch((err) => console.log(err))

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((res) => {
            console.log(`${product.title} has been deleted!`)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='my-5'>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>{product.description}</h3>
            <button className='btn btn-outline-success'><Link to={'/'} style={{ textDecoration: 'none' }}>Products</Link></button>
            <button className='btn btn-outline-warning mx-3'><Link to={`/products/${id}/edit`} style={{ textDecoration: 'none' }}>Edit</Link></button>
            <button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Display;