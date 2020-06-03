import React from 'react';

import { Cards, Charts, Countrypicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image.png';

class App extends React.Component {

state = {
  data: {},
  country: ''
}

async componentDidMount() {
const fetchedData = await fetchData();

this.setState({ data: fetchedData });
}

handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
}

render(){

return(
<div className = {styles.container} >
 <img className={styles.image} src={image} alt="COVID-19" />
<Cards data = {this.state.data} />
<Countrypicker handleCountryChange={this.handleCountryChange} />
<Charts data = {this.state.data} country={this.state.country}/>

</div>
   )
}
}

export default App;