import React from 'react';
import '../css/Main.css';
import axios from '../modules/api';

export default class FourOFour extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      regField: '',
      login: '',
      password: '',
      remaining_balance: '256',
      fare: 'Тариф 2',
      features: [],
    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
      .then(res => {
        console.log(res)
      })
      let counter = this.state.counter;
      let featuresArr = this.state.features;
      while (counter <= 10) {
        featuresArr.push({name: `feature ${counter}`, link: '404'})
        counter ++
      }
      this.setState({features: featuresArr})
  }
  onClickButton = () => {}
render(){
  return (
    <div style={{fontSize: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        Пока не готово
    </div>
)}
}