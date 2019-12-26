import React from 'react';
import LanguaueContext from '../context/LanguageContext'

class Field extends React.Component{

  static contextType = LanguaueContext;//connect context object to class component;
  // it adds properties to our class;

  render(){
    const text = this.context ==='english'? 'Name' : 'Orukuå'; 
    return(
      <div className="ui field">
          <label>{text}</label>
          <input type="text" />
      </div>
    )
  }
}
 //Another of connecting to the class is :
 //Field.contextType = LanguaueContext;
export default Field;