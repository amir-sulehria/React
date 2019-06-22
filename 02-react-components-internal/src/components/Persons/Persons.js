import React, {Component} from 'react';
import Person from './Person/Person';
//since we don't want to manage state so it will be functional component
//use shortcut and don't use return 

class Persons extends Component{


  constructor(props){
    super(props); 
    console.log('Persons.js from constructor()', props);
  }

  componentWillMount(){
    console.log('Persons.js from componentWillMount()');
  }

  componentDidMount(){
    console.log('Persons.js from componentDidMount()');

  }

  componentWillReceiveProps(nextProps){
    console.log('Persons.js from componentWillRecieveProps()');
    
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Persons.js from shouldComponentUpdate()', nextProps, nextState);
    //return false if u don't want to update, else true
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Persons.js from componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState){
    console.log('Persons.js from componentDidUpdate()');
  }


  render(){
    console.log('Persons.js from render()');
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={this.props.clicked.bind(this.props, index)}
        changed={(event) => this.props.changed(event, person.id)}
        />
      });
  }
}

export default Persons;