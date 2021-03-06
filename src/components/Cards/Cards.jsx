import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup'

const Cards =({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    // console.log(confirmed) 
    if(!confirmed)
    {
        return 'Loading...'
    }
    return(
         <div >
             <Grid container spacing={3} justify="center">
                 <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>Infected</Typography>
                         <Typography variant="h5" >
                             <CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
                             </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of active cases of COVID19</Typography>

                         
                     </CardContent>

                 </Grid>
                 <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                         <Typography variant="h5" >
                         <CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp></Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of recoveries of COVID19</Typography>

                         
                     </CardContent>

                 </Grid>
                 <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                         <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of deaths caused of COVID19</Typography>

                     </CardContent>

                 </Grid>
             </Grid>


         </div>
     )
 }

 export default Cards