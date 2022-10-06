import React, {useState} from 'react';
import {nanoid} from "nanoid";

const Other = (props) => {
    const [state,setState] = useState([{id: nanoid(), edit: true, content: ''}]);

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

    const handleChange = (e) => {
        setState(state.map((item) => {
            if (item.id === e.target.parentElement.id) {
                const {name,value} = e.target;
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

    const handleDelete = (e) => {
        setState(state.filter((item) => {
            return item.id !== e.target.parentElement.id
        }))
    }

    const handleAdd = () =>{
        setState([...state, {id: nanoid(), edit: true, content: ''}])
    }

    if (props.state.preview === true) {
        return (
            <div>
                <h2 className='borderBottom'>Other</h2>
                {state.map((item)=>{
                    return (
                        <div key={item.id} id={item.id}>
                            <div>{item.content}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <h2 className='borderBottom'>Other</h2>
            {state.map((item)=>{
                if (item.edit === true){
                    return (
                        <div key={item.id}>
                            <form id={item.id} onSubmit={handleSubmit}>
                                <label htmlFor="other">Other</label>
                                <input name='content' type="text" value={item.content} onChange={handleChange} required/>
                                <button type='submit'>Save</button>
                                <button onClick={handleDelete}>Cancel</button>
                            </form>
                        </div>
                    )
                }else{
                    return (
                        <div key={item.id} id={item.id}>
                            <div>{item.content}</div>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                }
            })}
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Other;