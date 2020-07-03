import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Navbar(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar position="sticky">
            <Toolbar className="nav-container">
                <Button color="inherit" font="HelveticaNeue" component={Link} to="/about">About</Button>
                <Button color="inherit" font="HelveticaNeue" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" font="HelveticaNeue" component={Link} to="/resume">Resume</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
  }

