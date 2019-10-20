import React from 'react';
import './css/App.css';
// import Axios from 'axios';
import Main from './pages/Main';
import Settings from './pages/Settings';
import AuthForm from './pages/AuthForm';
import ChangePassword from './pages/ChangePassword';
import NavigationPanel from './components/NavigationPanel';
import Tarifes from './pages/tarifes';
import Balance from './pages/balance';
import FourOFour from './pages/404';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'main',
      regField: '',
      isAuth: false,
      login: '8805553535'
    }
  }
  loginUser = (login) =>{
    this.setState({
      login: login
    })
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
  authentificate = (value) => {
    // Axios({
    //   method: 'POST',
    //   url: 
    // })
    this.setState({page: value, isAuth: true})
  }
  handleClickMenuBar = (event, value) => {
    this.setState({page: value})
  }
render(){
  console.log(this.state);
  
  let content;
  switch(this.state.page) {
    case 'main':
      content = <Main login={this.state.login} handleClickItem={this.onClickButton}/>;  
      break; 
    case 'settings':
      content = <Settings clickHandler={this.onClickButton}/>;
      break;
    case 'ChangePassword':
      content = <ChangePassword login={this.state.login} clickHandler={this.onClickButton}/>;
      break;
    case 'tarifes':
      content = <Tarifes handleClickItem={this.onClickButton}/>;
      break;
    case 'balance':
      content = <Balance handleClickItem={this.onClickButton}/>;
      break;
    case '404':
      content = <FourOFour handleClickItem={this.onClickButton}/>;
      break;
  }
  return (
    // <div className='SPA__Motiv' style={{paddingTop: this.state.isAuth ? 80 : 0}}>
    <div className='SPA__Motiv' style={{paddingTop: !this.state.isAuth ? 80 : 0}}>
      {
        !this.state.isAuth
        ?   <>
              <NavigationPanel handleClickMenuBar={this.handleClickMenuBar} menuValue={this.state.page}/>
              {content}
            </>
        :   <AuthForm handleChange = {this.handleChange} loginUser={this.loginUser}/>
      }
    </div>
    
)}
}
  