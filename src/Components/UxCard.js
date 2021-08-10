import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


let UxCard = ({ header, desc, jsx, marginLR }) => {  

  let useStyles = makeStyles({
    root: {
      width: '300px',
      height: '200px',
      margin: `0px ${marginLR}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    title: {
      marginBottom: '20px'
    },
    ux: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });

  let classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardContent>
        <Typography className={classes.title} variant="h4" component="h2">
          {header}
        </Typography>

        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>

      <CardActions className={classes.ux}>
        {jsx}
      </CardActions>
      
    </Card>
  );
};

export default UxCard;