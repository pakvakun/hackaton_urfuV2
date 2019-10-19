import React from 'react';
import './css/App.css';
import Axios from 'axios';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'authForm',
      regField: '',
    }
  }
  handleChange = () => {
    alert('asas')
  }
  onClickButton = (name) => {
    this.setState({
      page: name
    })
  }
render(){
  let content = switch(this.state.page) {
    case 'main':
      return <Main />;  
    case 'settings':
      return <Settings/>;
    case 'authForm':
      return <AuthForm/>;
  }
  return (
    <div className='SPA__Motiv'>
      
    </div>
)}
}
  