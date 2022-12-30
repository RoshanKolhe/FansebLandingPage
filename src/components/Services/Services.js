import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Services.css';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import servicePageImage from '../../images/servicePageImage.png';

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Typography from '@mui/material/Typography';
import HandshakeIcon from '@mui/icons-material/Handshake';
import {makeStyles} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ContactEmergencyRoundedIcon from '@mui/icons-material/ContactEmergencyRounded';

const useStyles = makeStyles(theme => ({
  right: {
    marginLeft: 'auto',
  },
  serviceIcon: {
    backgroundColor: '#fff',
    border: `1px solid '#000'`,
    color: '#000',
  },
  rightArrowIcon: {
    color: '#000',
  },
}));
const Services = () => {
  document.body.style = 'background: black;';

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const classes = useStyles();
  return (
    <>
      <Box height="70vh">
        <Grid
          container
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            height: '100%',
          }}
        >
          <Typography
            variant="h1"
            sx={{typography: {sm: 'h3', xs: 'h4', md: 'h1'}}}
            style={{
              fontWeight: '600',
              background:
                '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            LETUSINFLUENCE
          </Typography>
          <Typography
            color="#fff"
            sx={{typography: {sm: 'body1', xs: 'body2'}}}
            style={{
              textAlign: 'center',
            }}
          >
            An influencer marketing agency serving the world's most respected
            brands since 2019.
          </Typography>
        </Grid>
      </Box>
      <Grid marginX={10}>
        <Grid container justifyContent="center" mt={5}>
          <Typography color="#fff" fontSize="30px">
            OUR SERVICES
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginY={8}
        >
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <HandshakeIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    SPONSORED INFLUENCER CONTENT
                  </Typography>
                  <Typography color="#fff">
                    We build authentic relationships between consumers and
                    products through sponsored
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <CardGiftcardRoundedIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    INFLUENCER GIFTING
                  </Typography>
                  <Typography color="#fff">
                    We offer a gifting program that allows brands to send
                    products directly to influencers in our network in exchange
                    for coverage
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <EmojiEventsRoundedIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    INFLUENCER EVENTS
                  </Typography>
                  <Typography color="#fff">
                    We help brands host influencer events such as launch
                    parties, product releases, and media tours that boost brand
                    awareness and sales.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <FlightRoundedIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    INFLUENCER TRIPS
                  </Typography>
                  <Typography color="#fff">
                    Our team works with influencers to create. experiences that
                    give back to their followers and create positive ROl and
                    brand awareness for the trip's sponsors
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <TrendingUpRoundedIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    INFLUENCER PRODUCT LAUNCHES
                  </Typography>
                  <Typography color="#fff">
                    We work with top-tier influencers to create and launch their
                    products as a collaboration with brands
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row">
              <Grid className={classes.right} xs={3}>
                <Avatar className={classes.serviceIcon}>
                  <Groups2RoundedIcon />
                </Avatar>
              </Grid>
              <Grid xs={9}>
                <Grid container direction="column">
                  <Typography variant="h7" color="#fff">
                    INFLUENCER BRAND AMBASSADORS
                  </Typography>
                  <Typography color="#fff">
                    We have worked with brands to develop top-© tier influencers
                    into brand ambassadors so they promote products
                    authentically and organically
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box height="70vh" marginTop={7}>
        <Grid
          container
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            height: '100%',
          }}
        >
          <Typography
            variant="h1"
            sx={{typography: {sm: 'h3', xs: 'h4', md: 'h1'}}}
            style={{
              fontWeight: '600',
              textAlign: 'center',
              letterSpacing: '20px',
            }}
          >
            BRANDS
          </Typography>
          <Typography
            color="#fff"
            sx={{typography: {sm: 'h7', xs: 'h6'}}}
            style={{
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Where brands and iconic people meet
          </Typography>
          <Typography
            color="#fff"
            sx={{typography: {sm: 'body1', xs: 'body2'}}}
            style={{
              textAlign: 'center',
              marginTop: '20px',
              width: '50%',
            }}
          >
            The future of communication and marketing is people-driven - no
            matter how many followers you have. It's all about a genuine
            interest in your brand and religility towards your network that will
            drive engagement, awareness, and sales.
          </Typography>
          <Typography
            color="#fff"
            sx={{typography: {sm: 'h7', xs: 'h6'}}}
            style={{
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            Everyone's influence counts
          </Typography>
        </Grid>
      </Box>

      <Box style={{height: '70vh'}} margin={10}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            height: '100%',
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Grid container direction="column">
              <Typography
                variant="h4"
                sx={{typography: {sm: 'h6', xs: 'h5', md: 'h4'}}}
                style={{
                  fontWeight: '600',
                  color: '#E044AD',
                }}
              >
                WE DESIGN EXPERIENCE, NOT ADS
              </Typography>
              <Typography variant="h5" color="#fff" width="80%" letterSpacing={4}>
                We partner with our clients to deliver fully-managed,
                innovative, human-to-human influencer marketing campaigns.
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <img
              src={servicePageImage}
              alt="service"
              style={{height: '100%', width: '100%'}}
            />
          </Grid>
        </Grid>
      </Box>
      <Grid margin={10}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" marginY={5} marginTop={15} color="#E044AD">
            NO CANNED PACKAGES HERE
          </Typography>
          <Typography width="75%" variant="h2" color="#fff">
            Influencer campaigns designed around the objectives and KPIs of each
            client.
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" marginTop={3}>
          <Grid item>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" color="#fff">
                Take a look into our process
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid marginLeft={2} color="#DB4783">
            <EastRoundedIcon />
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" marginTop={3}>
          <Grid item xs={12} sm={4} spacing={2}>
            <Grid container direction="column">
              <ContactEmergencyRoundedIcon
                sx={{color: '#8C384E', fontSize: '50px'}}
              />
              <Typography variant="h5" color="#fff">
                Hands-On
              </Typography>
              <Typography variant="h5" color="#fff">
                Talent Curation Process
              </Typography>
              <Typography
                variant="body1"
                color="#fff"
                letterSpacing={2.5}
                style={{marginTop: '20px'}}
              >
                An influencer marketing agency that sources creators based on
                benchmark metrics - following an extensive, manual selection and
                validation process that extends beyond the parameters of popular
                databases.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} spacing={2}>
            <Grid container direction="column">
              <SpeedRoundedIcon sx={{color: '#8C384E', fontSize: '50px'}} />
              <Typography variant="h5" color="#fff">
                White Glove
              </Typography>
              <Typography variant="h5" color="#fff">
                Campaign Execution
              </Typography>
              <Typography
                variant="body1"
                color="#fff"
                letterSpacing={2.5}
                style={{marginTop: '20px'}}
              >
                Fully engaged from Day 1 to deliver a seamless experience
                between creators and clients throughout the duration of each
                project. An influencer marketing agency committed to serving as
                a direct extension of your brand.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column">
              <EmojiEventsRoundedIcon
                sx={{color: '#8C384E', fontSize: '50px'}}
              />
              <Typography variant="h5" color="#fff">
                Innovative
              </Typography>
              <Typography variant="h5" color="#fff">
                Award-Winning Strategies
              </Typography>
              <Typography
                variant="body1"
                color="#fff"
                letterSpacing={2.5}
                style={{marginTop: '20px'}}
              >
                Designing trend-worthy concepts that help audiences discover
                brands, while building emotional connections that drive consumer
                behavior. Think of us as an influencer marketing agency with an
                experiential attitude.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
