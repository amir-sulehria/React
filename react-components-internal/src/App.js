import React, { Component } from 'react';
import classNames from './App.module.css'
import Person from './Person/Person';

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
        <button className={btnClass} onClick={this.tooglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;
