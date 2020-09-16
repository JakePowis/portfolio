import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/avataaars.png'


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell className="landingContainer" col={12}>
          <div className="landingContent">
            <img
              src={avatar}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Jake Powis</h1>
              <h2>Full Stack Developer</h2>

              <hr />

              <p>HTML/CSS | JavaScript | React | NodeJS | Express | SQL | MongoDB | Firebase</p>

              <div className="social-links">

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
      </div>
    )
  }
}

export default Landing;
