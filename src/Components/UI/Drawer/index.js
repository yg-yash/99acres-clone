import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRight from '@material-ui/icons/ArrowRight';
import SearchIcon from '@material-ui/icons/Search';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  list: {
    width: 230,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstRow: {
    padding: 15,
    flex: 2,
  },
  itemText: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#000',
    width: '160px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  textField: {
    height: '24px',
    width: 160,
  },
  optionsRow: {
    padding: 30,
  },
  line: {
    height: 10,
    width: 1,
    backgroundColor: '#999 ',
  },
  option: {
    fontSize: '12px',
    textAlign: 'center',
    color: '#333',
    marginTop: '10px',
  },
});

export default function SwipeableTemporaryDrawer({ openDrawer, toggleDrawer }) {
  const classes = useStyles();
  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className={classes.list}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                style={{ padding: 0, margin: 0, height: 10, width: 10 }}
                size="small"
              >
                <NotificationsIcon />
              </IconButton>
              <p>Set Alerts</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                style={{ padding: 0, margin: 0, height: 10, width: 10 }}
                size="small"
              >
                <StarIcon />
              </IconButton>
              <p>Shortlist</p>
            </div>
            <IconButton
              onClick={toggleDrawer}
              style={{ padding: 0, margin: 0, height: 10, width: 10 }}
              size="medium"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div>
            <List>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="LOGIN /REGISTER"
                  className={classes.itemText}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="POST PROPERTY"
                  className={classes.itemText}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="BUY OUR SERVIES"
                  className={classes.itemText}
                />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Advice" className={classes.itemText} />
                <ListItemIcon>
                  <ArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Customer Serive"
                  className={classes.itemText}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Builders In India"
                  className={classes.itemText}
                />
              </ListItem>
              <ListItem>
                <input
                  // class="ani f12"
                  type="text"
                  placeholder=" Search by Property Code"
                  name="PROP_ID"
                  attr="p_code"
                  required="true"
                  valtype="propcode"
                  nameinerr="Property Code"
                  pe="text"
                ></input>
                <ListItemIcon>
                  <SearchIcon size="small" />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <Divider />
            <div className={`${classes.row} ${classes.optionsRow}`}>
              <p className={classes.option}>Mobile</p>
              <div className={classes.line} />
              <p className={classes.option}>Feedback</p>
              <div className={classes.line} />
              <p className={classes.option}>About Us</p>
            </div>
            {/* <div style={{ textAlign: 'center' }}> */}
            <p style={{ fontSize: '12px', textAlign: 'center', color: '#333' }}>
              Toll Free <span style={{ fontWeight: 500 }}>1800 41 99099</span>
            </p>
            <p style={{ fontSize: '12px', textAlign: 'center', color: '#333' }}>
              For international numbers
              <br /> click
              <a style={{ color: 'blue', cursor: 'pointer' }}> here</a>
            </p>
            {/* </div> */}
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
