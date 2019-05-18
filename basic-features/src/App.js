import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


/*1.2
here we see one of two ways of defining react component, we create js class with class keyword and then we 
inherit from Component class which is from react library, above React import is important for rendering
anything to dom, the class has a render method which get called by react to render something to screen,
there is one important job every react component has to do it has to return or render somthing, we 
can do there things too i.e calculations, reach out to internet etc., at end we export this class 
as default export of this file, this is es6 feature which simply means if u import this whole file, u'll
simply import this class because it's default export. the code looking like html is actually jsx.
the jsx code at end is compiled to what is written in React.createElement block, 
create elememt is a method that takes 3 arguments, 1st one elememt we want to ernder to dom, 2nd arg is config for this, 3rd is amount of 
children nested inside the element of 1st arg if we write  return React.createElement('div', null, 'h1', 'From inside React.createElement');
then h1 will be interpreted as text and not as element and solution is to call another reactcreateelement instead of h1,
also in above method we have not used any css class, for this in 2nd arg write, {className:'App'}
at end we can say
(1)return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'From inside React.createElement'));
is equivalent of
(2)    return(
      <div className="App">
        <h1>
          Hi there, this is React App
        </h1>
      </div>
    );
at end (2) code will be compiled to (1) and that's why we're importing React though not using it
since jsx is js so we can't use some reserve words like class so for class use className instead
below return only one root element should be there, if we write e.g <h1></h1> outside root div then it will not be render, however with
react 16 we can configure this behaviour
*/

/*1.3
u should use first letter in uppercase for ur component as small characters are reserved for html like
looking jsx e.g if u create ur own component name it Div instead of div, if u r not passing 
anything u can use component in self closing tag <Person/>, we can also pass arguments(info) like 
we do in jsx using className, we can also embed some text in between <Div>hi</Div>, now to use this info
go check 1.4
*/

/*1.5
sometimes u don't want to get information from outside the component but to have it from inside component
and change it from inside too. e.g if we want to add btn in app.js which switches names on click,
before that use names in non hardcoded way, there's a special property that we can define
in class extending component "states", props are set and pass from outside whereas state is managed
from inside a component. we should use state with care only where we want to maintain component internal 
data. we initialize state by assigning it value which is js object in this case, this object will contain
properties like name, age. now we can refer it in jsx using this keyword which refer to class.
if state changes it will lead react to re render or update our dom.
*/

/*1.6
now to handle click event use onClick on a function. the name of method should end with Handler like 
switchNameHandler as it's good practice. don't include () as it will execute the method and we only
want to pass refernce. another important thing is is u don't use arrow function u'll run into problem
on using this keyword, because this will not then refer to this class.
*/

/*1.7
to change state use special method given by react "setState" this is made available as we extend Component, this method allow us to update this
special state property and ensure that react get to know about this update so update dom. setState take object as argument and it'll
merge whatever we define here with our existing state, leaving other properties of state untouched. now what react will do, it will check
which part we're overriding and merge and lead react to update dom. there are two things that can lead react to update dom, changing
state and using props. react update dom only where it needs to update.
instead of hardcoding we can also receive name as newName arg in handler. for this u have to pass name as
onClick = {this.switchNameHandler.bind(this, 'new name')}
here this control what this inside controls refer to, this now is list of elements actually which will be passed to our handler function
there is another method of passing arg using arrow function returning function call however this is not recommended as re reder occur
more often
*/

class App extends Component {
  
  state = {
    persons : [
      {name: 'Stephanie', age: 20},
      {name: 'Ammar', age: 23},
      {name: 'Jennifer', age: 22}
    ]
  }
  
  switchNameHandler = (newName)=>{

    //DON'T DO THIS => this.state.persons[0].name = 'Akbar'; 
    this.setState({
      persons : [
        {name: 'Stephanie', age: 23},
        {name: newName, age: 43},
        {name: 'Jennifer', age: 21}
      ]
    });
  }

  nameChangeHandler = (event)=>{
    this.setState({
      persons : [
        {name: 'Stephanie', age: 23},
        {name: 'Jennifer', age: 21},
        {name: event.target.value, age: 43}
      ]
    });
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
      <div className="App">
        <h1>
          Hi there, this is React App
        </h1>
        <button style={style} onClick = {() => this.switchNameHandler('Wasim')}>Switch Names</button>
        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
         />
        
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Waqar')}
        >My Hobbies: BasketBall
        </Person>
        
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />

      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'From inside React.createElement'));

  }
}

export default App;
