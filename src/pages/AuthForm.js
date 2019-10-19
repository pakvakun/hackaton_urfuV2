import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/auth-form.css';
// import Axios from 'axios';

export default class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',

    }
  }
  handleChange = () => {
    alert('asas')
  }
  onClickButton = () => {
    
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
              val={this.state.regField} 
              handleChange={this.handleChange} 
          />
          <CustomTextField 
              label='Пароль' 
              class='registration_form__field' 
              val={this.state.regField} 
              handleChange={this.handleChange} 
          />
          <div className='btn-group'>
            <CustomButton className='button' buttonVal='Войти' onClickBtn={this.onClickButton}/>
            <CustomButton className='button' buttonVal='Получить Пароль' onClickBtn={this.onClickButton}/>
          </div>
        </form>
      </Paper>
)}
}
  