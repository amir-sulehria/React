import React, {Component} from 'react';
import './App.css';


/*1.2
here we see one of two ways of defining react component, we create js class with class keyword and then we 
inherit from Component class which is from react library, above React import is important for rendering
anything to dom, the class has a render method which get called by react to render something to screen,
there is one important job every react component has to do it has to return or render somthing, we 
can do there things too i.e calculations, reach out to internet etc., at end we export this class 
as default export of this file, this is es6 feature which simply means if u import this whole file, u'll
simply import this class because it's default export. the code looking like html is actually jsx
*/
class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>
          Hi there, this is react app
        </h1>
      </div>
    );
  }
}

export default App;
