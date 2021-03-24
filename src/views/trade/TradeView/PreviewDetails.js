import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
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
  Typography,
  ButtonBase
} from '@material-ui/core';
import { Container, Row, Col } from 'reactstrap';
import { Search as SearchIcon } from 'react-feather';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { red, green } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  paper: {
    paddingTop: 'auto',
    margin: 'auto',
    width: '100%',
    padding: '0 1rem 1rem 1rem'
  },
  right: {
    textAlign: 'right'
  },
  left: {
    textAlign: 'left'
  },
  priceFormat: {
    textAlign: 'left',
    color: '#FFC83D'
  },
  rightPanel: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const data2 = [
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

const data = [
  {
    ClientName: 'Peter',
    Type: 'Vanilla',
    Status: '',
    Date: '3 Mar 2021 5:00pm',
    PVCurrency: '',
    PVAmt: '',
    DeltaCurrency: '',
    DeltaAmt: '',
    VegaCurrency: '',
    VegaAmt: '',
    BaseCcy: 'MYR|SGD|USD',
    ProfitCurrency: 'Term',
    TermCcy: 'MYR|SGD|USD',
    TransactionBaseCcy: 'Buy|Sell',
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

class PreviewDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  alertMsg = (msg) => {
    alert(msg);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form autoComplete="off" noValidate className={clsx(classes.root)}>
          <Card>
            <CardHeader
              // subheader="The information can be edited"
              title="Preview Details"
            />
            <Divider />
            {data2.map(function (ub) {
              return (
                <div className={classes.root}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item></Grid>
                      <Grid item xs={12} md={12} sm container>
                        <Grid
                          item
                          md={6}
                          xs={6}
                          container
                          direction="column"
                          spacing={2}
                        >
                          <Grid item>
                            <Typography component="h3" variant="h3">
                              {ub.ClientName}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {ub.Type}{' '}
                              {ub.Status ? (
                                <span style={{ color: '#FFC83D' }}>
                                  ({ub.Status})
                                </span>
                              ) : (
                                ''
                              )}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item md={6} xs={6}>
                          {ub.PVAmt ? (
                            <Typography
                              component="h4"
                              variant="h4"
                              className={classes.rightPanel}
                            >
                              <span style={{ color: '#FFC83D' }}>PV </span>
                              <span className={classes.right}>
                                {ub.PVCurrency} {ub.PVAmt}
                              </span>
                            </Typography>
                          ) : (
                            ''
                          )}
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            className={classes.right}
                          >
                            {ub.Date}
                          </Typography>
                          {ub.DeltaAmt ? (
                            <Typography
                              component="h4"
                              variant="h4"
                              className={classes.rightPanel}
                            >
                              <span style={{ color: '#FFC83D' }}>Delta </span>
                              {ub.DeltaCurrency} {ub.DeltaAmt}
                            </Typography>
                          ) : (
                            ''
                          )}
                          {ub.VegaAmt ? (
                            <Typography
                              component="h4"
                              variant="h4"
                              className={classes.rightPanel}
                            >
                              <span style={{ color: '#FFC83D' }}>Vega </span>
                              {ub.VegaCurrency} {ub.VegaAmt}
                            </Typography>
                          ) : (
                            ''
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              );
            })}

            <CardContent>
              {data2.map(function (ub) {
                return (
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Base Ccy"
                        required
                        select
                        variant="outlined"
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                      >
                        {ub.BaseCcy.split('|').map(function (option) {
                          return (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </TextField>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Profit Currency"
                        required
                        variant="outlined"
                        select
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                      >
                        {ub.ProfitCurrency.split('|').map(function (option) {
                          return (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </TextField>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Term Ccy"
                        required
                        variant="outlined"
                        select
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                      >
                        {ub.TermCcy.split('|').map(function (option) {
                          return (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </TextField>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Client Sell or Buy Base Ccy"
                        required
                        variant="outlined"
                        select
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                      >
                        {ub.TransactionBaseCcy.split('|').map(function (
                          option
                        ) {
                          return (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </TextField>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Sales BDShortName"
                        required
                        variant="outlined"
                        key="SalesBDSN"
                        placeholder="Default"
                        defaultValue={ub.SalesBDSN}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Sales DGroupName"
                        required
                        variant="outlined"
                        key="SalesDGN"
                        placeholder="INTERBANK"
                        defaultValue={ub.SalesDGN}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Sales DSubGrpDesc"
                        required
                        variant="outlined"
                        key="SalesDSGD"
                        placeholder="INTERBANK TRANSACTION"
                        defaultValue={ub.SalesDSGD}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Sales Comment"
                        required
                        variant="outlined"
                        key="SalesComment"
                        defaultValue={ub.SalesComment}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Trading BDBranchShortName"
                        required
                        variant="outlined"
                        key="TradingBDBSN"
                        placeholder="TRG"
                        defaultValue={ub.TradingBDBSN}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Trading DGroupName"
                        required
                        variant="outlined"
                        key="TradingDGN"
                        placeholder="INTERBANK"
                        defaultValue={ub.TradingDGN}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Trading DSubGrpDec"
                        required
                        variant="outlined"
                        key="TradingDSGD"
                        placeholder="INTERBANK TRANSACTION"
                        defaultValue={ub.TradingDSGD}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Comment"
                        required
                        variant="outlined"
                        key="SalesComment"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>
                );
              })}

              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  className={classes.importButton}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    this.alertMsg('Saved');
                  }}
                >
                  Save
                </Button>
                <br />
                <Button
                  className={classes.importButton}
                  variant="contained"
                  style={{ backgroundColor: green[500] }}
                  onClick={(e) => {
                    this.alertMsg('Accepted');
                  }}
                >
                  Accept
                </Button>
                <br />
                <Button
                  className={classes.importButton}
                  variant="contained"
                  style={{ backgroundColor: red[500] }}
                  onClick={(e) => {
                    this.alertMsg('Rejected');
                  }}
                >
                  Reject
                </Button>
              </Box>
            </CardContent>
          </Card>
        </form>
      </div>
    );
  }
}

PreviewDetails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PreviewDetails);
