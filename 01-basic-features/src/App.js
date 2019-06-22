import React, { Component } from 'react';
import classNames from './App.module.css'
import Person from './Person/Person';
//import Radium, { StyleRoot } from 'radium';


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

/*2.1
we can use conditions to show content conditionally, in example below we can show/hide persons, lets do this by wrapping content that we want 
to toggle inside div, also declare a property inside state on whose basis we'll toggle, as we know jsx is actually js so we can use js inside
jsx using {} and then ternary operator, since ternary expression is not good choice there is another solution, undo everything done for ternary
expression, since everything is js and we r return some jsx at end, there is one important thing to keep in mind, when react re renders,
or decide to update the screen it execute render method and everything in block. so we'll take advantage of this behaviour an declare a 
variable where we'll decide should we store jsx in it or not.
*/

/*2.2
in angular we use ngFor but here as we know everything is js so we'll handle list with js, let's apply list on person below, now to convert to
array of js which is not valid jsx use map function which map on every single element of array, so we need to return something that
can be represted using jsx so use return <Person/>. now we can apply click handler e.g. deleteNameHandler used below, but that approach has
flaw in it, the flaw is that object and arrays are refernce type in js so if u write const persons = this.state.persons; then u r actually 
getting refernce to original array managed by react using state, good practice is to instead create a copy and then mutate it, for this use 
slice or spread operator
*/

/*2.3
now lets take care of error we're getting since using list i.e. key prop. key prop s an important property that we should add when 
rendering some data, it's a default property react expect to find no matter on custom or non-custom components which u render through a list.
this key property help react update list efficiently, the current approach of using indexes works, but behind scenes react has to find out
what it actually need to adjust in overall dom by comparing with virtual dom what we'll render now to previous render. it will re render whole 
list that's very in-efficient. key property allow react to keep track of elements, it can then used to compare b/w different elements to find
out which element change and which did'nt, so it re render only changed element not the whole list. key should be unique below is
what we're doing before using key as refernce
        {this.state.persons.map((person, index) => {
          return <Person
           name = {person.name}
           age = {person.age}
           click = {this.deleteNameHandler.bind(this, index)}
           />
        })}
now give person property of id(unique) that'll be used as key
since now we've id we can change name to only specific element in name change handler, use findindex to get element to alter
*/

/*2.5
to use radium first import it, after importing go down and wrap export app with radium, as higher order 
component, simply a component wrapping ur compnent, injecting some extra functionality, lets now start 
using styling button with hover, for this simply write ':hover' which will take js object, u can also 
change it dynamically, see below, problem i encouter, it was giving error related to key so i
comment out switch name handler btn as inside its method we're not using key.
*/

class App extends Component {

  state = {
    persons: [
      { id: "p-001", name: 'Stephanie', age: 20 },
      { id: "p-002", name: 'Ammar', age: 23 },
      { id: "p-003", name: 'Jennifer', age: 22 }
    ],
    personToggle: false
  }

  switchNameHandler = (newName) => {

    //DON'T DO THIS => this.state.persons[0].name = 'Akbar'; 
    this.setState({
      persons: [
        { name: 'Stephanie', age: 23 },
        { name: newName, age: 43 },
        { name: 'Jennifer', age: 21 }
      ]
    });
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.personToggle;
    this.setState({ personToggle: !doesShow });
  }

  deleteNameHandler = (index) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };

    let person = null;
    let btnClass = '';
    if (this.state.personToggle) {
      // style.backgroundColor = 'red';
      btnClass = classNames.Red;
      person = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deleteNameHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}

          {/* <Person
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
          /> */}
        </div>
      );
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(classNames.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(classNames.bold);
    }

    return (

      <div className={classNames.App}>
        <h1>
          Hi there, this is React App
        </h1>
        <p className={classes.join(' ')}>This is really working</p>
        {/* <button style={style} onClick={() => this.switchNameHandler('Wasim')}>Switch Names</button> */}
        <button className={btnClass} onClick={this.tooglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'From inside React.createElement'));

  }
}

export default App;
