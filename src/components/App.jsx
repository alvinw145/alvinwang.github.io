import React from 'react';
import '../css/App.css';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import MainView from '../components/MainView';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item md={1}>
        </Grid>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={8}>
          <MainView />
        </Grid>
        <Grid item md={1}>
        </Grid>
      </Grid>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

// <Layout className="layout">
//   <Header>
//     <div className="logo">
//     </div>
//     <Menu
//       theme="dark"
//       mode="horizontal"
//       defaultSelectedKeys={['2']}
//       style={{ lineHeight: '64px' }}
//     >
//       <Menu.Item key="1">About Me</Menu.Item>
//       <Menu.Item key="2">Projects</Menu.Item>
//       <Menu.Item key="3">Photography</Menu.Item>
//       <Menu.Item key="4">Resume</Menu.Item>
//     </Menu>
//   </Header>
//   <Content>Content</Content>
//   <Footer style={{ textAlign: "center" }}>Footer</Footer>
// </Layout>
