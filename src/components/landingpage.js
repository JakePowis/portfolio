import React, { Component, useRef, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/avataaars.png'
import gsap from 'gsap'


const LandingPage = () => {

const bannerText = useRef();
const image = useRef();

const text = document.querySelectorAll(".text")

useEffect(() => {
  const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl2.to(".text2", { y: "0%", duration: 1.25, stagger: 0.25}, "-=0.5");

 
}, [])
 

    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell className="landingContainer" col={12}>
          <div className="landingContent">
            <img
            ref={image}
              src={avatar}
              alt="avatar"
              className="avatar-img"
            />

            <div ref={bannerText} className="banner-text">


            <h1 class="hide">
          <span class="text2">Jake Powis</span>
        </h1>
        <h2 class="hide">
          <span class="text2">Full Stack Developer</span>
        </h2>
        <div class="hide">
          {/* <span class="text width"> */}
          <hr/>
          {/* </span> */}
        </div>
        <h4 class="hide">
          <span class="text2">HTML/CSS | JavaScript | React | NodeJS | Express | SQL | MongoDB | Firebase</span>
        </h4>



              {/* <h1 className="text">Jake Powis</h1>
              <h2 className="text">Full Stack Developer</h2>

              <hr />

              <p className="text">HTML/CSS | JavaScript | React | NodeJS | Express | SQL | MongoDB | Firebase</p> */}

              <div className="social-links text">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/jpowis" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/jakepowis" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

                {/* Youtube */}
                <a href="mailto:jakepowis@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

                


              </div>
            </div>
            </div>
          </Cell>
        </Grid>
        <div class="slider">TEST</div>
      </div>
    )
  }

export default LandingPage;
