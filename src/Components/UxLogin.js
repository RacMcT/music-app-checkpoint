import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

let UxLogin = ({ dispatch, signedIn }) => {

  let useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },      
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px'
    }
  }));

  let classes = useStyles();


  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Username*" />
        <TextField id="standard-basic2" label="Password*" />

        <Button
          onClick={(e) => dispatch({ type: 'signOn', payload: !signedIn })}
          variant="contained"
          color="primary">
          Login
      </Button>
      </form>
    </div>
  );
}

export default UxLogin