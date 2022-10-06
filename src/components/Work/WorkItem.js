import React, {useState} from 'react';
import './work.css'

const WorkItem = (props) => {
    const [state, setState] = useState({
        id: props.id,
        edit: true,
        company: '',
        position: '',
        period: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({...state, edit: false})
    }

    const handleChange = (e) => {
        const {name} = e.target;
        setState({...state, [name]: e.target.value})
    }

    const handleEdit = () => {
        setState({...state, edit: true})
    }

    if (props.props.state.preview === true) {
        return (
            <div id={state.id} className='grid column'>
                <div>Company: {state.company}</div>
                <div>Position: {state.position}</div>
                <div>Period: {state.period}</div>
                <div>Description: {state.description}</div>
            </div>
        )
    }

    if (state.edit === false) {
        return (
            <div id={state.id} className='grid column'>
                <div>Company: {state.company}</div>
                <div>Position: {state.position}</div>
                <div>Period: {state.period}</div>
                <div>Description: {state.description}</div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={props.setState0}>Delete</button>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit} className='grid column' id={state.id}>
                <label htmlFor="company">Company: </label>
                <input name='company' id='company' type="text" value={state.company} onChange={handleChange} placeholder='company' required/>
                <label htmlFor="position">Position: </label>
                <input name='position' id='position' type="text" value={state.position} onChange={handleChange} placeholder='position' required/>
                <label htmlFor="period">Period: </label>
                <input name='period' id='period' type="text" value={state.period} onChange={handleChange} placeholder='period' required/>
                <label id='description' htmlFor="description">Description: </label>
                <input name='description' id='description' type="text" value={state.description} onChange={handleChange} placeholder='description' required/>
                <button type='submit'>Save</button>
                <button onClick={props.setState0}>Cancel</button>
            </form>
        )
    }
};

export default WorkItem;