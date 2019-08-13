import React from 'react';
import Grid from '@material-ui/core/Grid';

function About() {
  return(
    <div className="about-me-container" id="about">
      <Grid container direction="row">
        <Grid item>
          <h2 style={{marginBottom: 50}}>WHO AM I?</h2>
          <p className="about-me-text"><strong>Hi I'm Alvin Wang!</strong> I'm an undergraduate student
          at the University of <strong style={{ color: "#ffcb05", fontSize: 20 }}>M</strong>ichigan pursuing a Bachelor's Degree
          in Computer Science. I am passionate about creating technology that will make a positive impact
          on the world. Whether that's building software to help educate future generations, or helping
          remove the millions of pounds of trash from our oceans. When I'm not coding, you'll probably find me tossing a
          frisbee around. I fell in love with the sport of Ultimate Frisbee back in high school and it has taken me all the
          way to playing for the University of Michigan Men's Club team. </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
