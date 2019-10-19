import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from './components/button';
import './App.css';

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
  