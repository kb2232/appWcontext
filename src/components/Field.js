import React from 'react';
import {Context} from '../context/Store'

class Field extends React.Component{

  static contextType = Context;//connect context object to class component;
  // it adds properties to our class;

  render(){
    const text = this.context.language ==='english'? 'Name' : 'Orukuå'; 
    return(
      <div className="ui field">
          <label>{text}</label>
          <input type="text" />
      </div>
    )
  }
}
 //Another of connecting to the class is :
 //Field.contextType = ContextStore;
export default Field;