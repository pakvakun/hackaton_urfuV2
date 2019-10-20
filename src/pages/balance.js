import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import CustomButton from '../components/button';
import axios from 'axios'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default class Balance extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      regField: '',
      fare: 'Тариф 2',
      remaining_balance: 0
    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
    .then(res => {

    });

    setInterval(() => {
        this.setState({ date : new Date()})
    }, 1000);
  }
render(){
    let date = this.state.date || new Date();
    let chev = <ChevronRightIcon/>;
  return (
    <div className = 'custom-wrap' style={{padding: 0, margin: 0}}>
       <Grid container 
            alignContent={'space-between'}
            >
          <Grid classNan  item xs={4}
            className='wrap_item'>
                <Paper 
                    className='paper fare'
                    elevation={5}
                    square={false}
                    style={{paddingRight: '30px!important'}}
                    >
                    <h2>Баланс</h2>
                    <h2>{this.state.remaining_balance} рублей</h2>
                    <label style={{position: 'absolute', bottom: '15px', left: 0, width: '100%', textAlign: 'center'}}>данные актуальны на {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</label>
                    <div className='btn-group'>
                        <CustomButton buttonVal={`Пополнить`} className='button' onClickBtn={()=>this.props.handleClickItem('404')}/>
                    </div>
                </Paper>
          </Grid>
          <Grid classNan  item xs={4}
            className='wrap_item fadeInLeft wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper fare'
              elevation={5}
              square={false}
            >
              
              <h2>Тариф отличный</h2>
              <div className='descr'>Описание тарифа</div>
              <div className='button_wrap'>
                <CustomButton buttonVal='Подключить' className='btn' onClickBtn={()=>this.props.handleClickItem('404')}/>
              </div>
            </Paper>
          </Grid>
          <Grid classNan  item xs={4}
            className='wrap_item fadeInLeft wow' data-wow-duration="1s" data-wow-delay="0s">
            <Paper 
              className='paper fare'
              elevation={5}
              square={false}
            >
              <h2>Информирование о балансе</h2>
              <div className='descr'>Вам будет приходить уведомление о снижении баланса</div>
              <div className='button_wrap'>
                <CustomButton buttonVal='Подключить' className='btn' onClickBtn={()=>this.props.handleClickItem('404')}/>                
              </div>
            </Paper>
          </Grid>
      </Grid>
    </div>
)}
}
