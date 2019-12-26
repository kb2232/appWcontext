import React from 'react';
import {Context} from '../context/Store';

class Button extends React.Component{
  static contextType = Context;
  render(){
    return (
      <button className={`ui button ${this.context.color}`}>
        {`${this.context.language}`==="english"?'Submit':'Ole´'}
      </button>
    )
  }
}

export default Button;