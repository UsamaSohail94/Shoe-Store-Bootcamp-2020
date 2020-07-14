import React from 'react'
import {Outlet} from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'



const NewArrival = () => {
  return (
    <div>
      <Grid container>
      <Grid item xs={12} width="100%">
        <Typography variant="h4" align="center" style={{ marginTop:"10px"}} gutterBottom>
          New Arrivals
        </Typography>
      </Grid>    
      </Grid>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default NewArrival
