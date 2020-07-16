import React,{useContext} from 'react'
import {productContext} from '../../App'
import { useParams } from 'react-router-dom'
import { Grid, makeStyles, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
    padding:20
  },
  container:{
    Height:100,
    width:"100%",
    
    paddin:20,

    
    backgroundColor:"lightYellow"
  }

}))



const Shoe = () => {

const classes = useStyles()

const shoes = useContext(productContext)
const { shoeID } = useParams()
const shoe = shoes[shoeID]
const {name, img, price} = shoe
    return (
    <div className={classes.root}>
    
    <Grid 
      container
      justify= 'center'
      className={classes.container}
      spacing={4}
      >
      <Grid item xs={12} sm={8}  width="100%" height="100%" >
        <Paper width="100%" height={250} >
          <img src={img} alt={name} width="100%"  />
        </Paper>
        
      </Grid>

      <Grid  xs={12} sm={4}  width="100%" >
        <Paper  style={{marginTop:20}}>
          <Typography variant="h3" align='center'>
            {name}
          </Typography>
          <Typography variant="h4" component="h2" align='center'>
            Price: ${price}
          </Typography>
        </Paper>
      </Grid>
    </Grid>  
    </div>
  )
}

export default Shoe
