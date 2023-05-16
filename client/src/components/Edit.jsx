import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            let product = res.data.results[0]
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch((err) => console.log(err))
    }, [id])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
        .then((res) => {
            navigate(`/products/${id}`)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Edit {title}</h1>
            <form className='mx-auto' style={{width: '50%'}} onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Price</label>
                    <input type="number" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Description</label>
                    <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className='btn btn-outline-success' type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit