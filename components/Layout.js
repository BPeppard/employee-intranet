import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';

export const styles = theme => ({
  content: {
    marginTop: 75
  },
  flex: {
    flex: 1
  },
  hand: {
    cursor: 'pointer'
  }
});

export class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Link prefetch href="/">
              <Typography
                type="title"
                color="inherit"
                className={`${classes.flex} ${classes.hand}`}>
                Employee Intranet
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Layout));
