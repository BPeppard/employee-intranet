import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import withRoot from '../components/withRoot';
import Layout from '../components/Layout';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  })
});

class NewQuestion extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Paper className={classes.paper} elevation={4}>
          <Typography type="headline">New Question</Typography>
        </Paper>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(NewQuestion));
