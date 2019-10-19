import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
        <Tab icon={<PhoneIcon />} label="RECENTS" value={'main'}/>
        <Tab icon={<FavoriteIcon />} label="FAVORITES" value={'settings'}/>
        <Tab icon={<PersonPinIcon />} label="NEARBY" value={'authForm'}/>
      </Tabs>
    </Paper>
)}
}
  