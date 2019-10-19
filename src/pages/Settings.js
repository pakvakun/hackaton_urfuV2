import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../css/settings_form.css';
import Grid from '@material-ui/core/Grid';
// import Axios from 'axios';
import  WOW from '../WOW'

new WOW().init();

export default class Settings extends React.Component{
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
      alignContent={'space-between'}>
        <Grid classNan  item xs={2} onClick={() => {this.props.clickHandler('authForm')}}
        className='settings_for_item fadeInRight wow' data-wow-duration="1s" data-wow-delay="0s" >
          <Paper 
            className='settings_for_item_paper'
            id={0}
            elevation={5}
            square={false}
            onMouseUp={(id)=>{console.log(id)}}
          >
          <div className="text">
            Личные данные
          </div>
          <div className="icon">
            <i class="fas fa-user-circle" ></i>
          </div>
          </Paper>
        </Grid>
        <Grid classNan item xs={2} onClick={() => {this.props.clickHandler('ChangePassword')}}
        className='settings_for_item fadeInRight wow'data-wow-duration="1s" data-wow-delay="0.25s">
          <Paper 
            className='settings_for_item_paper'
            elevation={5}
            square={false}
          >
          <div className="text">
            Смена пароля
          </div>
          <div className="icon">
            <i class="fas fa-cog" ></i>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={2} onClick={() => {this.props.clickHandler('authForm')}}
        className='settings_for_item fadeInRight wow' data-wow-duration="1s" data-wow-delay="0.5s">
          <Paper 
            className='settings_for_item_paper'
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