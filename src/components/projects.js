import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* React - Project 1 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(datavis.jpeg) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">dataVis</div>
              Data visualisation tool for businesses, beautiful customized charts in just a few clicks. Fast, free & simple.
              <br></br>
              <br></br>
              Built with  React, Node.js, Express, PSQL, Chart.js. Frontend hosted on netlify with API hosted on heroku.
            </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/datavis" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://datavis-jp.netlify.app/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* React - Project 2 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(eshop.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">bookStore</div>
              An Amazon inspired online book shop with full shoping cart, checkout and payment functionality.
              <br></br>
              <br></br>
              Built with  React, Redux, Node.js, Express, MongoDB AWS S3, PayPal SDK & hosted on heroku.
            </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/eShop.uk" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://webshop-jp.herokuapp.com/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* React - Project 3 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(logoZM.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">Blood Dontations</div>
              App built for Israeli blood donation charity Zichron Menachem to help their thousands of donors schedule appointments with israel's largest hospitals.
              <br></br>
              <br></br>
              Built purely with React and Firebase & hosted on netlify. English, Hebrew & Arabic.
            </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/bloodDonations" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://blood-donations.netlify.app" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



          {/* React - Project 4 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(stumpymobile.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">stumpy</div>
              Web utility site providing free & simple Image Hosting & Url Shortening services for both mobile & web.
              <br></br>
              <br></br>
              Built with  React, Node.js, Express, MongoDB & hosted on heroku.
            </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/stumpy" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://st-umpy.herokuapp.com/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* JS - Project 1 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(sppok1.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">The Spook List</div>
              A fun web app for searching the best horror movies out there!
              <br></br>
              <br></br>
              Built with Vanilla JS and the open Movie Databse REST API. Hosted on GitHub pages
          </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/SpookList" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://jakepowis.github.io/SpookList/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* JS - Project 2 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(city1.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">cityComplete</div>
              Auto-complete search box for all cities & towns in Israel.
              <br></br>
              <br></br>
              Built with Vanilla JS and Node.js & hosted on heroku.
          </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/cityComplete" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://city-complete.herokuapp.com/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* JS - Project 3 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(calc1.png) center / cover' }} ></CardTitle>
            <CardText>
              <div className="cardTitle">Calculator App</div>
              Simple Calulator web app
              <br></br>
              <br></br>
              Built with Vanilla JS & hosted on CodePen.
          </CardText>
            <CardActions border>
              <a href="https://codepen.io/jakepowis/pen/mdJWLGq" target="_blank">
                <Button colored>CodePen</Button>
              </a>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )

    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* TS - Project 1 */}
          <Card shadow={5} style={{ minWidth: '550', minHeight: '420px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(https://res.cloudinary.com/practicaldev/image/fetch/s--psjBBshe--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/bq5nm2vl3thxju1l5y24.png) center / cover' }} >WIP</CardTitle>
            <CardText>
              <div className="cardTitle">Current Project: FinanceLogger </div>
              A finance app to log incoming & outgoing payments to help manage cashflow.
              <br></br>
              <br></br>
              Built with TypeScript, Node,js, Express.
              <br />
              <br />
              Not yet live.
        </CardText>
            <CardActions border>
              <a href="https://github.com/JakePowis/eShop.uk" target="_blank">
                <Button disabled colored>GitHub</Button>
              </a>
              <a href="https://webshop-jp.herokuapp.com/" target="_blank">
                <Button disabled colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>
      )
    }

  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>TypeScript</Tab>

        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
