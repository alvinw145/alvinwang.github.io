import React from 'react';
import Grid from '@material-ui/core/Grid';

function About() {
  return(
    <div className="about-me-container">
      <Grid container direction="row">
        <Grid item>
          <h2 style={{marginBottom: 50}}>WHO AM I?</h2>
          <p className="about-me-text"><strong>Hi I'm Alvin Wang!</strong> I'm an undergraduate student
          at the University of <strong style={{color: "blue"}}>M</strong>ichigan pursuing a Bachelor's Degree
          in Computer Science. I am passionate about creating technology that will make a positive impact
          on the world. Whether that's building software to help educate future generations, or helping
          remove the millions of pounds of trash from our oceans.</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
