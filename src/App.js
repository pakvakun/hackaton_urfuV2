import React from 'react';
import './css/App.css';
// import Axios from 'axios';
<<<<<<< HEAD
import Main from './pages/Main';
import Settings from './pages/Settings';
import AuthForm from './pages/AuthForm';
import NavigationPanel from './components/NavigationPanel'

=======
import Main from './pages/Main'
import Settings from './pages/Settings'
import ChangePassword from './pages/ChangePassword'
import AuthForm from './pages/AuthForm'
>>>>>>> fac32dd10b3f201b8fed4534c6e9f583a43a98fd
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'main',
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
  handleClickMenuBar = (event, value) => {
    this.setState({page: value})
    console.log(value);
    
  }
render(){
  let content;
  switch(this.state.page) {
    case 'main':
      content =  <AuthForm/>;  
      break;
    case 'settings':
      content =  <Settings clickHandler={this.onClickButton}/>;
      break;
    case 'authForm':
      content =  <AuthForm/>;
      break;
    case 'ChangePassword':
      content =  <ChangePassword/>;
      break;
    default: content = <AuthForm />;
      break;
  }
  return (
    <div className='SPA__Motiv'>
      <NavigationPanel handleClickMenuBar={this.handleClickMenuBar} menuValue={this.state.page}/>
      {content}
    </div>
)}
}
  