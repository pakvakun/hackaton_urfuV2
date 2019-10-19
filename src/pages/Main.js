import React from 'react';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/button';
import CustomTextField from '../components/textField';
import '../css/auth-form.css';

export default class Main extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      regField: '',
      login: '',
      password: '',

    }
  }
  handleChange = (name,value) => { }
  onClickButton = () => {}

  componentDidMount(){}
render(){
  return (
      <Paper 
        className='registration_form'
        elevation={5}
        square={false}
      >
        <h2>Главная</h2>
      </Paper>
)}
}