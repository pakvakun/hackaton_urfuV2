import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import CustomButton from '../components/button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from '../modules/api';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      regField: '',
      login: '',
      password: '',
      remaining_balance: '',
      fare: ''
    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
      .then(res => {
            console.log(res.data.data[0])
            this.setState({remaining_balance:res.data.data[0].residue?res.data.data[0].residue:0});
            this.setState({fare:res.data.data[0].name});
      })
  }
  onClickButton = () => {}
render(){
  return (
    <div className = 'wrap'>
       <Grid container 
            alignContent={'space-between'}
            >
          <Grid classNan  item xs={6}
                className='wrap_item m-1 fadeInRight wow' 
                data-wow-duration="1s" 
                data-wow-delay="0s"
                onClick={()=>this.props.handleClickItem('tarifes')}
                >
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
              <h2>Ваш номер: {this.props.login}</h2>
              <h2>У вас подключен тариф: {this.state.fare}</h2>
              <p style={{margin: '0.5rem', display: 'flex', color: '#bfbebe'}}>Подробнее о тарифах <ChevronRightIcon/></p>
            </Paper>
          </Grid>
          <Grid classNan  item xs={5}
                className='wrap_item m-1 fadeInRight wow' 
                data-wow-duration="1s" 
                data-wow-delay="0s" 
                onClick={(e)=>this.props.handleClickItem('balance')}
          >
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
              <h2>Баланс: {this.state.remaining_balance} рублей</h2>
              <p style={{margin: '0.5rem', display: 'flex', color: '#bfbebe'}}>управление балансом  <ChevronRightIcon/></p>
            </Paper>
          </Grid>
          {/* <Grid classNan item xs={10} 
                className='wrap_item wrap_item_tarif fadeInRight wow' 
                data-wow-duration="1s" 
                data-wow-delay="0s"
                >
            <Paper 
              className='paper top'
              elevation={5}
              square={false}
            >
            </Paper>
          </Grid> */}
      </Grid>
    </div>
)}
}