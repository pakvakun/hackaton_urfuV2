import React from 'react';
import './css/App.css';
// import Axios from 'axios';
import Main from './pages/Main';
import Settings from './pages/Settings';
import AuthForm from './pages/AuthForm';
import ChangePassword from './pages/ChangePassword';
import NavigationPanel from './components/NavigationPanel'
export default class App extends React.Component{
  constructor(props){
    console.log(props)
    super(props);
    this.state = {
      page: 'main',
      regField: '',
      isAuth: false
    }
  }
  handleChange = (new_isAuth) => {
    this.setState({
      isAuth: new_isAuth
    })
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
      content =  <AuthForm />;  
      break;
    case 'settings':
      content =  <Settings clickHandler={this.onClickButton}/>;
      break;
    // case 'authForm':
    //   content =  <AuthForm  handleChange = {this.handleChange}/>;
    //   break;
    case 'ChangePassword':
      content =  <ChangePassword/>;
      break;
    // default: content = <AuthForm handleChange = {this.handleChange}/>;
    //   break;
  }
  return (
    <div className='SPA__Motiv' style={{paddingTop: this.state.isAuth ? '80px' : 0}}>
      {
        this.state.isAuth
        // true
        ?   <>
              <NavigationPanel handleClickMenuBar={this.handleClickMenuBar} menuValue={this.state.page}/>
              {content}
            </>
        :   <AuthForm handleChange = {this.handleChange}/>
      }
    </div>
    
)}
}
  