import React, { useState } from 'react';
import dashboardImage from '../../assets/dashboardImage.jpg';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import CheckBox from './Checkbox';
import elementOne from '../../assets/elementOne.gif';
import Card from '@material-ui/core/Card';
import Popover from '../UI/Popover';
import Slides from './Slides';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  categoryButton: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    padding: '15px 20px 15px 22px',
    height: '50px',
  },
  selectedCategoryButton: {
    boxShadow: 'none',
    zIndex: 1,
    backgroundColor: 'rgba(202,202,202,.5)',
    color: '#fff',
    fontWeight: 700,
    fontSize: 16,
    height: '50px',
    padding: '15px 20px 15px 22px',
    borderRadius: 0,
  },
  select: {
    minWidth: '132px',
    whiteSpace: 'nowrap',
    fontSize: '14px',

    position: 'relative',
    color: '#333',
    display: 'inline-block!important',
    padding: '11px 12px 10px',
    float: 'left',
    borderRadius: 0,
    background: '#fff',
    borderRight: '1px solid #ccc',
    // height: '100%',
    // width: '100%',
    borderWidth: 0,
  },

  formControl: {
    minWidth: '132px',
    whiteSpace: 'nowrap',
    fontSize: '14px',

    position: 'relative',
    color: '#333',
    display: 'inline-block!important',
    // padding: '11px 12px 10px',
    float: 'left',

    background: '#fff',
    borderRight: '1px solid #ccc',
    height: 50,
    padding: 0,
  },
  whiteColor: {
    color: 'black',
  },
  textField: {
    backgroundColor: 'white',
    color: '#333',
    padding: 0,
    margin: 0,
    height: 50,
    flex: 1,
    border: 0,
    paddingLeft: '20px',
    fontFamily: 'Poppins',
  },
  searchBtn: {
    height: 50,
    backgroundColor: '#4ba7e4',
    borderRadius: 0,
    color: 'white',
    width: 150,
  },
  exploreText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 'normal',
    color: '#666',
    margin: 0,
    paddingBottom: '8px',
    textTransform: 'uppercase',
  },
  main: {
    padding: 60,
    paddingLeft: 80,
    paddingRight: 80,
    height: '100%',
  },
  formControlLabel: {
    fontSize: 14,
  },
  typeFormControl: {
    width: 230,
  },
  galleryContainer: {
    display: 'flex',
    marginTop: 20,
    backgroundColor: '#ececec',
  },
  galleryLeftContainer: {
    flex: 1,
  },
  galleryRightContainer: {
    flex: 4.5,
  },
  galleryContainerInner: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  leftGalleryCard: {
    width: 150,
    marginBottom: 10,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 0 20px rgba(33,33,33,.2)',
    },
  },
  newProjectText: {
    borderBottom: '1px #e9e9e9 solid',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: 'normal',
    margin: 0,
    paddinBottom: '8px',
  },
  delhiResidentalText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 'normal',
    color: '#666',
    margin: 0,
    paddingBottom: '8px',
    textTransform: 'uppercase',
  },
  delhiCard: {
    height: 85,
    width: 310,
    borderBottom: '1px solid #aaa',
    cursor: 'pointer',

    borderRadius: 0,
    '&:hover': {
      boxShadow: '0 0 20px rgba(33,33,33,.2)',
    },
  },
  delhiCardTitle: {
    color: '#4d4d4d',
    fontSize: 16,
    fontFamily: 'Poppins',
    margin: '15px 0 0 15px',
  },
  delhiCardPrice: {
    color: '#0287d7',
    fontSize: '12px',
    fontWeight: '600',
    margin: '5px 0 0 15px',
    fontFamily: 'Poppins',
  },
  textRow: { display: 'flex', flexDirection: 'row', marginTop: 10 },
  inlineCard: {
    marginRight: 10,
    height: 300,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 0 20px rgba(33,33,33,.2)',
    },
  },
  belowCardMain: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '17px',
    fontWeight: 600,
    wordWrap: 'break-word',
  },
  answersCard: {
    padding: 20,
  },
  askBtn: {
    height: 40,
    backgroundColor: '#4ba7e4',
    borderRadius: 0,
    color: 'white',
    width: 120,
    marginLeft: 30,
  },
  questionText: {
    fontSize: 12,
    color: '#707070',
    fontWeight: 600,
  },
  questionTextBlue: {
    fontSize: 12,
    color: '#3498db',
    fontWeight: 600,
  },
  questionTextSmall: {
    fontSize: 10,
  },
  questionTextBlueSmall: {
    fontSize: 10,
    color: '#3498db',
    fontWeight: 400,
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'yellow !important',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    'Buy',
    'Rent/pg',
    'projects',
    'commercial',
    'Dealers',
  ]);

  const [selectedCategory, setSelectedCategory] = useState('buy');

  const [galleryLeftData, setGalleryLeftData] = useState([
    {
      image: elementOne,
      title: 'Sector 47 & 49, Gurugram',
    },
    {
      image: elementOne,
      title: 'Sector 47 & 49, Gurugram',
    },
    {
      image: elementOne,
      title: 'Sector 47 & 49, Gurugram',
    },
    {
      image: elementOne,
      title: 'Sector 47 & 49, Gurugram',
    },
    {
      image: elementOne,
      title: 'Sector 47 & 49, Gurugram',
    },
  ]);
  const [delhiDataOne, setDelhiDataOne] = useState([
    {
      title: 'Tulip Violet - Sector 69 Gurgaon',
      price: '4.35 crore',
    },
    {
      title: 'Tulip Violet - Sector 69 Gurgaon',
      price: '1.4 crore',
    },
    {
      title: 'Tulip Yellow - Sector 69 Gurgaon',
      price: '89.46 Lac',
    },
    {
      title: 'Tulip Leaf - Sector 69 Gurgaon',
      price: '1.5 crore',
    },
    {
      title: 'Tulip Ace - Sector 69 Gurgaon',
      price: '99 Lac - 1.5 crore',
    },
  ]);
  const [galleryAnchorEl, setGalleryAnchorEl] = useState(null);

  const handleGalleryPopoverOpen = (event) => {
    setGalleryAnchorEl(event.currentTarget);
  };

  const handleGalleryPopoverClose = () => {
    setGalleryAnchorEl(null);
  };

  const galleryOpen = Boolean(galleryAnchorEl);

  const [projectAnchorEl, setProjectAnchorEl] = useState(null);

  const handleProjectPopoverOpen = (event) => {
    setProjectAnchorEl(event.currentTarget);
  };

  const handleProjectPopoverClose = () => {
    setProjectAnchorEl(null);
  };

  const projectOpen = Boolean(projectAnchorEl);

  const [searchAnchorEl, setSearchAnchorEl] = useState(null);

  const handleSearchPopoverOpen = (event) => {
    setSearchAnchorEl(event.currentTarget);
  };

  const handleSearchPopoverClose = () => {
    setSearchAnchorEl(null);
  };

  const searchOpen = Boolean(searchAnchorEl);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    height: 100,
  };
  const [slidesData, setSlidesData] = useState([
    {
      image: 'sad',
      title: 'Dream home land',
    },
    {
      image: 'sad',
      title: 'Dream home land',
    },
    {
      image: 'sad',
      title: 'Dream home land',
    },
    {
      image: 'sad',
      title: 'Dream home land',
    },
    {
      image: 'sad',
      title: 'Dream home land',
    },
  ]);

  return (
    <div
      style={{
        width: '100%',
        top: 0,
        position: 'absolute',
        backgroundColor: '#ececec',
      }}
    >
      <div style={{ width: '100%', height: '75vh' }}>
        <img
          src={dashboardImage}
          style={{ width: '110%', height: '100%' }}
        ></img>
        <div
          style={{
            position: 'absolute',
            left: '25%',
            top: '7%',
          }}
        >
          {categories.map((category, index) =>
            selectedCategory.toLowerCase() === category.toLowerCase() ? (
              <Button className={classes.selectedCategoryButton} key={index}>
                {category}
              </Button>
            ) : (
              <Button
                className={classes.categoryButton}
                onClick={() => setSelectedCategory(category)}
                key={index}
              >
                {category}
              </Button>
            )
          )}
          <div
            style={{
              width: '150%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                height: 50,
                minWidth: 132,
                borderRight: '1px solid #ccc',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}

              // aria-owns={searchOpen ? 'mouse-over-search-popover' : undefined}
              // aria-haspopup="true"
            >
              {/* <SearchPopover
                anchorEl={galleryAnchorEl}
                open={searchOpen}
                handlePopoverClose={handleGalleryPopoverClose}
                id="mouse-over-search-popover"
              >
                asdsad
              </SearchPopover> */}
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 13,
                  color: '#333',
                  marginRight: 4,
                }}
              >
                All Residental
              </p>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',

                  borderTop: '5px solid black',
                }}
              ></div>
            </div>

            <input
              className={classes.textField}
              valtype="keyword"
              id="keyword"
              x-webkit-speech=""
              lang="en_IN"
              oninput="autoSuggest();"
              name="keyword"
              placeholder="Type Location or Project/Society or Keyword"
              type="text"
              nameinerr="keyword"
              customizederrclass="custErr"
              autocomplete="off"
              onClick={handleSearchPopoverOpen}
              //onMouseLeave={handleSearhcPopoverClose}
            ></input>

            <Button
              variant="contained"
              elevation={0}
              className={classes.searchBtn}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          // marginTop: '-20px',
          // marginBottom: 30,
          // float: 'left',
          // width: '100%',
          // display: 'flex',
          width: '100%',
          height: '130px',
        }}
      >
        <Slides />
      </div>
      <div className={classes.main}>
        <Typography variant="subtitle1" className={classes.exploreText}>
          Explore Real estate in india
        </Typography>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid #cdcdcd',
            paddingBottom: 20,
          }}
        >
          <div style={{ width: '40%' }}>
            <div
              style={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <CheckBox label={'Delgi/Ncr (8+)'} />
              <CheckBox label={'Bangalore (2+)'} />
            </div>
            <div
              style={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <CheckBox label={'Hydreabad (2+)'} />
              <CheckBox label={'Other Cities (2+)'} />
            </div>
            <div
              style={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <CheckBox label={'Pune (1+)'} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl className={classes.typeFormControl}>
              <InputLabel id="demo-simple-select-label">
                Property Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.typeFormControl}>
              <InputLabel id="demo-simple-select-label">
                Construction Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.galleryContainer}>
          <div className={classes.galleryLeftContainer}>
            <Typography variant="subtitle1" className={classes.exploreText}>
              Property gallery
            </Typography>
            {galleryLeftData.map((item, index) => (
              <Card
                className={classes.leftGalleryCard}
                variant="outlined"
                key={index}
                elevation={0}
                aria-owns={
                  galleryOpen ? 'mouse-over-gallery-popover' : undefined
                }
                aria-haspopup="true"
                onMouseEnter={handleGalleryPopoverOpen}
                onMouseLeave={handleGalleryPopoverClose}
              >
                <img src={item.image} style={{ height: '100%' }}></img>
              </Card>
            ))}
            <Popover
              anchorEl={galleryAnchorEl}
              open={galleryOpen}
              handlePopoverClose={handleGalleryPopoverClose}
              id="mouse-over-gallery-popover"
            >
              <div>
                <p
                  style={{
                    color: '#0065de',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                  }}
                >
                  Tulip Violet- Sector 69
                  <br />
                  Gurgaon
                  <br />
                  Sector 69 Gurgaon Delhi / NCR (All)
                </p>
                <p
                  style={{
                    cursor: 'pointer',
                    fontSize: 12,
                    fontFamily: 'Poppins',
                  }}
                >
                  Residental Apartment <br />
                  <span
                    style={{
                      cursor: 'pointer',
                      fontSize: 12,
                      fontFamilt: 'Poppins',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    4 Bedrooms(s)
                  </span>
                  <br />
                  Area: 2010sq.ft
                </p>
                <p
                  style={{
                    cursor: 'pointer',
                    fontSize: 12,
                    fontFamily: 'Poppins',
                  }}
                >
                  1.4 crore - 1.4 Crore @<br />
                  6965/sq dr.
                </p>
                <p
                  style={{
                    color: '#0065de',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                  }}
                >
                  View More Details
                </p>
              </div>
            </Popover>
          </div>
          <div className={classes.galleryRightContainer}>
            <Typography
              variant="subtitle1"
              className={`${classes.exploreText} ${classes.newProjectText}`}
            >
              featured new projects
            </Typography>

            <div className={classes.galleryContainerInner}>
              <div style={{ marginTop: 20, marginRight: 10 }}>
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    Residental Apartment
                  </p>
                </div>
                {delhiDataOne.map((item, index) => {
                  return (
                    <Card
                      elevation={0}
                      className={classes.delhiCard}
                      key={index}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        {item.title}
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ {item.price}
                      </Typography>
                    </Card>
                  );
                })}
                <Popover
                  anchorEl={projectAnchorEl}
                  open={projectOpen}
                  handlePopoverClose={handleProjectPopoverClose}
                  id="mouse-over-project-popover"
                  a
                >
                  <div
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        textDecoration: 'none',

                        fontSize: 14,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                      }}
                    >
                      3/4 Bedrooms(S)
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: 14,
                      }}
                    >
                      Residential Apartment
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: 14,
                      }}
                    >
                      Area 1948 - 2476 sq.ft.
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: 14,
                        marginTop: 30,
                      }}
                    >
                      Advertiser: Advaitha Ventures <br /> Pvt. Ltd.
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: 12,
                        marginTop: 30,
                        color: ' #0287d7',
                      }}
                    >
                      View Complete Project Details
                    </p>
                    <div style={{ marginTop: 50 }}>
                      <p
                        style={{
                          textDecoration: 'none',
                          fontSize: 14,
                          marginTop: 30,

                          textTransform: 'uppercase',
                        }}
                      >
                        Request for
                      </p>
                      <div>
                        <CheckBox label={'Builder Call back'} />
                      </div>
                      <div>
                        <CheckBox label={'Pricing Details'} />
                      </div>
                      <div>
                        <CheckBox label={'Site Visit'} />
                      </div>
                      <div>
                        <Button
                          className={classes.askBtn}
                          style={{ width: 200, marginTop: 10, marginLeft: 0 }}
                        >
                          Contact Builder
                        </Button>
                      </div>
                    </div>
                  </div>
                </Popover>
              </div>
              <div style={{ marginTop: 20 }}>
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    SERVICED APARTMENTS
                  </p>
                </div>
                {[1].map((item, index) => {
                  return (
                    <Card
                      className={classes.delhiCard}
                      key={index}
                      elevation={0}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        Tulip Yellow - Sector 69 Gurgaon
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ 4.35 crore
                      </Typography>
                    </Card>
                  );
                })}
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    SERVICED APARTMENTS
                  </p>
                </div>
                {[1].map((item, index) => {
                  return (
                    <Card
                      className={classes.delhiCard}
                      key={index}
                      elevation={0}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        Tulip Yellow - Sector 69 Gurgaon
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ 4.35 crore
                      </Typography>
                    </Card>
                  );
                })}
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    SERVICED APARTMENTS
                  </p>
                </div>
                {[1].map((item, index) => {
                  return (
                    <Card
                      className={classes.delhiCard}
                      key={index}
                      elevation={0}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        Tulip Yellow - Sector 69 Gurgaon
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ 4.35 crore
                      </Typography>
                    </Card>
                  );
                })}
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    SERVICED APARTMENTS
                  </p>
                </div>
                {[1].map((item, index) => {
                  return (
                    <Card
                      className={classes.delhiCard}
                      key={index}
                      elevation={0}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        Tulip Yellow - Sector 69 Gurgaon
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ 4.35 crore
                      </Typography>
                    </Card>
                  );
                })}
                <div className={classes.textRow}>
                  <Typography
                    variant="subtitle1"
                    className={classes.exploreText}
                  >
                    Delhi /ncr -
                  </Typography>
                  <p className={classes.delhiResidentalText}>
                    SERVICED APARTMENTS
                  </p>
                </div>
                {[1].map((item, index) => {
                  return (
                    <Card
                      className={classes.delhiCard}
                      key={index}
                      elevation={0}
                      aria-owns={
                        galleryOpen ? 'mouse-over-project-popover' : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleProjectPopoverOpen}
                      onMouseLeave={handleProjectPopoverClose}
                    >
                      <Typography className={classes.delhiCardTitle}>
                        Tulip Yellow - Sector 69 Gurgaon
                      </Typography>
                      <Typography className={classes.delhiCardPrice}>
                        ₹ 4.35 crore
                      </Typography>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.galleryLeftContainer}>
            <Typography variant="subtitle1" className={classes.exploreText}>
              FEATURED PROPERTY DEALERS - ALL INDIA
            </Typography>
          </div>
          <div
            style={{
              flexDirection: 'row',
              width: '30%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CheckBox label={'Delhi/Ncr (2)'} />
            <CheckBox label={'Ahemdabad (8)'} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '40%',
            marginTop: 50,
          }}
        >
          <Card className={classes.inlineCard} elevation={0}>
            <div style={{ height: '30%', width: '100%' }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                data-original="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                src="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                lazy-done="true"
              ></img>
            </div>
            <div style={{ padding: 10 }}>
              <Typography variant="subtitle1" className={classes.belowCardMain}>
                City Estate Management
              </Typography>
              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  marginTop: '10px',
                  fontWeight: 600,
                }}
              >
                Ahemdabad
              </p>
              <div style={{ marginTop: 40 }}>
                <p style={{ fontSize: 12, color: '#0287d7' }}>40 Apartment</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>22 House/Villa</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>8 Land</p>
              </div>
            </div>
          </Card>
          <Card className={classes.inlineCard} elevation={0}>
            <div style={{ height: '30%', width: '100%' }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                data-original="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                src="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                lazy-done="true"
              ></img>
            </div>
            <div style={{ padding: 10 }}>
              <Typography className={classes.belowCardMain}>
                City Estate Management
              </Typography>
              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  marginTop: '10px',
                  fontWeight: 600,
                }}
              >
                Ahemdabad
              </p>
              <div style={{ marginTop: 40 }}>
                <p style={{ fontSize: 12, color: '#0287d7' }}>40 Apartment</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>22 House/Villa</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>8 Land</p>
              </div>
            </div>
          </Card>
          <Card className={classes.inlineCard} elevation={0}>
            <div style={{ height: '30%', width: '100%' }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                data-original="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                src="https://mediacdn.99acres.com/520/3/10403632O-1376904066-DEALER_3190_LOGO.jpeg"
                lazy-done="true"
              ></img>
            </div>
            <div style={{ padding: 10 }}>
              <Typography className={classes.belowCardMain}>
                City Estate Management
              </Typography>
              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  marginTop: '10px',
                  fontWeight: 600,
                }}
              >
                Ahemdabad
              </p>
              <div style={{ marginTop: 40 }}>
                <p style={{ fontSize: 12, color: '#0287d7' }}>40 Apartment</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>22 House/Villa</p>
                <p style={{ fontSize: 12, color: '#0287d7' }}>8 Land</p>
              </div>
            </div>
          </Card>
        </div>
        <div style={{ marginTop: 50 }}>
          <div className={classes.galleryLeftContainer}>
            <Typography variant="subtitle1" className={classes.exploreText}>
              ASK & ANSWER
            </Typography>
          </div>
          <Card className={classes.answersCard}>
            <Typography variant="subtitle1" className={classes.exploreText}>
              WHAT MAKES MORE SENSE - BUYING OR RENTING?
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: '#999',
                fontSize: '13px',
              }}
            >
              4000+ questions and answers on real estate!
            </Typography>
            <div
              style={{ display: 'flex', marginTop: 20, alignItems: 'center' }}
            >
              <TextField
                variant="standard"
                placeholder="Ask A Question"
                style={{ flex: 1 }}
              ></TextField>
              <Button vairant="contained" className={classes.askBtn}>
                Ask Now
              </Button>
            </div>
            <Typography
              variant="subtitle1"
              style={{
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#666',
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              RECENT QUESTIONS
            </Typography>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    paddingLeft: '65px',
                    background:
                      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAAAAACNsI2aAAABRklEQVR4Ae3UR7brIAwG4Lf/Dbr39m5J3Hv/05UMBHdsjYwOnwHB0T/1b3G4w72Fpks7Lc76eV2XsfqyJNzXuD5iSQ1Bp1cridERclq7Iqbi9JteP2dHxKWYOkTXgVVi1Gu88y4Tzcf4jPGJdwVq8box7HXSOGcs+7TsNeNjwYRzIWZ5JDXsmZxzJ9SPpjIcmHOoX0NTX9iCxrhmn1PQVARnMK6jZUEEcDbj+k/n847sk5RYF6hLTVPJpcSMw7OaPlM952JsyiIpPLSScxbcz2vGRibinFpjo6+3lfPv+lG98u3WU5VzWBDQvD+yBZ3CFHDmBDjnSeBHpx7fiyfUl+xhJbEkgn3QLF5ZZYv3XTd9rHmS7POmG8Rov7Mr5xDOjLuzpZ0a0lsQdur3pZsa0k7NAFtd2mk1YK3JOUATwTo+Dnc4+dgAQEcoI5XV0nsAAAAASUVORK5CYII=) 0 0 no-repeat',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: 0,
                    minHeight: '55px',
                    margin: '15px 0',
                  }}
                ></div>
                <div>
                  <p className={classes.questionText}>
                    <span className={classes.questionTextBlue}>
                      Manas Mukul Biswas{' '}
                    </span>
                    I want to avail a hbl to puchase sali land the convert it to
                    vastu then want to construct home at Haridevpur KMC ward no
                    142. Will Bank of Baroda sanction my loan??
                  </p>
                  <p className={classes.questionTextSmall}>
                    in{' '}
                    <span className={classes.questionTextBlueSmall}>
                      Home Loan -Haridebpur,Kolkata South{' '}
                    </span>
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#3498db',
                }}
              >
                MORE QUESTIONS...
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
