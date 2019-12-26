import React from 'react';
import UserCreate from './UserCreate';
import {ContextStore} from '../context/Store';
import LanguageSelector from './LanguageSelector'

class App extends React.Component{


  onLanguageChange=(language)=>{
    this.setState({language})
  }
  render(){
    return(
      <div className="flex-container">
          <ContextStore>
            <LanguageSelector />
            <UserCreate />
          </ContextStore>
      </div>
    )
  }
}

export default App;