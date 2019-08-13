import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGulp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Slideshow() {
  /*
    Having a photo where the bottom part is black and i'm leaning over the edge from the top
  */

  return(
    <Grid className="slideshow-container" container direction="row" justify="space-evenly" alignItems="flex-end">
      <Grid item className="btn-container">
        <a href="https://drive.google.com/file/d/1g6WJOu_8KJVHrhVLmqYLwic2jKv0sxQL/view?usp=sharing" target="_blank"><FontAwesomeIcon icon={faGulp} style={{marginRight: 5}}/>Download Resume</a>
      </Grid>
      <Grid item className="btn-container">
        <a href="https://www.linkedin.com/in/alvin-wang-82163215a/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} style={{marginRight: 5}}/>View Linkedin</a>
      </Grid>
      <Grid item className="btn-container">
        <a href="https://github.com/alvinw145" target="_blank"><FontAwesomeIcon icon={faGithub} style={{marginRight: 5}}/>View Github</a>
      </Grid>
    </Grid>
  );
}

export default Slideshow;
