import React from 'react';
import {Context} from '../context/Store';

class LanguageSelector extends React.Component{
  static contextType = Context;
  render(){
    return(
      <div className="row-S-S language">
        <p className="language-text">Select a language:</p> 
        <i className="flag us language-eng" onClick={()=>{
          this.context.onLanguageChange('english');
          this.context.onColorChange('green')
        }} />
        <i className="flag ng language-ng" onClick={()=>{
          this.context.onLanguageChange('yoruba');
          this.context.onColorChange('red')
        }} />
      </div>
    )
  }
}

export default LanguageSelector;