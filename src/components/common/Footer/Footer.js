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

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-section-title">
          got questions? we’re happy to answer every single one of them.
        </div>
        <div className="footer-content">
          <div className="footer-items">
            <div className="footer-item-title">email</div>
            <div
              className="footer-item-content"
              style={{color: 'rgb(54, 137, 251)'}}
            >
              <a href="mailto:creators@domain.in">fansebbhartiya@gmail.com</a>
            </div>
          </div>
          <div className="footer-items onboard-hypd-btn">
            <div className="footer-item-title">are you a brand?</div>
            <div
              className="footer-item-content"
              style={{color: 'rgb(54, 137, 251)', textAlign: 'center'}}
            >
              <button
                className="btn btn-2"
                style={{
                  background:
                    'linear-gradient(90deg, #0171ed 0%, #d001ff 100%)',
                }}
              >
                {' '}
                <a href="https://app.fanseb.com/admin/register">
                  Join Fanseb
                </a>{' '}
              </button>
            </div>
          </div>
          <div className="footer-items">
            <div className="footer-item-title">website</div>
            <div
              className="footer-item-content"
              style={{color: 'rgb(54, 137, 251)'}}
            >
              <a href="https://www.fanseb.com/" target="_blank">
                https://www.fanseb.com/
              </a>
            </div>
          </div>
        </div>
        <div className="social-bar">
          <a href="https://www.facebook.com/fanseb.fanseb" target="_blank">
            <FaFacebookF title="Facebook" />
          </a>
          <a
            href="https://twitter.com/fanseb2?s=11&t=1xCl66zIq7xKS7Lx3Apl_w"
            target="_blank"
          >
            <FaTwitter title="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/fanseb-india-0788b5205"
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
