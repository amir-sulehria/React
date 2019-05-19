import React from 'react';
import './Person.css';
import Radium from 'radium';

/*1.2
we already have seen a way of creating component now lets have a look at another method of 
creating component that is used more often, a javascript ffunction, a component is just a function
that return some jsx, function name should be same as file name in lowercase,
here we also have to import React as it renders, now use it by importing,
to use js in jsx use {}, u can use js normally outside return usually before return

*/

/*1.4
react is able to take pass attributes and give us access at receiving component on object named props(name
is up to u) u will receive one arg provided by react which is object containig properties of component
and properties means attributes u added. now we can access them as props.name but in class based component
use this.props instead, now to access what iss pass b/w closing and opening tag, for this there is a
special prop which react give us access to i.e children property
*/

/*1.8
we cannot use state here in functional component, we should use this form of component as often(more) as possible because they are simple and 
don't change ur application state, because most parts of ur application should'nt change their state, they should just render something to 
the dom, ur application state should only be changed in some selected components referred as containers.e.g.app.js.
u can also listen to events here but execute some method in class component so pattern of changing name in App.js but listening to events
in person.js for example let say we want to call method in class component on clicking person component. how do we call method?well u can pass
refernce to the method as property to component, name is upto u.
*/ 

/*1.9
now lets say we want to take input instead of hardcoding, so we use input text as name, use onChange on method which is define in app.js where
we still want to change state, now for styling go to 2.0
*/

/*2.6
we can also use media queries through radium, on using, it we'll get error of that we should wrap it, for 
this name import styleroot and wrap our whole application with that only wrap in root component 
i.e.App.js
nowgo to 2.7 where we'll enable css modules 
*/
const person = (props)=>{

    const styles = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={styles}>
            <p onClick={props.click}>hi my name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
    
};

export default Radium(person)