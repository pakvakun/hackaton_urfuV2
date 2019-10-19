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
        type = {this.props.type ? this.props.type : ''}
        id="outlined-name"
        label={this.props.label}
        className={this.props.class}
        value={this.props.val}
        onChange={(event) => this.props.handleChange(this.props.name,event.currentTarget.value)}
        name = {this.props.name}
        margin="normal"
        variant="outlined"
    />
    
)}
}
  

