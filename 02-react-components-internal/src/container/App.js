import React, { Component } from 'react';
import classNames from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

/*1.1
 * create constructor with props as argument, call super(props) otherwise this prop won't suceed
if u r using u can initialize state inside it(optional)
*/

  constructor(props){
    super(props); 
    console.log('App.js from constructor()', props);
    this.state = {
      persons: [
        { id: "p-001", name: 'Stephanie', age: 20 },
        { id: "p-002", name: 'Ammar', age: 23 },
        { id: "p-003", name: 'Jennifer', age: 22 }
      ],
      personToggle: false
    }
  }

  componentWillMount(){
    console.log('App.js from componentWillMount()');
  }

  componentDidMount(){
    console.log('App.js from componentDidMount()');

  }

  // state = {
  //   persons: [
  //     { id: "p-001", name: 'Stephanie', age: 20 },
  //     { id: "p-002", name: 'Ammar', age: 23 },
  //     { id: "p-003", name: 'Jennifer', age: 22 }
  //   ],
  //   personToggle: false
  // }

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
    console.log('App.js from render()');
    let person = null;
    if (this.state.personToggle) {
      // style.backgroundColor = 'red';
      
      person = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deleteNameHandler}
            changed = {this.nameChangeHandler}
          />
      );
    }


    return (

      <div className={classNames.App}>
        <Cockpit
        //we can access props in class component using this keyword
          showTitle = {this.props.title}
          showPerson = {this.state.personToggle}
          persons = {this.state.persons}
          clicked = {this.tooglePersonHandler}
        />
        {person}
      </div>
    );
  }
}

export default App;
