import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Typography,
  CardContent
} from '@material-ui/core';
import Page from '/src/components/Page';
// import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';
import Prices from './prices';
import CurrencyPair from './currencyPair';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {/* <Prices /> */}
          {/* <div>
            <Grid container lg={12} sm={12} xl={12} xs={12}>
              <Grid item lg={3} sm={6} xl={3} xs={6}>
                <Card>
                  <CardContent>
                    <Grid container justify="space-between" spacing={3}>
                      <Grid item>
                        <Typography
                          color="textPrimary"
                          gutterBottom
                          variant="h6"
                        >
                          USD/MYR
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="h6"
                        >
                          Vol: 123456
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item>
                        <Typography color="textPrimary" variant="h3">
                          4.12
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="h6"
                        >
                          0.5%
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={6}>
                <Card>
                  <CardContent>
                    <Grid container justify="space-between" spacing={3}>
                      <Grid item>
                        <Typography
                          color="textPrimary"
                          gutterBottom
                          variant="h6"
                        >
                          USD/MYR
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="h6"
                        >
                          Vol: 123456
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item>
                        <Typography color="textPrimary" variant="h3">
                          4.125
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="h6"
                        >
                          0.5%
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div> */}

          {/* <Grid container lg={12} sm={12} xl={12} xs={12}> */}
          <Prices />

          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <CurrencyPair />
          </Grid>

          {/* </Grid> */}
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
