import React, {Component} from 'react';
import { fetchIndianData } from '../api';
import { IndianCards, IndianTable } from '../components';
import styles from '../App.module.css';

class Indian extends Component{

state = {
  indianStats: []
}

async componentDidMount() {

 const api_call = await fetch(`https://covid19.mathdro.id/api/countries/India`);
 const data = await api_call.json();

this.setState({ 
	indianStats: data,

 });
}

	render(){
return(      
         <div>
          <center><h1 className={styles.heading}>INDIAN COVID-19 DATA </h1></center><br /><br />
          <IndianCards indianStats={this.state.indianStats} />
           <IndianTable  />
          </div>
       );

	}
}

export default Indian;