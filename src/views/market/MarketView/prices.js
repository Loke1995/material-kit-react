import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  Text
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  differenceIconUp: {
    color: colors.green[900]
  },
  differenceValueUp: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const data = [
  {
    currencyPair: 'USD/MYR',
    price: '4.12050',
    changes: '-5.30%',
    volume: 'USD 378k',
    timestamp: '23 March 2:07pm'
  },
  {
    currencyPair: 'SGD/MYR',
    price: '3.02050',
    changes: '-0.29%',
    volume: 'SGD 67k',
    timestamp: '23 March 2:07pm'
  },
  {
    currencyPair: 'GBP/MYR',
    price: '5.62050',
    changes: '+1.08%',
    volume: 'GBP 489k',
    timestamp: '23 March 2:07pm'
  },
  {
    currencyPair: 'AUD/MYR',
    price: '2.92050',
    changes: '+0.95%',
    volume: 'AUD 278k',
    timestamp: '23 March 2:07pm'
  }
];

const Prices = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid container lg={12} sm={12} xl={12} xs={12}>
      {data.map(function (ub) {
        return (
          <Grid item lg={3} sm={6} xl={3} xs={12} style={{ padding: '0.5rem' }}>
            <Card>
              <CardContent>
                <Grid container justify="space-between" spacing={1}>
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h6">
                      {ub.currencyPair}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Avatar className={classes.avatar}>
                    <MoneyIcon />
                  </Avatar> */}
                    <Typography color="textSecondary" gutterBottom variant="h6">
                      Vol: {ub.volume}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item>
                    {/* <Typography color="textPrimary" gutterBottom variant="h6">
                    {ub.currencyPair}
                  </Typography> */}
                    <Typography color="textPrimary" variant="h3">
                      {ub.price}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Avatar className={classes.avatar}>
                    <MoneyIcon />
                  </Avatar> */}
                    <Typography color="textSecondary" gutterBottom variant="h6">
                      <span
                        style={{
                          color:
                            ub.changes.substring(1, 0) === '-' ? 'red' : 'green'
                        }}
                      >
                        ({ub.changes})
                      </span>
                    </Typography>
                  </Grid>
                </Grid>

                <Box mt={2} display="flex" alignItems="center">
                  <ArrowDownwardIcon className={classes.differenceIcon} />
                  <Typography
                    className={classes.differenceValue}
                    variant="body2"
                  >
                    12%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    {ub.timestamp}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      {/* <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Grid container justify="space-between" spacing={3}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="h6">
                BUDGET
              </Typography>
              <Typography color="textPrimary" variant="h3">
                $24,000
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <MoneyIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box mt={2} display="flex" alignItems="center">
            <ArrowDownwardIcon className={classes.differenceIcon} />
            <Typography className={classes.differenceValue} variant="body2">
              12%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Since last month
            </Typography>
          </Box>
        </CardContent>
      </Card> */}
    </Grid>
  );
};

Prices.propTypes = {
  className: PropTypes.string
};

export default Prices;
