import React from 'react';
import './css/App.css';
// import Axios from 'axios';
import Main from './pages/Main'
import Settings from './pages/Settings'
import AuthForm from './pages/AuthForm'
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'settings',
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
  let content;
  switch(this.state.page) {
    case 'main':
      content =  <Main/>;  
      break;
    case 'settings':
      content =  <Settings clickHandler={this.onClickButton}/>;
      break;
    case 'authForm':
      content =  <AuthForm/>;
      break;
    default: content = <AuthForm />;
      break;
  }
  return (
    <div className='SPA__Motiv'>
      {content}
    </div>
)}
}
  