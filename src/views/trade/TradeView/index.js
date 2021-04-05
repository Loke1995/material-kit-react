import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from '../../../components/Page';
import PreviewDetails from './PreviewDetails';
import BucketList from './BucketList';
import LatestOrders from './LatestOrders';

// import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

class TradeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketListPick: null
    };
    this.bucketListPick = this.bucketListPick.bind(this);
  }

  bucketListPick(show) {
    this.setState({
      bucketListPick: show
    });
  }

  render() {
    return (
      <Page title="Customers">
        <Container maxWidth={false}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <br />
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <PreviewDetails />

              {/* <PreviewDetails templateID={this.state.bucketListPick} /> */}
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <BucketList methodBucketList={this.bucketListPick} />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>

          {/* <Toolbar />
          <Box mt={3}>
            <Results customers={customers} />
          </Box> */}
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xl={12} xs={12}></Grid>
          </Grid>
          <br />
          <br />
          <br />
        </Container>
      </Page>
    );
  }
}

const TradeView2 = () => {
  const classes = useStyles();

  return (
    <Page title="Customers">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <PreviewDetails />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <BucketList />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>

        {/* <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box> */}
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xl={12} xs={12}></Grid>
        </Grid>
        <br />
        <br />
        <br />
      </Container>
    </Page>
  );
};

export default TradeView;
