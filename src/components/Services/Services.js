import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
  const classes = useStyles();
  return (
    <>
      <Grid marginX={10}>
        <Grid container justifyContent="center" mt={5}>
          <Typography color="#fff" fontSize='30px'>OUR SERVICES</Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginY={8}
        >
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
      <Grid marginX={10}>
        <Typography variant="h3" marginY={5} color="#E044AD">
          NO CANNED PACKAGES HERE
        </Typography>
        <Typography width="75%" variant="h2" color="#fff">
          Influencer campaigns designed around the objectives and KPIs of each
          client.
        </Typography>
        <Grid container direction="row" marginTop={3}>
          <Grid item>
            <Typography variant="h5" color="#fff">
              Take a look into our process
            </Typography>
          </Grid>
          <Grid marginLeft={2} color="#DB4783">
            <EastRoundedIcon />
          </Grid>
        </Grid>
        <Grid container direction="row" marginTop={3}>
          <Grid container direction="column">
            <ContactEmergencyRoundedIcon />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
