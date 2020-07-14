import React, {useContext} from 'react'
import {productContext} from '../../App'
import {Link} from 'react-router-dom'
import NewArrivalCard from './NewArrivalCard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none"
  },
  card:{
    marginBottom:10,
    

  },
  container:{
    paddingLeft:30,
    paddingRight:30
  }

}))

const NewArrivalIndex = () => {
const classes = useStyles()
const shoes = useContext(productContext)

  return (
    <div>
      <div className={classes.root}>
      <Grid container 
        className={classes.container}
        justify="center"
        >
      {Object.entries(shoes).map(([shoeID, { name, img, price }]) => (
        
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
          <Link to= {`/newArrival/${shoeID}`} className={classes.title}>
            <NewArrivalCard val={{name, img, price}}/>
            </Link>
          </ Grid>
        
      ))}
      </Grid>
      </div>
    </div>
  )
}

export default NewArrivalIndex
