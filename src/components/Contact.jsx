import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return(
    <div className="contact-container">
      <Grid container direction="row">
        <Grid item>
          <h2 style={{marginBottom: 50}}>GET IN TOUCH</h2>
          <p style={{marginBottom: 30}}>Email: alvinw@umich.edu</p>
          <div className="social-media-links">
            <a className="btn" href="https://www.linkedin.com/in/alvin-wang-82163215a/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn" href="https://github.com/alvinw145" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="btn" href="https://www.facebook.com/asdfzvxc" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
