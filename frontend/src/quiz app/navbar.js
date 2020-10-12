import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './sidebar'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {

  const userSignin =useSelector(state=>state.userSignin);
const {userInfo} =userSignin; 

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h8" className={classes.title}>
           <Link to='/'> XIPHOS </Link>
          </Typography>
          <Button color="inherit"><Link to ={"/cart/"}>CART</Link></Button>
          {
            userInfo ? <Link to ="/profile">Welcome, {userInfo.name}</Link> :
            <Button color="inherit"><Link to ={"/signin"}>LOGIN</Link></Button>
          }
          
        </Toolbar>
      </AppBar>
      <Sidebar/>
    </div>
  );
}