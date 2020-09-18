import React, { Component, useRef, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/avataaars.png'
import gsap from 'gsap'


const LandingPage = () => {

const bannerText = useRef();
const image = useRef();

const text = document.querySelectorAll(".text")

useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  // tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  // tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  // tl.fromTo(bannerText.current, {y: "-150%"}, { y: "0%", duration: 1 });

  // tl.fromTo(image.current, { opacity: 0 }, { opacity: 1, duration: 2}, "-=1");
  tl.fromTo(".social-links", { opacity: 0 }, { opacity: 1, duration: 2, stagger: 0.25, ease: "power1.in"}, "-=0.8");
 
  // // tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

 
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
          <span class="text">Jake Powis</span>
        </h1>
        <h2 class="hide">
          <span class="text">Full Stack Developer</span>
        </h2>
        <div class="hide">
          {/* <span class="text width"> */}
          <hr/>
          {/* </span> */}
        </div>
        <h4 class="hide">
          <span class="text">HTML/CSS | JavaScript | React | NodeJS | Express | SQL | MongoDB | Firebase</span>
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
