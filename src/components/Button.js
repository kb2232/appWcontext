import React from 'react';
import LanguaueContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'
class Button extends React.Component{

  render(){
    return (
      <ColorContext.Consumer>
      {
        (color)=>
          <button className={`ui button ${color}`}>
          <LanguaueContext.Consumer>
            {(value)=>value==='english'?'Submit':'Ole´'}
          </LanguaueContext.Consumer>
          </button>
      }
      </ColorContext.Consumer>
    )
  }
}

export default Button;