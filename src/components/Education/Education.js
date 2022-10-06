import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './education.css'

const Education = (props) => {
    const [state, setState] = useState([{
        id: nanoid(),
        edit: true,
        school: '',
        degree: '',
        major: '',
        period: '',
    },]);

    const handleEdit = (e) => {
        setState(state.map((item) => {
            if (item.id === e.target.parentElement.id) {
                // const {edit} = item;
                return ({
                    ...item, edit: true
                })
            } else {
                return item
            }
        }))
    }

    const handleDelete = (e) => {
        setState(state.filter((item) => {
            return item.id !== e.target.parentElement.id
        }))
    }

    const handleChange = (e) => {
        setState(state.map((item) => {
            if (item.id === e.target.parentElement.id) {
                const {name, value} = e.target;
                return ({
                    ...item, [name]: value
                })
            } else {
                return item
            }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(state.map((item) => {
            if (item.id === e.target.id) {
                return ({
                    ...item, edit: false
                })
            } else {
                return item
            }
        }))
    }

    const handleAdd = () => {
        setState([...state, {
            id: nanoid(),
            edit: true,
            school: '',
            degree: '',
            major: '',
            period: '',
        },])
    }

    const handleCancel = (e) => {
        setState(state.filter((item) => {
            return (item.id !== e.target.parentElement.id)
        }))
    }

    if (props.state.preview === true) {
        return (
            <div>
                <h2 className='borderBottom'>Education</h2>
                {state.map((item) => {
                    return (
                        <div key={item.id} id={item.id} className='grid column'>
                            <div>School: {item.school}</div>
                            <div>Degree: {item.degree}</div>
                            <div>Major: {item.major}</div>
                            <div>Period: {item.period}</div>
                        </div>
                    )
                })}
            </div>)
    }

    return (
        <div>
            <h2 className='borderBottom'>Education</h2>
            {state.map((item) => {
                if (item.edit === false) {
                    return (
                        <div key={item.id} id={item.id} className='grid column'>
                            <div>School: {item.school}</div>
                            <div>Degree: {item.degree}</div>
                            <div>Major: {item.major}</div>
                            <div>Period: {item.period}</div>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                } else {
                    return (
                        <form key={item.id} id={item.id} onSubmit={handleSubmit} className='grid column'>
                            <label htmlFor="school">School: </label>
                            <input name='school' placeholder='school' id='school' type="text" onChange={handleChange}
                                   value={item.school} required/>
                            <label htmlFor="degree">Degree: </label>
                            <input name='degree' placeholder='degree' id='degree' type="text" onChange={handleChange}
                                   value={item.degree} required/>
                            <label htmlFor="major">Major: </label>
                            <input name='major' placeholder='major' id='major' type="text" onChange={handleChange}
                                   value={item.major} required/>
                            <label htmlFor="period">Period: </label>
                            <input name='period' placeholder='period' id='period' type="text" onChange={handleChange}
                                   value={item.period} required/>
                            <button type='submit'>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </form>
                    )
                }
            })}
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Education;