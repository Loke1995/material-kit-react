import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Badge
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const data = [
  {
    RefreshLive: [
      ['USD/MYR', 4.02],
      ['EUR/MYR', 4.09],
      ['GBP/MYR', 5.12],
      ['AUD/MYR', 3.87],
      ['SGD/MYR', 3.02],
      ['BRN/MYR', 3.02]
    ]
  }
];

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
});

const FXSpotList = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <div>
            <Button
              color="secondary"
              onClick={() => {
                alert('Refreshed');
              }}
            >
              <RefreshIcon />
            </Button>
          </div>
        }
        title={<Badge color="secondary">FXSpot</Badge>}
        subheader="22 March 2021 2:17PM"
      />
      <Divider />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Currency</TableCell>
              <TableCell align="center">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(function (ub) {
              var buttons = ub.RefreshLive.map(function (button) {
                // return <ListItemText primary={`Item ${button[0]}`} />;
                return (
                  <TableRow>
                    <TableCell align="center">{button[0]}</TableCell>
                    <TableCell align="center">{button[1]}</TableCell>
                  </TableRow>
                );
              });
              return buttons;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}

      {/* <List>
        {products.map((product, items) => (
          <ListItem divider={items < product.length - 1} key={product[0]}>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

FXSpotList.propTypes = {
  className: PropTypes.string
};

export default FXSpotList;
