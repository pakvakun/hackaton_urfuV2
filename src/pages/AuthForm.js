import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/auth-form.css';
import axios from 'axios';

export default class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',
      login: '',
      password: '',

    }
  }
  handleChange = (name,value) => {  
    this.setState({[name]:value})
    console.log(value)
  }
  onClickButton = () => {
    let data = {
      login: this.state.login,
      password: this.state.password
    };
    axios.post('http://172.20.10.2/api/auth/', data )
      .then(res => {
        console.log(res);
      })
  }

  componentDidMount(){
    
  }
render(){
  return (
      <Paper 
        className='registration_form'
        elevation={5}
        square={false}
      >
      <form  noValidate autoComplete="off">
        <CustomTextField 
            label='Телефон' 
            class='registration_form__field' 
            val={this.state.login} 
            handleChange={this.handleChange} 
            name = {'login'}
        />
        <CustomTextField 
            label='Пароль' 
            class='registration_form__field' 
            val={this.state.password} 
            handleChange={this.handleChange} 
            name={'password'}
            type = {'password'}
        />
        <CustomButton buttonVal='Войти' onClickBtn={this.onClickButton}/>
      </form>
      </Paper>
)}
}
  