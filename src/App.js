import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<NavLink style={{ textDecoration: 'none', color: 'white' }} to="/"><span className="hover">My WebDev Porfolio</span></NavLink>} scroll>
            <Navigation>
              <NavLink to="/resume" className="hover">Resume</NavLink>
              <NavLink to="/projects" className="hover">Projects</NavLink>
              <NavLink to="/contact" className="hover">Contact</NavLink>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/" >Portfolio</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
