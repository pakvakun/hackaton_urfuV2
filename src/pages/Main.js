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
      counter: 0,
      regField: '',
      login: '',
      password: '',
<<<<<<< HEAD
      remaining_balance: '',
      fare: ''
=======
      remaining_balance: '256',
      fare: 'Тариф 2',
      features: [],
>>>>>>> 0944e0221b7e79b015f003a1df9d61b835eb5c02
    }
  }
  componentDidMount(){
    axios.get('/api/phones/')
      .then(res => {
            console.log(res.data.data[0])
            this.setState({remaining_balance:res.data.data[0].residue?res.data.data[0].residue:0});
            this.setState({fare:res.data.data[0].name});
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
    <div className = 'wrap'>
       <Grid  container 
              alignItems="flex-end"
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
              <h2>{this.props.login}</h2>
              <h2>Тариф: {this.state.fare}</h2>
              <p style={{ display: 'flex', color: '#bfbebe'}}>Подробнее о тарифах <ChevronRightIcon/></p>
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
              <p style={{ display: 'flex', color: '#bfbebe'}}>управление балансом  <ChevronRightIcon/></p>
            </Paper>
          </Grid>
          <Grid  container 
              alignItems="flex-end"
          >
          { this.state.features &&
            this.state.features.map((item,index) => (
              <Grid key={index}  item xs={2}
                className='wrap_item m-1 fadeInRight wow' 
                data-wow-duration="1s" 
                data-wow-delay="0s"
                onClick={()=>this.props.handleClickItem(item.link)}
                >
                <Paper 
                  className='paper top'
                  elevation={5}
                  square={false}
                >
                  <h3>{item.name}</h3>
                  <p style={{ display: 'flex', color: '#bfbebe'}}>Подробнее <ChevronRightIcon/></p>
                </Paper>
            </Grid>
            ))
          }
          </Grid>
      </Grid>
    </div>
)}
}