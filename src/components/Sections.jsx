import React from 'react';
import Grid from '@material-ui/core/Grid';

function Sections() {
  return(
    <Grid container direction="row" justify="center" alignItems="center">
      <ul className="sections">
        <a href="#about"><li>About Me</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#blog"><li>Blog</li></a>
        <a href="#photography"><li>Photography</li></a>
        <a href="#contact"><li>Contact Me</li></a>
      </ul>
    </Grid>
  );
}

export default Sections;
