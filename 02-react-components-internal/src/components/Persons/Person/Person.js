import React, { Component } from 'react';
import className from './Person.module.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Person.js from constructor()', props);
    }

    componentWillMount() {
        console.log('Person.js from componentWillMount()');
    }

    componentDidMount() {
        console.log('Person.js from componentDidMount()');

    }


    render() {
        console.log('Person.js from render()');
        return (
            <div className={className.Person}>
                <p onClick={this.props.click}>hi my name is {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>
        )
    }

}

export default Person