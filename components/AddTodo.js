import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

function AddTodo(props) {

    const [value,setValue] = useState({
        name:"",
        done:false,
    });

    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setValue({
            [name]:value,
            done:false,
        })
    }

    const submit = () =>{
        props.addTodo(value);
        setValue({
            name:"",
            done:false,
        })
    }

    return (
        <div>
            <input type="text" onChange={handleChange} name={"name"} value={value.name}/>
            <button onClick={submit}>Add</button>
        </div>
    );
}

export default connect(null,{addTodo})(AddTodo);