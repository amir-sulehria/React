import React from 'react';
import className from './Person.module.css';

const person = (props)=>{

    return (
        <div className={className.Person}>
            <p onClick={props.click}>hi my name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
    
};

export default person