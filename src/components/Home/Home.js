import React from 'react'
import banner1 from "../../images/banner1.jpg"
import mens from "../../images/mens.jpg"
import womens from "../../images/womens.jpg"
import kids from "../../images/kids.jpg"
import {Grid, makeStyles, Typography, Paper} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  whatIsNew: {
  fontWeight: 800,
  // fontSize:28,
  },
  paper:{

  },
  collectionContainer:{
    padding:10,
  }
}));

const Home = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Grid 
        container 
        width="100%" 
        jusitfy='center'
        >
        <Grid item xs={12} width="100%">
          <div><img src={banner1} alt="" width="100%"/></div>
        </Grid>

        <Grid item xs ={12}>
          <Typography  variant='h4' align='center' className={classes.whatIsNew}>
              What's New ?
          </Typography>
        </Grid>
        <Grid  container item
              xs={12}
              spacing={2}
              width="100%"
              className={classes.collectionContainer}
        >
          <Grid item xs={12} sm={6} md={4} width="100%">
            <Paper width="100%">
              <img src={mens} alt="mens" width="100%" />
              <Typography variant="h5" align="center" className={classes.whatIsNew}>
                Men's New Arrival
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} width="100%">
          <Paper width="100%">
            
            <img src={womens} alt="womens" width="100%" />  
            <Typography variant="h5" align="center" className={classes.whatIsNew}>
              Women's New Arrival
            </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} width="100%">
            <Paper width="100%">
            <img src={kids} alt="kids" width="100%" />
              <Typography variant="h5" align="center" className={classes.whatIsNew}>
                Kid's New Arrival
              </Typography>
              </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
