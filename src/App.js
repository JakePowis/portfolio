import React, { Component, useEffect } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';
import gsap from 'gsap';

const App = () => {

  useEffect(() => {

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.35});
    tl.to(".slider", { y: "-100%", duration: 1.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

    tl.fromTo(".hover", { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.5, ease: "power1.in"});
  
   
  }, [])

    return (
      <div className="demo-big-content">

<div>
    <div class="intro">


    <div class="intro-text">
      <h1 class="hide">
        <span class="text">Welcome</span>
      </h1>
      <h1 class="hide">
        <span class="text">To My</span>
      </h1>
      <h1 class="hide">
        <span class="text">Portfolio Page</span>
      </h1>
    </div>


  </div>

  <div class="slider"></div>

  </div>

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

export default App;
