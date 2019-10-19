import React from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',

    }
  }
  handleChange = () => {
    alert('asas')
  }
render(){
  return (
    <div className='SPA__Motiv'>
      <form className='registration_form' noValidate autoComplete="off">
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
      </form>
    </div>
)}
}
  