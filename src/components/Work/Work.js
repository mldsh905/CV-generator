import React, {useState} from 'react';
import {nanoid} from "nanoid";
import WorkItem from "./WorkItem";

const Work = (props) => {
    const [state, setState] = useState([{id: nanoid()}]);

    const setState0 = (e) => {
        setState(state.filter((item)=>{
            return (item.id !== e.target.parentElement.id)
        }))
    }

    const handleAdd = ()=> {
        setState([...state,{id: nanoid()}])
    }

    const addBtn = () => {
        if (props.state.preview === false) {
            return <button onClick={handleAdd}>Add</button>
        }
    }

    return (
        <div>
            <h2 className='borderBottom'>Work</h2>
            {state.map((item) => {
                return <WorkItem key={item.id} setState0={setState0} props={props} id={item.id}/>
            })}
            {addBtn()}
        </div>
    );
};

export default Work;