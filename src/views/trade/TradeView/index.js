import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from '/src/components/Page';
import PreviewDetails from './PreviewDetails';
import BucketList from './BucketList';
import LatestOrders from './LatestOrders';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TradeView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Customers">
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
