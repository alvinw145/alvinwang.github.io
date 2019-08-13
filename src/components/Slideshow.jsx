import React from 'react';
import Grid from '@material-ui/core/Grid';

function Slideshow() {
  return(
    <div className="slideshow-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <div>
            Picture of me
          </div>
          <div className="resume-btn-container">
            <a href="./Alvin_Wang_Resume.pdf"><button className="resume-btn" type="button">Download Resume</button></a>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Slideshow;
