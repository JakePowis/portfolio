import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../images/jp2.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jake Powis</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Passionate about Tech, Business & Finance. Enjoy working across the full stack. Love to learn.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <div className="center"><i className="fa fa-phone-square minWidth" aria-hidden="true" />
                    07895 547 932</div>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <div className="center"><i className="fa fa-envelope minWidth" aria-hidden="true" />
                    jakepowis@gmail.com</div>
                  </ListItemContent>
                </ListItem>




                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <div className="center"> <i className="fa fa-map-marker minWidth" aria-hidden="true" />
                    London, UK</div>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <div className="center"><i className="fa fa-github-square minWidth" aria-hidden="true" />
                      <a href="https://github.com/jakepowis" rel="noopener noreferrer" target="_blank" >github.com/jakepowis</a></div>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
