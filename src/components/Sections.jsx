import React from 'react';
import Grid from '@material-ui/core/Grid';

function Sections() {
  return(
    <Grid container direction="row" justify="center" alignItems="center">
      <ul className="sections">
        <li>About Me</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Photography</li>
        <li>Contact Me</li>
      </ul>
    </Grid>
  );
}

export default Sections;
