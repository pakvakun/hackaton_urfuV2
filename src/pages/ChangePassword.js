import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/settings_form.css';
import axios from '../modules/api';

export default class ChangePassword extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      regField: '',
      password: '',
      n_password: '',
      n_password2: '',

    }
  }
  handleChange = (name,value) => {
    this.setState({[name]:value})
  }
  onClickButton = () => { 
    let data = {
      login: this.props.login,
      password: this.state.password,
      npassword: this.state.npassword,
  };
  axios.put('/api/auth/', data )
    .then(res => {
      if (res.data.type == 'success'){
        this.props.clickHandler('main')
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
      square={false}>
        <CustomTextField
        label='Старый пароль' 
        class='registration_form__field' 
        val={this.state.password} 
        handleChange={this.handleChange} 
        name={'password'}
        type = {'password'}
        />
        <CustomTextField
         label='Новый пароль' 
         class='registration_form__field' 
         val={this.state.npassword} 
         handleChange={this.handleChange} 
         name={'npassword'}
         type = {'password'}
         />
         <CustomTextField
         label='Новый пароль еще раз' 
         class='registration_form__field' 
         val={this.state.n_password2} 
         handleChange={this.handleChange} 
         name={'n_password2'}
         type = {'password'}
         />
         <CustomButton buttonVal='Сменить пароль' onClickBtn={this.onClickButton}/>
      </Paper>
  )}
  }
