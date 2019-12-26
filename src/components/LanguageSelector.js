import React from 'react';
import UserCreate from './UserCreate';

class LanguageSelector extends React.Component{

  render(){
    return(
      <div className="row-S-S language">
      <p className="language-text">Select a language:</p> 
      <i className="flag us language-eng" onClick={()=>this.props.onLanguageChange('english')} />
      <i className="flag ng language-ng" onClick={()=>this.props.onLanguageChange('yoruba')} />
    </div>
    )
  }
}

export default LanguageSelector;