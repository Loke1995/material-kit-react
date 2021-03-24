import React, { useState, setState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Badge,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const data = [
  {
    TemplateName: 'Vanilla for Joe',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'RM',
    TemplateAmount: '999999',
    TemplateDate: '3 Mar 3:05pm'
  },
  {
    TemplateName: 'Seagull for Alxerson Chan Keong Keong',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'USD',
    TemplateAmount: '168999',
    TemplateDate: '5 Mar 4:05pm'
  },
  {
    TemplateName: 'Collar for Mohamad Abdullah Ahmad Ibrahim',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'USD',
    TemplateAmount: '388',
    TemplateDate: '6 Mar 5:05pm'
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

const TemplateList = ({ className, ...rest }) => {
  const classes = useStyles();

  let hidingOn = useState(false);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <div>
            <Button
              color="secondary"
              onClick={() => {
                alert('Hide');
                // this.setState({ hidingOn: false });
                // this.useState.hidingOn ? alert('Show') : alert('Hide');
              }}
            >
              <VisibilityOffIcon />
            </Button>
          </div>
        }
        title={<Badge color="secondary">Template Listing</Badge>}
        // subheader="22 March 2021"
      />
      <Divider />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead>
            <TableRow>
              <TableCell align="center">Currency</TableCell>
              <TableCell align="center">Rate</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {data.map(function (item) {
              return (
                <TableRow>
                  <TableCell style={{ width: '65%' }}>
                    <h3>{item.TemplateName}</h3>{' '}
                    <Typography style={{ display: 'inline-block' }}>
                      {item.TemplateStatus}
                    </Typography>
                  </TableCell>

                  <TableCell style={{ width: '35%' }}>
                    <h3>
                      {item.TemplateCurrency} {item.TemplateAmount}
                    </h3>
                    <Typography style={{ display: 'inline-block' }}>
                      {item.TemplateDate}
                    </Typography>
                  </TableCell>
                  {/* <TableCell
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }}
                  >
                    <TableCell>
                    {item.TemplateCurrency} {item.TemplateAmount}
                  </TableCell>
                  </TableCell> */}
                </TableRow>
              );
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
      {/* <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
};

TemplateList.propTypes = {
  className: PropTypes.string
};

export default TemplateList;
