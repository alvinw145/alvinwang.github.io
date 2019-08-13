import React from 'react';
import { Link } from 'react-router-dom';
import Sections from '../components/Sections';
import Grid from '@material-ui/core/Grid';
import photo from './pic1.jpg';

function Sidebar() {

  const navStyle = {
    color: 'white',
    marginBottom: 0
  };

  return(
    <div className="side-bar">
      <Grid container direction="row" justify="center" alignItems="center">
        <img className="profile-picture" src={photo} alt="My Picture" style={{marginBottom: 30}}/>
        <h2 style={{marginBottom: 5}}>Alvin Wang</h2>
        <p style={{marginBottom: 50, color: 'grey'}}><small>Software Engineer</small></p>
      </Grid>
      <Sections/>
    </div>
  );
}

export default Sidebar;
