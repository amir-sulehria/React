import React from 'react';

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


const person = (props)=>{
    return (
        <div>
            <p>hi my name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
    
};

export default person