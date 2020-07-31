import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import axios from 'axios';

function Maps()
{
    const [results,setResults]= useState([])    
    axios
    .all([
        axios.get("https://covid19.mathdro.id/api/confirmed")
    ])
    .then(response=>{
        console.log(response[0].data)
        setResults(response[0].data)
    })
    // const {data}=axios.get("https://covid19.mathdro.id/api/confirmed")
    // console.log(data)

    const countrylocations=results.map((data,i) => {
        return <div
        lat={data.lat}
        lng={data.long}
        style={{
            color:"black",
            backgroundColor:"#FFF",
            height:"50px",
            width:"55px",
            textAlign:"center",
            borderRadius:"30%",
            borderColor:"black",

        }}
        >
          <div >{data.provinceState}</div>
          <div>{data.confirmed}</div>
        </div>
    })

    return(
        <div style={{ height: '200vh', width: '100%' }}>
<GoogleMapReact
 
  defaultCenter={{lat: 59.95,
    lng: 30.33}}
  defaultZoom={4}
>
  <div
    lat={59.955413}
    lng={30.337844}> My Marker</div>
    {countrylocations}
</GoogleMapReact>
</div>
    )}
export default Maps


/* <div style={{ height: '100vh', width: '100%' }}>
<GoogleMapReact
 
  defaultCenter={{lat: 59.95,
    lng: 30.33}}
  defaultZoom={3}
>
  <div
    lat={59.955413}
    lng={30.337844}
    // text="My Marker"
    //AIzaSyD8jfj9Z4vvhBqHsH30cu-TUUUt39cl-_c
  > My Marker</div>

</GoogleMapReact>
</div> */