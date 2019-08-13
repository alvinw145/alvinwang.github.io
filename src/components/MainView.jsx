import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slideshow from './Slideshow';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Photography from './Photography';
import Contact from './Contact';

function MainView() {
  return(
    <div>
      <Slideshow />
      <About />
      <Projects />
      <Blog />
      <Photography />
      <Contact />
    </div>
  );
}

export default MainView;
