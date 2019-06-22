import React from 'react';
import classNames from './Cockpit.module.css';

//error is bcz we added multiple components without root node

const cockpit = (props) => {

    let classes = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classNames.Red;
    }
    // let classes = ['red', 'bold'].join(' ');
    if (props.persons.length <= 2) {
        classes.push(classNames.red);
        console.log(classes);
    }
    if (props.persons.length <= 1) {
        classes.push(classNames.bold);
        console.log(classNames);
    }


    return (
        <div className={classNames.Cockpit}>
            <h1>{props.showTitle}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;