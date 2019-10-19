import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../css/settings_form.css';
import Grid from '@material-ui/core/Grid';
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
    <div className = 'wrap'>
      <Grid container 
            alignContent={'space-between'}
      >
        <Grid item xs={2} onClick={() => {this.props.clickHandler('authForm')}}>
          <Paper 
            className='settings_for_item'
            elevation={5}
            square={false}
          >
          <div className="text">
            Личный данные
          </div>
          <div className="icon">
          <i className="fas fa-user-circle"></i>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={2} onClick={() => {this.props.clickHandler('authForm')}}>
          <Paper 
            className='settings_for_item'
            elevation={5}
            square={false}
          >
          <div className="text">
            Смена пароля
          </div>
          </Paper>
        </Grid>
        <Grid item xs={2} onClick={() => {this.props.clickHandler('authForm')}}>
          <Paper 
            className='settings_for_item'
            elevation={5}
            square={false}
          >
          <div className="text">
            Еще блок
          </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
)}
}