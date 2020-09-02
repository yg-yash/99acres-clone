import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '../Drawer';

export default function ButtonAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (event) => {
    console.log(event.type);
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer((value) => !value);
  };
  const [allIndiaPopper, setallIndiaPopper] = useState(false);

  const handleClick = (event) => {
    setallIndiaPopper(allIndiaPopper ? null : event.currentTarget);
  };
  const open = Boolean(allIndiaPopper);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <div>
              <Typography variant="h4" className={classes.acresText}>
                99acres
              </Typography>
              <Typography variant="subtitle2" className={classes.smallHeading}>
                India's No.1 Property Portal
              </Typography>
            </div>
            <div className={classes.allIndiaContainer}>
              <Button
                color="inherit"
                className={`${classes.whiteButton} ${classes.allIndiaBtn}`}
                endIcon={<ExpandMoreIcon htmlColor="white" fontSize="small" />}
                onClick={handleClick}
              >
                All India
              </Button>
            </div>
            <Popper
              id={id}
              open={open}
              anchorEl={allIndiaPopper}
              transition
              placement="bottom-start"
              className={classes.popover}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <div className={classes.paper}>
                    <div className={classes.noCenterRow}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                        alt="indian flag"
                        className={classes.indianFlag}
                      />
                      <p>NATIONAL</p>
                    </div>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                  </div>
                </Fade>
              )}
            </Popper>
          </div>

          <Button
            color="inherit"
            variant="outlined"
            className={`${classes.whiteButton} ${classes.postPropertyBtn}`}
          >
            Post Property For Free
          </Button>
          <Button color="inherit" className={classes.whiteButton}>
            Customer Service
          </Button>

          <Button color="inherit" className={classes.whiteButton}>
            Home Loans
          </Button>
          <Button color="inherit" className={classes.whiteButton}>
            Quick Links
          </Button>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon className={classes.menuButton} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'white',
  },

  acresText: {
    color: 'white',
    margin: 0,
    padding: 0,
  },
  smallHeading: {
    color: 'white',
    fontSize: 8,
    margin: 0,

    textAlign: 'center',
    padding: 0,
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    backgroundPosition: '0 0',
    width: '105px',
    height: '36px',
    verticalAlign: 'middle',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(//static.99acres.com/99acreslogo.png)',
  },

  whiteButton: {
    fontSize: 14,
    color: 'white',
    cursor: 'pointer',
    margin: '0 10px 0 10px',
  },
  allIndiaBtn: {
    marginLeft: 10,
    fontSize: 13,
    color: 'white',
  },
  postPropertyBtn: {
    textTransform: 'capitalize',
  },
  allIndiaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paper: {
    width: '866px',
    background: '#fff',
    position: 'absolute',
    top: '80%',
    display: 'block',
    height: '800px',
    color: '#000',
    borderTop: 0,
    boxShadow: '0 0 24px 0 rgba(0,0,0,.22)',
    zIndex: 10,
    padding: 15,
  },
  popover: {
    content: '',
    position: 'absolute',
    top: '-20px',
    right: '5px',
    borderBottom: '10px solid black',
    borderRight: '10px solid transparent',
    borderLeft: '10px solid transparent',
    borderTop: '10px solid transparent',
    zIndex: 10,
  },
  indianFlag: {
    width: 20,
    height: 20,
  },
  noCenterRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
