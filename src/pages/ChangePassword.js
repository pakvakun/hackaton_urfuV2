import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/settings_form.css';
// import Axios from 'axios';

export default class ChangePassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',

    }
  }
  handleChange = () => {
    return false
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
      square={false}>
        <CustomTextField
        label='Старый пароль' 
        class='registration_form__field' 
        val={this.state.regField} 
        handleChange={this.handleChange} 
        />
        <CustomTextField
         label='Новый пароль' 
         class='registration_form__field' 
         val={this.state.regField} 
         handleChange={this.handleChange} 
         />
         <CustomTextField
         label='Новый пароль еще раз' 
         class='registration_form__field' 
         val={this.state.regField} 
         handleChange={this.handleChange} 
         />
         <CustomButton buttonVal='Сменить пароль' onClickBtn={this.onClickButton}/>
      </Paper>
  )}
  }
