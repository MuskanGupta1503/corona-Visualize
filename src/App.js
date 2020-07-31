import React from 'react'
import {Cards,Charts,CountryPicker} from './components'
import {fetchData} from './api/api'
// import GoogleMapReact from 'google-map-react';
import Maps from './components/googlemaps'

class App extends React.Component{
  state={
    data:{},
    country:'',
  }
   
  async componentDidMount()
  {
    // const data=await fetchData()
    // console.log(data)
    const fetchedData=await fetchData()
    this.setState({data:fetchedData})
  }
  handle=async(country)=>{
    console.log(country)
    const fetchedData=await fetchData(country)
    console.log(fetchedData)
    this.setState({data:fetchedData, country:country})
  }
  // countrylocation=async()=>{
  //   const fetchinfo=await fetch(`https://corona.lmao.ninja/v2/countries`)
  //   const f=fetchinfo.json()
  //   console.log(f)
    
  // }

  render()
  {
    const mystyle={
      color:"black",
      fontSize: "30px",
      fontFamily: "Arial",
      padding: "10px",
      // margin:"10px"
    };
    const {data,country}=this.state
    return(
      <div>
        <center style={mystyle}> COVID-19 </center>
        <br></br><br></br>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handle}  />
        <Charts data={data} country={country} />
        {/* <Maps /> */}

      </div>
   )
  }
}
export default App