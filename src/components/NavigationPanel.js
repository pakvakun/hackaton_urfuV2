import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import '../css/NavigationPanel.css';

export default class NavigationPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
render(){
  
  return (
    <Paper square className='navigation'>
      <Tabs
        value={this.props.menuValue || 'main'}
        onChange={(event, value) => this.props.handleClickMenuBar(event, value)}
        variant="fullWidth"
        aria-label="icon label tabs example"
        // style={{backgroundColor: '#000'}}
        action={(data) => this.data = data }
      >
        <Tab icon={<PhoneIcon />} label="Главная" value={'main'}/>
        <Tab icon={<SettingsIcon />} label="Настройки" value={'settings'}/>
        {/* <Tab icon={<PersonPinIcon />} label="Войти" value={'authForm'}/> */}
        {/* <Tab icon={<PersonPinIcon />} label="Изменить пароль" value={'ChangePassword'}/> */}
      </Tabs>
    </Paper>
)}
}
  