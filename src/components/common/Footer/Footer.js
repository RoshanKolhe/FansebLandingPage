import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import Galaxy from '../../Galaxy/Galaxy';
import {Button, Grid, Typography} from '@mui/material';

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-section-title">
          got questions? we’re happy to answer every single one of them.
        </div>
        <Grid container direction="row">
          <Grid item xs={12} sm={4} marginTop={3}>
            <Grid container direction="column">
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  style={{
                    color: '#adb4c7',
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily:'inherit'
                  }}
                >
                  email
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: 'rgb(54, 137, 251)',
                    display: 'flex',
                    fontFamily:'inherit',
                    justifyContent: 'center',
                  }}
                >
                  <a href="mailto:creators@domain.in">
                    connect@fanseb.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} marginTop={3}>
            <Grid container direction="column">
              <Grid
                item
                xs={12}
                sm={4}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: '#adb4c7',
                    fontFamily:'inherit'
                  }}
                >
                  are you a brand?
                </Typography>
                <button
                  className="btn btn-2"
                  style={{
                    marginTop:'25px',
                    background:
                      'linear-gradient(90deg, #0171ed 0%, #d001ff 100%)',
                  }}
                >
                  <a
                    href="https://app.fanseb.com/admin/register"
                    style={{
                      color: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Join Fanseb
                  </a>
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} marginTop={3}>
            <Grid container direction="column">
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  style={{
                    color: '#adb4c7',
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily:'inherit'

                  }}
                >
                  website
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: 'rgb(54, 137, 251)',
                    display: 'flex',
                    fontFamily:'inherit',
                    justifyContent: 'center',
                  }}
                >
                  <a href="https://www.fanseb.com/" target="_blank">
                    https://www.fanseb.com/
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="social-bar">
          <a href="https://www.facebook.com/fanseb.store/" target="_blank">
            <FaFacebookF title="Facebook" />
          </a>
          <a
            href="https://twitter.com/fanseb2?s=11&t=1xCl66zIq7xKS7Lx3Apl_w"
            target="_blank"
          >
            <FaTwitter title="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/fanseb-influencer-marketing-0788b5205/"
            target="_blank"
          >
            <FaLinkedinIn title="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/fanseb.store/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <FaInstagram title="Instagram" />
          </a>
          {/* <a href="#" target="_blank">
            <FaYoutube title="Youtube" />
          </a> */}
        </div>
        <div className="copyright">Fanseb- © 2022. All Rights Reserved.</div>
      </section>
    </>
  );
}
