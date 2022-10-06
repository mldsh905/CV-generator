import Person from "./components/Person/Person";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Other from "./components/Other/Other";
import {useState} from "react";
import './App.css'

function App() {

    const [state,setState] = useState({preview: false});

    const handlePreview = () => {
        setState({preview: !state.preview})
    }

    return (
        <div className='container'>
            <button className='preview' onClick={handlePreview}>Preview/Edit</button>
            <h1 className='h1'>CV</h1>
            <Person state={state}/>
            <Education state={state}/>
            <Work state={state}/>
            <Other state={state}/>
        </div>
    )
}

export default App;
