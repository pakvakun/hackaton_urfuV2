import React from 'react';
import Button from '@material-ui/core/Button';

// import './button.css';

export default class App extends React.Component{
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
  