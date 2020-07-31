import axios from 'axios'
const url='https://covid19.mathdro.id/api'

export const fetchData =async (country)=>{
let changeableurl=url
if(country){
    changeableurl=`${url}/countries/${country}`
}

    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableurl) 
        const modifieddata={
            confirmed:confirmed,
            recovered:recovered,
            deaths:deaths,
            lastUpdate:lastUpdate}
        return modifieddata
        // const response=await axios.get(url) 
        // console.log(response)
    
    }
    catch(error){

    }
}

export const fetchDailyData=async()=>{
    try{
        const {data} =await axios.get(`${url}/daily`)
        // console.log(data)
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,

        }))
        return modifiedData
    }
    catch(error){

    }
}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
