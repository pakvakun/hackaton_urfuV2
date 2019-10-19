import React from 'react';
import Button from '@material-ui/core/Button';

import '../css/button.css';

export default class CustomButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',

    }
  }

render(){
  return (
    <Button variant="contained" className={'button'} onClick={this.props.onClickBtn}>
        {this.props.buttonVal}
    </Button>
)}
}
  