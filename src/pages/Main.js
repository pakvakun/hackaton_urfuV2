import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import CustomButton from '../components/button';
import axios from '../modules/api';

export default class Main extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      regField: '',
      login: '',
      password: '',
      remaining_balance: '256',
      fare: 'Тариф 2'

    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
      .then(res => {
        console.log(res)
      })
  }
  onClickButton = () => {}
render(){
  return (
    <div className = 'wrap'>
       <Grid container 
      alignContent={'space-between'}>
          <Grid classNan  item xs={6}
              className='wrap_item fadeInRight wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
              <h2>Ваш номер: {this.props.login}</h2>
            </Paper>
          </Grid>
          <Grid classNan  item xs={6}
            className='wrap_item fadeInRight wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
              <h2>Остаток по счету: {this.state.remaining_balance} рублей</h2>
            </Paper>
          </Grid>
          <Grid classNan item xs={10} 
              className='wrap_item wrap_item_tarif fadeInRight wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
              <h2>У вас подключен тариф: {this.state.fare}</h2>
            </Paper>
          </Grid>
          <Grid classNan  item xs={12}
            className='wrap_item'>
            <h2>Наши тарифы</h2>
          </Grid>
          <Grid classNan  item xs={4}
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
          <Grid classNan  item xs={4}
        className='wrap_item fadeInLeft wow' data-wow-duration="1s" data-wow-delay="0.25s">
            <Paper 
              className='paper fare'
              elevation={5}
              square={false}
            >
              <h2>Тариф 2</h2>
              <div className='descr'>Описание тарифа</div>
              <div className='button_wrap'>
                <CustomButton buttonVal='Подробнее' className='btn' onClickBtn={this.onClickButton}/>
                <CustomButton buttonVal='Преобрести' className='btn' onClickBtn={this.onClickButton}/>
              </div>
            </Paper>
          </Grid>
          <Grid classNan  item xs={4}
        className='wrap_item fadeInLeft wow' data-wow-duration="1s" data-wow-delay="0.5s">
            <Paper 
              className='paper fare'
              elevation={5}
              square={false}
            >
              <h2>Тариф 3</h2>
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