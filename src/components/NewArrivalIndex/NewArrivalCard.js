import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({val}) {
  const classes = useStyles();
  const {name, price, img} = val
  console.log(price)  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="250"
          image={img}
          title="{name}"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" >
            {name}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
           <b>$ {price}</b> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}