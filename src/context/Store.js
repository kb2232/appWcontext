import React from 'react';
export const Context =  React.createContext('english');

export class ContextStore extends React.Component{
  state={
    language:'english',
    color:'green'
  }

  onLanguageChange=(language)=>{
    this.setState({language})
  }
  onColorChange=color=>{
    this.setState({color})
  }
  render(){
    return(
      <Context.Provider value={ {...this.state, onLanguageChange:this.onLanguageChange,
        onColorChange:this.onColorChange}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}