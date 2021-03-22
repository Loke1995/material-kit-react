import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const data = [
  {
    ClientName: 'Peter',
    Type: 'Collar',
    Status: 'Successful',
    Date: '3 Mar 2021 5:00pm',
    PVCurrency: 'SGD',
    PVAmt: '1888.88',
    DeltaCurrency: 'MYR',
    DeltaAmt: '168.00',
    VegaCurrency: 'MYR',
    VegaAmt: '188.88',
    BaseCcy: 'MYR',
    ProfitCurrency: 'Term',
    TermCcy: 'MYR',
    TransactionBaseCcy: 'Buy',
    SalesBDSN: 'Default',
    SalesDGN: 'INTERBANK',
    SalesDSGD: 'INTERBANK TRANSACTION',
    SalesComment: '',
    TradingBDBSN: 'TRG',
    TradingDGN: 'INTERBANK',
    TradingDSGD: 'INTERBANK TRANSACTION',
    FXSpot: '4.057',
    ValueDate: '5 March 2021',
    BaseCcyUSDRate: '1.00000',
    USDMYROpenRate: '4.92500',
    PricingModel: 'Black Scholar',
    CapStrike: '4.1',
    FloorStrile: '4.0',
    Notional: '1000000.00',
    LeverageFactor: '2.0',
    Dates: '1 m'
  }
];

function resetForm() {
  alert('Great Shot!');
}

const PreviewDetails = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <form
        autoComplete="off"
        noValidate
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Card>
          <CardHeader
            // subheader="The information can be edited"
            title="Pricing Details"
          />
          <Divider />
          <TableContainer component={Paper}>
            <Table className="SimpleTable" aria-label="simple table">
              <TableBody>
                {data.map(function (ub) {
                  return (
                    <TableRow>
                      <TableCell style={{ width: '65%' }}>
                        <h3>{ub.ClientName}</h3>
                        <Typography style={{ display: 'inline-block' }}>
                          {ub.Type}{' '}
                          <span style={{ color: '#FFC83D' }}>
                            ({ub.Status})
                          </span>
                        </Typography>
                      </TableCell>
                      <TableCell align="right" style={{ width: '35%' }}>
                        <h3>
                          <span style={{ color: '#FFC83D' }}>PV </span>
                          {ub.PVCurrency} {ub.PVAmt}
                        </h3>
                        {ub.Date}
                        <h3>
                          <span style={{ color: '#FFC83D' }}>Delta </span>
                          {ub.DeltaCurrency} {ub.DeltaAmt}
                        </h3>
                        <h3>
                          <span style={{ color: '#FFC83D' }}>Vega </span>
                          {ub.VegaCurrency} {ub.VegaAmt}
                        </h3>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <CardContent>
            {data.map(function (ub) {
              return (
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Base Ccy"
                      required
                      select
                      variant="outlined"
                      key={ub.BaseCcy}
                      SelectProps={{ native: true }}
                      InputLabelProps={{ shrink: true }}
                    >
                      <option key={ub.BaseCcy} value={ub.BaseCcy}>
                        {ub.BaseCcy}
                      </option>
                      {/* {dropdownlist.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))} */}
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Profit Currency"
                      required
                      variant="outlined"
                      select
                      key={ub.ProfitCurrency}
                      SelectProps={{ native: true }}
                      InputLabelProps={{ shrink: true }}
                    >
                      <option key={ub.ProfitCurrency} value={ub.ProfitCurrency}>
                        {ub.ProfitCurrency}
                      </option>
                      {/* {dropdownlist.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))} */}
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Term Ccy"
                      required
                      variant="outlined"
                      select
                      key={ub.TermCcy}
                      SelectProps={{ native: true }}
                      InputLabelProps={{ shrink: true }}
                    >
                      <option key={ub.TermCcy} value={ub.TermCcy}>
                        {ub.TermCcy}
                      </option>
                      {/* {dropdownlist.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))} */}
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Client Sell or Buy Base Ccy"
                      required
                      variant="outlined"
                      select
                      key={ub.TransactionBaseCcy}
                      SelectProps={{ native: true }}
                      InputLabelProps={{ shrink: true }}
                    >
                      <option
                        key={ub.TransactionBaseCcy}
                        value={ub.TransactionBaseCcy}
                      >
                        {ub.TransactionBaseCcy}
                      </option>
                      {/* {dropdownlist.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))} */}
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Sales BDShortName"
                      required
                      variant="outlined"
                      key={ub.SalesBDSN}
                      value={ub.SalesBDSN}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Sales DGroupName"
                      required
                      variant="outlined"
                      key={ub.SalesDGN}
                      value={ub.SalesDGN}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Sales DSubGrpDesc"
                      required
                      variant="outlined"
                      key={ub.SalesDSGD}
                      value={ub.SalesDSGD}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Sales Comment"
                      required
                      variant="outlined"
                      key={ub.SalesComment}
                      value={ub.SalesComment}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Trading BDBranchShortName"
                      required
                      variant="outlined"
                      key={ub.TradingBDBSN}
                      value={ub.TradingBDBSN}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Trading DGroupName"
                      required
                      variant="outlined"
                      key={ub.TradingDGN}
                      value={ub.TradingDGN}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Trading DSubGrpDec"
                      required
                      variant="outlined"
                      key={ub.TradingDSGD}
                      value={ub.TradingDSGD}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              );
            })}

            <br />
            <Divider />
            <br />
            <Grid container spacing={3}>
              {/* {templateDataSecondPart.map(function (option) {
                if (option.FieldType === 'text') {
                  return (
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label={option.FieldLabel}
                        required
                        variant="outlined"
                        key={option.FieldPlaceHolder}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  );
                } else if (option.FieldType === 'dropdown') {
                  var dropdownlist = option.FieldPlaceHolder.split('|');

                  return (
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label={option.FieldLabel}
                        name="state"
                        required
                        select
                        SelectProps={{ native: true }}
                        key={dropdownlist[0]}
                        variant="outlined"
                      >
                        {dropdownlist.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  );
                } else if (option.FieldType === 'date') {
                  return (
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        name="startDate"
                        label={option.FieldLabel}
                        required
                        SelectProps={{ native: true }}
                        variant="outlined"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  );
                }
              })} */}
            </Grid>

            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                className={classes.importButton}
                color="primary"
                variant="contained"
              >
                Create
              </Button>
              <br />
              <Button
                className={classes.importButton}
                color="third"
                variant="contained"
                type="reset"
                onClick={(e) => {
                  if (!window.confirm('Are you sure to clear all field?'))
                    e.preventDefault();
                }}
              >
                Clear
              </Button>
            </Box>
          </CardContent>
          {/* <Divider /> */}
        </Card>
      </form>

      {/* <Box display="flex" justifyContent="flex-end">
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button color="primary" variant="contained">
          Add customer
        </Button>
      </Box> */}
    </div>
  );
};

PreviewDetails.propTypes = {
  className: PropTypes.string
};

export default PreviewDetails;
