import React from 'react'
import {Link } from 'react-router-dom'

import {AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color:'white',
    marginRight: "1rem",
    textDecoration: "none"
  },
  ToolBar: {
    alignContent:"center"
  },
  brandName:{
    color:'white',
    marginRight: "2rem",
    
  },
  options:{
    display: "flex",
    justifyContent: "center",
    width:"100%"
  }
}));



const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}> 

      <AppBar position="static" color="secondary">
        <Toolbar justifyContent='center' >
        <div className={classes.options}>
        <Typography variant="h3" align='center' className={classes.brandName} >
          Online Shoe Store
        </Typography>
        </div>
        </Toolbar>
        
        <Toolbar>
        <div className={classes.options}>  
        <Link to= '/' className={classes.title}>
        <Typography variant="h6" >
        Home
        </Typography>
      </Link>
       
      <Link to="newArrival" className={classes.title}> 
        <Typography variant="h6" >
          New Arrivals
        </Typography>
      </Link>
      </div>
      </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header
