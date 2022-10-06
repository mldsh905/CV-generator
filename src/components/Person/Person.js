import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './person.css'

const Person = (props) => {
    const [state, setState] = useState({
        id: nanoid(),
        edit: true,
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleEdit = () => {
        setState({...state, edit: true})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({...state, edit: false})
    }

    const handleChange = (e) => {
        const {name} = e.target;
        setState({...state, [name]: e.target.value})
    }

    if (props.state.preview === true) {
        return (
            <div>
                <h2 className='borderBottom'>Person</h2>
                <div className='grid column'>
                    <div>Name: {state.name}</div>
                    <div>Email: {state.email}</div>
                    <div>Phone: {state.phone}</div>
                    <div>Address: {state.address}</div>
                </div>
            </div>
        )
    }

    if (state.edit === false) {
        return (
            <div>
                <h2 className='borderBottom'>Person</h2>
                <div className='grid column'>
                    <div>Name: {state.name}</div>
                    <div>Email: {state.email}</div>
                    <div>Phone: {state.phone}</div>
                    <div>Address: {state.address}</div>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className='borderBottom'>Person</h2>
                <form onSubmit={handleSubmit} className='grid column'>
                    <label htmlFor="name">Name</label>
                    <input name='name' id='name' type="text" value={state.name} onChange={handleChange} placeholder='name' required/>
                    <label htmlFor="email">Email</label>
                    <input name='email' id='email' type="email" value={state.email} onChange={handleChange} placeholder='email' required/>
                    <label htmlFor="phone">Phone</label>
                    <input name='phone' id='phone' type="number" value={state.phone} onChange={handleChange} placeholder='phone' required/>
                    <label id='address' htmlFor="address">Address</label>
                    <input name='address' id='address' type="text" value={state.address} onChange={handleChange} placeholder='address' required/>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
};

export default Person;