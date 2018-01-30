import React from 'react';
import { withStyles } from 'material-ui/styles';

import withRoot from '../components/withRoot';
import Layout from '../components/Layout';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cell: {
    padding: 5
  }
});

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div>Index Page</div>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
