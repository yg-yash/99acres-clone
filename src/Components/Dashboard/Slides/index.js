import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from './index.module.css';
import Card from '@material-ui/core/Card';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 110,
    width: 300,
    borderRadius: 0,
    margin: '0px 10px 0 10px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 5px 0 5px',
    '&:hover': {
      boxShadow: '0 0 20px rgba(33,33,33,.2)',
    },
  },
  Arrow: {},
}));

// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  const classes = useStyles();
  // return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
  return (
    <Card className={classes.card}>
      <div>
        <img
          alt="BUY SECOND HOME IN PATTAYA For More Details"
          src="//www.ieplads.com/bmsjs/banners99/2019/World-wide-Properties-p-130x70.gif"
          style={{
            width: 130,
            height: 70,
          }}
        ></img>
      </div>
      <div
        style={{
          margin: '0 10px 0px 5px',
          height: '100%',
        }}
      >
        <p
          style={{
            textTransform: 'uppercase',
            fontSize: '14px',
            color: '#666',
            wordBreak: 'break-all',

            overflow: 'hidden',
            fontWeight: 'bold',
          }}
        >
          Buy Second Home in Pataya
        </p>
        <p
          style={{ fontSize: '10px', color: '#9a9a9a', margin: 0, padding: 0 }}
        >
          For More Details
        </p>
      </div>
    </Card>
  );
};

// All items component
// Important! add unique key
const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const selected = 'item1';

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
    showArrow: false,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  Arrow = ({ text, className }) => {
    return (
      <div
        style={{
          width: '35px',
          // visibility: 'hidden',
          border: 'none',
          height: 80,
          cursor: 'pointer',
          zIndex: 11,

          fontSize: '13px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px 0 rgba(0,0,0,.16)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {text === '<' ? (
          <ArrowLeftIcon style={{ marginTop: 20 }} />
        ) : (
          <ArrowRightIcon style={{ marginTop: 20 }} />
        )}
      </div>
    );
  };

  ArrowLeft = this.Arrow({ text: '<', className: 'arrow-prev' });
  ArrowRight = this.Arrow({ text: '>', className: 'arrow-next' });

  render() {
    const { selected } = this.state;

    const menu = this.menuItems;

    return (
      <div
        style={{
          width: '100%',
          height: 100,

          padding: '5px 0 5px 0',
        }}
        onMouseEnter={() => this.setState({ showArrow: true })}
        onMouseLeave={() => this.setState({ showArrow: false })}
      >
        <ScrollMenu
          data={menu}
          arrowLeft={this.state.showArrow ? this.ArrowLeft : null}
          arrowRight={this.state.showArrow ? this.ArrowRight : null}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default App;
