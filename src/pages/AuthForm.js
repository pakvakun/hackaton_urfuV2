import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/auth-form.css';
import axios from '../modules/api';

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
  }
  onClickButton = () => {
    let data = {
      login: this.state.login,
      password: this.state.password
    };
    this.props.loginUser(this.state.login)
    axios.post('/api/auth/', data )
      .then(res => {
        if (res.data.type == 'success'){
          this.props.handleChange(true)
        }
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
  