import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from '/src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import Template from './Template';
import TemplateList from './TemplateList';
import FXSpot from './FXSpotList';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PricingListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <Template />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <TemplateList />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {/* <Grid item lg={6} sm={6} xl={6} xs={12}>
            <Template />
          </Grid> */}
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <FXSpot />
          </Grid>
        </Grid>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default PricingListView;
