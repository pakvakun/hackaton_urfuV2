import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import CustomButton from '../components/button';
import axios from 'axios'

export default class Balance extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      regField: '',
      fare: 'Тариф 2',
      remaining_balance: '256',
    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
    .then(res => {
      console.log(res)
    })

    setInterval(() => {
        this.setState({ date : new Date()})
    }, 1000);
  }
render(){
    let date = this.state.date || new Date();
  return (
    <div className = 'wrap'>
       <Grid container 
            alignContent={'space-between'}
            >
          <Grid classNan  item xs={4}
            className='wrap_item'>
            <h2>Баланс</h2>
            <h2>{this.state.remaining_balance} рублей</h2>
            <label>данные актуальны на {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</label>
          </Grid>
          <Grid classNan  item xs={8}
            className='wrap_item fadeInLeft wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper fare'
              elevation={5}
              square={false}
            >
              <h2>Тариф 1</h2>
              <div className='descr'>Описание тарифа</div>
              <div className='button_wrap'>
                <CustomButton buttonVal='Подробнее' className='btn' onClickBtn={this.onClickButton}/>
                <CustomButton buttonVal='Преобрести' className='btn' onClickBtn={this.onClickButton}/>
              </div>
            </Paper>
          </Grid>
      </Grid>
    </div>
)}
}
