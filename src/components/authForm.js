import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from './components/button';
import './css/auth-form.css';
import Axios from 'axios';

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
        <TextField
          id="outlined-name"
          label="Телефон"
          className='registration_form__field'
          value={this.state.regField}
          onChange={(value) => this.handleChange(value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Пароль"
          className='registration_form__field'
          value={this.state.regField}
          onChange={(value) => this.handleChange(value)}
          margin="normal"
          variant="outlined"
        />
        <Button buttonVal='Войти' onClickBtn={this.onClickButton}/>
      </form>
      </Paper>
)}
}
  