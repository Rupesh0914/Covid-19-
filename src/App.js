import React from 'react';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css';
import { fetchData } from './api/index';

import coronoimage from './images/image.jpg'
// whenever we have index file we dont have to mention from where ima importing.


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  
  
  async componentDidMount () {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData })
  }

handleCountryChange = async (country) => {
 const fetchedData = await fetchData(country);

 this.setState({ data: fetchedData, country: country });
}
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="Covid-19" src={coronoimage} />
      <Cards  data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country} />
      </div>
    )
  }

}

export default App;
