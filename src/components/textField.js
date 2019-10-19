import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../css/textField.css';

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
    <TextField
        id="outlined-name"
        label={this.props.label}
        className={this.props.class}
        value={this.props.val}
        onChange={(value) => this.props.handleChange(value)}
        margin="normal"
        variant="outlined"
    />
    
)}
}
  

