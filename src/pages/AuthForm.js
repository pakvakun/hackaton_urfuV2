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
  handleChangeInput = () => {
    alert('asas')
  }
  // onClickButton = (val) => {
  //   console.log(val)
  // }
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
              handleChange={this.handleChangeButton} 
          />
          <CustomTextField 
              label='Пароль' 
              class='registration_form__field' 
              val={this.state.regField} 
              handleChange={this.handleChangeButton} 
          />
          <div className='btn-group'>
            <CustomButton className='button' buttonVal='Войти' onClickBtn={this.props.onClickButton} targetPage='main'/>
            <CustomButton className='button' buttonVal='Получить Пароль' onClickBtn={this.props.onClickButton} targetPage='getPass'/>
          </div>
        </form>
      </Paper>
)}
}
  