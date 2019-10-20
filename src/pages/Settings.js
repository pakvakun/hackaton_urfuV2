import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../css/settings_form.css';
import MotivLogo from '../assets/icons/logo_motiv';
import Grid from '@material-ui/core/Grid';

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
        <MotivLogo/>
        <Grid classNan  item lg={2} md={4} onClick={() => {this.props.clickHandler('404')}}
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
        <Grid classNan item lg={2} md={4} onClick={() => {this.props.clickHandler('ChangePassword')}}
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
        <Grid item lg={2} md={4} onClick={() => {this.props.clickHandler('404')}}
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