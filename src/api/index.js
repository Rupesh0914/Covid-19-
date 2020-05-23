import axios from 'axios';

// we use axios to make api request


const url = "https://covid19.mathdro.id/api";


// below we have a function in whcih we are going to have an aynchronous function and we are going to use the modern way to use asynchrnous data and that is ASYNC WAIT.

// its similiar to the wya thst catch as well as then but its much more easier to both read and write.


// we using try and catch block below. try will use if we able to catch the fetch data successful otherwise it will catch error.

export const fetchData = async (country) => {
    let changeableUrl = url;
 
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }
   try {
       const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

 
        return {
           confirmed,
           recovered, 
           deaths,
           lastUpdate,
       }
       
       
   } catch (error) {
      console.log(error)
   }

} 

export const fetchDailyData = async () => {
    try {
       const { data } = await axios.get(`${url}/daily`)
      
       const modifiedData = data.map((dailyData) => ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate,
       }))
       return modifiedData;
    } catch(error) {

    }
}

export const fetchCountries = async () => {
    try {
       const { data: { countries }} = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}


