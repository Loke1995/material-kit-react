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

import RefreshIcon from '@material-ui/icons/Refresh';
import CreateIcon from '@material-ui/icons/Create';

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
  },
  //style for font size
  resize: {
    fontSize: 12
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

const seagull = {
  'Test::Structure': [
    ['Sales Folder Name', 'MYFOP_TR1', "'=SFolder_ShortName", null],
    ['Trading Folder Name', 'MYFOP_TR9', "'=SFolder_ShortName", null],
    ['Customer Name', '03ANSH', "'=SCpty_ShortName", null],
    ['Base Ccy', 'USD', 'USD,EUR,AUD,SGD,JPY,GBP,CNH,NZD,CAD', null],
    ['Profit Currency', 'Term', 'Term', null],
    ['Term Ccy', 'MYR', 'SGD,MYR', null],
    ['Client to Sell or Buy Base Ccy', 'Buy', 'Buy,Sell', null]
    // ['FxSpot', 4.27075, null, null],
    // ['Value Date', '08-Oct-20', null, 'd-mmm-yy'],
    // ['BaseCcyUSDRate', 1, null, '#,##0.0000_);[Red](#,##0.0000)'],
    // ['USDMYROpenRate', 4.27075, null, '#,##0.0000_);[Red](#,##0.0000)'],
    // ['Pricing Model', 'Black-Scholes', 'Black-Scholes,Vanna-Volga', null],
    // ['Upper Strike', 4.280749999999999, '', null],
    // ['Middle Strike', 4.2757499999999995, '', null],
    // ['Lower Strike', 4.26575, '', null],
    // ['Notional', 10000, '', null],
    // ['Leverage Factor', 1.2, '', null]
    // ['Dates', '1m', '1m,2m', null],
    // ['Status', '', '', ''],
    // ['PV', '', '', ''],
    // ['Delta', '', '', ''],
    // ['Vega', '', '', '']
  ]
};

const vanilla = {
  'Test::Structure': [
    ['Sales Folder Name', 'MYFOP_TR1', "'=SFolder_ShortName", null],
    ['Trading Folder Name', 'MYFOP_TR9', "'=SFolder_ShortName", null],
    ['Customer Name', '03ANSH', "'=SCpty_ShortName", null],
    ['Base Ccy', 'USD', 'USD,EUR,AUD,SGD,JPY,GBP,CNH,NZD,CAD', null],
    ['Profit Currency', 'Term', 'Term', null],
    ['Term Ccy', 'MYR', 'SGD,MYR', null],
    ['Client to Sell or Buy Base Ccy', 'Buy', 'Buy,Sell', null],
    // ['FxSpot', 4.27075, null, null],
    // ['Value Date', '08-Oct-20', null, 'd-mmm-yy'],
    // ['BaseCcyUSDRate', 1, null, '#,##0.0000_);[Red](#,##0.0000)'],
    // ['USDMYROpenRate', 4.27075, null, '#,##0.0000_);[Red](#,##0.0000)'],
    ['Pricing Model', 'Black-Scholes', 'Black-Scholes,Vanna-Volga', null],
    ['Option Type', 'Call', null, null],
    ['Direction', 'Client buys', null, null],
    ['Pricing View', 'Two-way Price', null, null],

    ['Strike', 4.149, '', null],
    ['PointsOverride', null, '', null],
    ['VolOverride', null, '', null],
    ['Notional', 10000, '', null],
    ['Dates', '1m', '1m,2m', null]
    // ['Status', '', '', ''],

    // ['PV', '', '', ''],
    // ['Delta', '', '', ''],
    // ['Vega', '', '', '']
  ]
};

const lowerPart = {
  'Test::Structure': [
    ['FxSpot', 4.27075, null, null],
    ['Value Date', '08-Oct-20', null, 'd-mmm-yy'],
    ['BaseCcyUSDRate', 1, null, '#,##0.0000_);[Red](#,##0.0000)'],
    ['USDMYROpenRate', 4.27075, null, '#,##0.0000_);[Red](#,##0.0000)'],
    ['Pricing Model', 'Black-Scholes', 'Black-Scholes,Vanna-Volga', null],
    ['Upper Strike', 4.280749999999999, '', null],
    ['Middle Strike', 4.2757499999999995, '', null],
    ['Lower Strike', 4.26575, '', null],
    ['Notional', 10000, '', null],
    ['Leverage Factor', 1.2, '', null][('Dates', '1m', '1m,2m', null)],
    ['Status', '', '', ''],
    ['PV', '', '', ''],
    ['Delta', '', '', ''],
    ['Vega', '', '', '']
  ]
};

function resetForm() {
  alert('Great Shot!');
}

class CreateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPV: data,
      newTest: seagull,
      pricingV: true,
      fxspot: 4.1057,
      templateName: this.props.templateName,
      templateType: this.props.templateType,
      pvData: this.props.pvData
    };
    this.hideButton = this.hideButton.bind(this);
    this.updateFXSpot = this.updateFXSpot.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // renderPricing = () => {
  //   var arr = [];
  //   Object.keys(data3).forEach(function (key) {
  //     arr.push(data3[key]);
  //   });

  //   return data3.['FXStructurePricingResponse::Headers'].map((item, index) => (
  //     <Grid item md={6} xs={12}>
  //         <TextField
  //           fullWidDataTransferItemList
  //           label={item}
  //           required
  //           variant="outlined"
  //           value={data3.['FXStructurePricingResponse::DealDetails'][0][index]}
  //           InputLabelProps={{ shrink: true }}
  //         />
  //       </Grid>
  //   ))

  //   for (var key in data3.['FXStructurePricingResponse::Headers']) {
  //     return (
  //       <Grid item md={6} xs={12}>
  //         <TextField
  //           fullWidth
  //           label={data3.['FXStructurePricingResponse::Headers'][key]}
  //           required
  //           variant="outlined"
  //           value={data3.['FXStructurePricingResponse::Headers'][key]}
  //           InputLabelProps={{ shrink: true }}
  //         />
  //       </Grid>
  //     );
  //   }

  //   return (
  //     <Grid item md={6} xs={12}>
  //       <TextField
  //         fullWidth
  //         label={data3.['FXStructurePricingResponse::Headers'].length}
  //         required
  //         variant="outlined"
  //         value={data3.['FXStructurePricingResponse::Headers']}
  //         InputLabelProps={{ shrink: true }}
  //       />
  //     </Grid>
  //   );

  // return (
  //   <Grid item md={6} xs={12}>
  //     <TextField
  //       fullWidth
  //       label={data3.['FXStructurePricingResponse::VEGA']}
  //       required
  //       variant="outlined"
  //       InputLabelProps={{ shrink: true }}
  //     />
  //   </Grid>
  // );
  // var ret;
  // for (var key in data3) {
  //   ret += (
  //     <Grid item md={6} xs={12}>
  //       <TextField
  //         fullWidth
  //         label={key}
  //         required
  //         variant="outlined"
  //         InputLabelProps={{ shrink: true }}
  //       />
  //     </Grid>
  //   );
  // }
  // return ret;

  // };

  hideButton(item) {
    this.setState({
      pricingV: item
    });
  }

  updateFXSpot() {
    const min = -0.1;
    const max = 0.1;
    const rand = min + Math.random() * (max - min);

    this.setState({
      fxspot: this.state.fxspot + rand
    });
  }

  // pricingMove = () => {
  //   this.setState((currentState) => {
  //     return { pricingV: !this.state.pricingV };
  //   });
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  render() {
    const { classes } = this.props;
    const { fxspot, pricingV, pvData } = this.state;
    return (
      <div className={classes.root}>
        <form autoComplete="off" noValidate className={clsx(classes.root)}>
          <Card>
            <CardHeader
              // subheader="The information can be edited"
              // title="Create Pricing Details"
              title={
                <h4 style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <CreateIcon style={{ paddingRight: '5px' }} /> Create Pricing
                  Details
                </h4>
              }
              style={{
                backgroundColor: 'gray',
                color: 'white',
                height: '2.5rem'
              }}
            />
            <Divider />
            {/* <h1>{this.props.templateName}</h1>
            <h1>{this.props.templateType}</h1> */}
            <CardContent>
              {/* <Grid container spacing={3}>
                {newTest['Test::Structure'] ? (
                  newTest['Test::Structure'].map(function (option) {
                    if (option[0].toLowerCase().indexOf('date') > -1) {
                      return (
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            name={option[0]}
                            label={option[0]}
                            required
                            SelectProps={{ native: true }}
                            variant="outlined"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                      );
                    } else {
                      return (
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label={option[0]}
                            required
                            variant="outlined"
                            key={option[1]}
                            placeholder={option[1]}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                      );
                    }
                  })
                ) : (
                  <Grid> </Grid>
                )}
              </Grid> */}
              {/* <br />
              <Divider />
              <br /> */}
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Sales Folder Name"
                    required
                    variant="outlined"
                    // key="SalesBDSN"
                    placeholder="MYFOP_TR1"
                    value={this.state.value}
                    onChange={this.handleChange}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Trading Folder Name"
                    required
                    variant="outlined"
                    // key="SalesBDSN"
                    placeholder="MYFOP_TR9"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Customer Name"
                    required
                    variant="outlined"
                    // key="SalesBDSN"
                    placeholder="03ANSH"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Base Ccy"
                    required
                    select
                    variant="outlined"
                    SelectProps={{ native: true }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  >
                    {data2[0].BaseCcy.split('|').map(function (option) {
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
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  >
                    {data2[0].ProfitCurrency.split('|').map(function (option) {
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
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  >
                    {data2[0].TermCcy.split('|').map(function (option) {
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
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  >
                    {data2[0].TransactionBaseCcy.split('|').map(function (
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
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Sales DGroupName"
                    required
                    variant="outlined"
                    key="SalesDGN"
                    // placeholder="INTERBANK"
                    placeholder={this.state.templateName}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                {/* {alert(this.state.templateName)} */}
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Sales DSubGrpDesc"
                    required
                    variant="outlined"
                    key="SalesDSGD"
                    placeholder="INTERBANK TRANSACTION"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Sales Comment"
                    required
                    variant="outlined"
                    key="SalesComment"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
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
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
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
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
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
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="FXSpot"
                    required
                    disabled
                    variant="outlined"
                    key="TradingDSGD"
                    value={fxspot.toLocaleString(undefined, {
                      minimumFractionDigits: 5
                    })}
                    InputProps={{
                      endAdornment: (
                        <Button
                          onClick={(e) => {
                            // alert('Refreshed');
                            this.updateFXSpot();
                          }}
                        >
                          <RefreshIcon style={{ color: 'blue' }} />
                        </Button>
                      ),
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Value Date"
                    required
                    variant="outlined"
                    key="ValueDate"
                    placeholder=""
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="BaseCcyUSDRate"
                    required
                    variant="outlined"
                    key="BaseCcyUSDRate"
                    value="1.00000"
                    disabled
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="USDMYROpenRate"
                    required
                    variant="outlined"
                    key="USDMYROpenRate"
                    placeholder="1"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Pricing Model"
                    required
                    variant="outlined"
                    key="PricingModel"
                    placeholder="Black Scholar"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Cap Strike"
                    required
                    variant="outlined"
                    key="CapStrike"
                    placeholder="4.1"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Floor Strike"
                    required
                    variant="outlined"
                    key="FloorStrike"
                    placeholder="4.0"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Notional"
                    required
                    variant="outlined"
                    key="Notional"
                    placeholder="1,000,000.00"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Leverage Factor"
                    required
                    variant="outlined"
                    key="LeverageFactor"
                    placeholder="2.0"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Date"
                    required
                    variant="outlined"
                    select
                    SelectProps={{ native: true }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      classes: {
                        input: classes.resize
                      }
                    }}
                  >
                    <option key={'weekly'} value={'weekly'}>
                      Weekly
                    </option>
                    <option key={'monthly'} value={'monthly'}>
                      Monthly
                    </option>
                    <option key={'quarterly'} value={'quarterly'}>
                      Quarterly
                    </option>
                    <option key={'halfYearly'} value={'halfYearly'}>
                      Half Yearly
                    </option>
                    <option key={'yearly'} value={'yearly'}>
                      Yearly
                    </option>
                  </TextField>
                </Grid>
              </Grid>
              <br />
              {pricingV ? (
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Save');
                      this.setState({
                        dataPV: data2
                      });
                      this.hideButton(false);
                      // this.props.methodCustomizeTemplate(true);
                      // this.props.methodShowPricingTemplate(false);
                      // this.props.methodMoreOption(false);
                    }}
                  >
                    Save
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Customize Pricing');
                      this.setState({
                        dataPV: data2
                      });
                      this.hideButton(false);
                      this.props.methodCustomizeTemplate(true);
                      this.props.methodShowPricingTemplate(false);
                      this.props.methodMoreOption(false);
                    }}
                  >
                    Customize
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Load Pricing');
                      this.setState({
                        dataPV: data2
                      });
                      this.hideButton(false);
                      this.props.methodShowPricingTemplate(true);
                      this.props.methodCustomizeTemplate(false);
                      this.props.methodMoreOption(false);
                    }}
                  >
                    Pricing
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    variant="contained"
                    type="reset"
                    onClick={(e) => {
                      var result = window.confirm(
                        'Are you sure to clear all field?'
                      );
                      if (result) {
                        this.setState({
                          dataPV: data
                        });
                        this.props.methodShowPricingTemplate(false);
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    Clear
                  </Button>
                </Box>
              ) : (
                <Box></Box>
              )}
            </CardContent>

            {/* <CardContent>
              {this.renderPricing()}
              <TextField
                fullWidth
                label={data3.ObjectType}
                required
                variant="outlined"
                key="SalesBDSN"
                placeholder="Default"
                InputLabelProps={{ shrink: true }}
              />
            </CardContent> */}

            {/* <CardContent>
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
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Trading DSubGrpDec"
                        required
                        disabled
                        variant="outlined"
                        key="TradingDSGD"
                        value="4.057"
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={(e) => {
                                alert('Refreshed');
                              }}
                            >
                              <RefreshIcon style={{ color: 'blue' }} />
                            </Button>
                          )
                        }}
                      />
                    </Grid>
                  </Grid>
                );
              })}

              <br />

              {pricingV ? (
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Load Pricing');
                      this.setState({
                        dataPV: data2
                      });
                      this.hideButton(false);
                    }}
                  >
                    Pricing
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    variant="contained"
                    type="reset"
                    onClick={(e) => {
                      var result = window.confirm(
                        'Are you sure to clear all field?'
                      );
                      if (result) {
                        this.setState({
                          dataPV: data
                        });
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    Clear
                  </Button>
                </Box>
              ) : (
                <Box></Box>
              )}
            </CardContent> */}

            {/* {this.state.dataPV.map(function (ub) {
              return (
                <div className={classes.root}> */}
            {/* {pricingV ? (
              <Box></Box>
            ) : (
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
                          {this.state.dataPV[0].ClientName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {this.state.dataPV[0].Type}{' '}
                          {this.state.dataPV[0].Status ? (
                            <span style={{ color: '#FFC83D' }}>
                              ({this.state.dataPV[0].Status})
                            </span>
                          ) : (
                            ''
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      {this.state.dataPV[0].PVAmt ? (
                        <Typography
                          component="h4"
                          variant="h4"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>PV </span>
                          <span className={classes.right}>
                            {this.state.dataPV[0].PVCurrency}{' '}
                            {this.state.dataPV[0].PVAmt}
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
                        {this.state.dataPV[0].Date}
                      </Typography>
                      {this.state.dataPV[0].DeltaAmt ? (
                        <Typography
                          component="h4"
                          variant="h4"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>Delta </span>
                          {this.state.dataPV[0].DeltaCurrency}{' '}
                          {this.state.dataPV[0].DeltaAmt}
                        </Typography>
                      ) : (
                        ''
                      )}
                      {this.state.dataPV[0].VegaAmt ? (
                        <Typography
                          component="h4"
                          variant="h4"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>Vega </span>
                          {this.state.dataPV[0].VegaCurrency}{' '}
                          {this.state.dataPV[0].VegaAmt}
                        </Typography>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Trade Reviewing');
                      this.setState({
                        dataPV: data
                      });
                      this.hideButton(true);
                      this.props.methodShowPricingTemplate(false);
                      this.props.methodCreateTemplate(false);
                    }}
                  >
                    Review
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Trade has been sent to booking.');
                      this.setState({
                        dataPV: data
                      });
                      this.hideButton(true);
                      this.props.methodShowPricingTemplate(false);
                      this.props.methodCreateTemplate(false);
                    }}
                  >
                    Book
                  </Button>
                </Box>
              </Paper>
            )} */}

            {pricingV ? (
              <Box></Box>
            ) : (
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
                        <Typography component="h5" variant="h5">
                          {this.state.dataPV[0].ClientName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {this.state.dataPV[0].Type} {this.state.pvData}
                          {this.state.dataPV[0].Status ? (
                            <span style={{ color: '#FFC83D' }}>
                              ({this.state.dataPV[0].Status})
                            </span>
                          ) : (
                            ''
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      {this.state.dataPV[0].PVAmt ? (
                        <Typography
                          component="h5"
                          variant="h5"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>PV </span>
                          <span className={classes.right}>
                            {this.state.dataPV[0].PVCurrency}{' '}
                            {this.state.dataPV[0].PVAmt}
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
                        {this.state.dataPV[0].Date}
                      </Typography>
                      {this.state.dataPV[0].DeltaAmt ? (
                        <Typography
                          component="h5"
                          variant="h5"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>Delta </span>
                          {this.state.dataPV[0].DeltaCurrency}{' '}
                          {this.state.dataPV[0].DeltaAmt}
                        </Typography>
                      ) : (
                        ''
                      )}
                      {this.state.dataPV[0].VegaAmt ? (
                        <Typography
                          component="h5"
                          variant="h5"
                          className={classes.rightPanel}
                        >
                          <span style={{ color: '#FFC83D' }}>Vega </span>
                          {this.state.dataPV[0].VegaCurrency}{' '}
                          {this.state.dataPV[0].VegaAmt}
                        </Typography>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Trade Reviewing');
                      this.setState({
                        dataPV: data
                      });
                      this.hideButton(true);
                      this.props.methodShowPricingTemplate(false);
                      this.props.methodCreateTemplate(false);
                      this.props.methodCustomizeTemplate(false);
                    }}
                  >
                    Review
                  </Button>
                  <br />
                  <Button
                    className={classes.importButton}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      alert('Trade has been sent to booking.');
                      this.setState({
                        dataPV: data
                      });
                      this.hideButton(true);
                      this.props.methodShowPricingTemplate(false);
                      this.props.methodCreateTemplate(false);
                      this.props.methodCustomizeTemplate(false);
                    }}
                  >
                    Book
                  </Button>
                </Box>
              </Paper>
            )}

            {/* </div>
              );
            })} */}
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
  }
}
// export default function CreateDetails2() {
//   const classes = useStyles();

//   return (
//     <div className={clsx(classes.root)}>
//       <form autoComplete="off" noValidate className={clsx(classes.root)}>
//         <Card>
//           <CardHeader
//             // subheader="The information can be edited"
//             title="Create Details"
//           />
//           <Divider />

//           {/* {data.map(function (ub) {
//                 return (
//                   <div className={classes.root}>
//                     <div className={classes.details}>
//                       <CardContent className={classes.content}>
//                         <Typography component="h4" variant="h4">
//                           {ub.ClientName}
//                         </Typography>
//                         <Typography variant="subtitle1" color="textSecondary">
//                           {ub.Type}{' '}
//                           <span style={{ color: '#FFC83D' }}>({ub.Status})</span>
//                         </Typography>
//                       </CardContent>
//                     </div>
//                     <div className={classes.details}>
//                       <CardContent
//                         className={classes.content}
//                         style={{ textAlign: 'right' }}
//                       >
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>PV </span>
//                           {ub.PVCurrency} {ub.PVAmt}
//                         </Typography>
//                         <Typography variant="subtitle1" color="textSecondary">
//                           {ub.Date}
//                         </Typography>
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>Delta </span>
//                           {ub.DeltaCurrency} {ub.DeltaAmt}
//                         </Typography>
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>Vega </span>
//                           {ub.VegaCurrency} {ub.VegaAmt}
//                         </Typography>
//                       </CardContent>
//                     </div>
//                   </div>
//                 );
//               })} */}
//           {/* <TableContainer component={Paper}>
//                 <Table className="SimpleTable" aria-label="simple table">

//                     {data.map(function (ub) {
//                       return (
//                         <TableBody>
//                           <TableRow>
//                             <TableCell style={{ width: '60%' }}>
//                               <h3>{ub.ClientName}</h3>
//                               <Typography style={{ display: 'inline-block' }}>
//                                 {ub.Type}{' '}
//                                 <span style={{ color: '#FFC83D' }}>
//                                   ({ub.Status})
//                                 </span>
//                               </Typography>
//                               <Typography style={{ display: 'inline-block' }}>
//                                 <br/>
//                               </Typography>
//                               <br/>
//                             </TableCell>
//                             <TableCell align="right" style={{ width: '40%' }}>
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>PV </span>
//                                 {ub.PVCurrency} {ub.PVAmt}
//                               </h3>
//                               {ub.Date}
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>Delta </span>
//                                 {ub.DeltaCurrency} {ub.DeltaAmt}
//                               </h3>
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>Vega </span>
//                                 {ub.VegaCurrency} {ub.VegaAmt}
//                               </h3>
//                             </TableCell>
//                           </TableRow>

//                         </TableBody>

//                       );
//                     })}

//                 </Table>
//               </TableContainer> */}

//           <CardContent>
//             {data2.map(function (ub) {
//               return (
//                 <Grid container spacing={3}>
//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Base Ccy"
//                       required
//                       select
//                       variant="outlined"
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.BaseCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Profit Currency"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.ProfitCurrency.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Term Ccy"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.TermCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Client Sell or Buy Base Ccy"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.TransactionBaseCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales BDShortName"
//                       required
//                       variant="outlined"
//                       key="SalesBDSN"
//                       placeholder="Default"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales DGroupName"
//                       required
//                       variant="outlined"
//                       key="SalesDGN"
//                       placeholder="INTERBANK"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales DSubGrpDesc"
//                       required
//                       variant="outlined"
//                       key="SalesDSGD"
//                       placeholder="INTERBANK TRANSACTION"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales Comment"
//                       required
//                       variant="outlined"
//                       key="SalesComment"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading BDBranchShortName"
//                       required
//                       variant="outlined"
//                       key="TradingBDBSN"
//                       placeholder="TRG"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading DGroupName"
//                       required
//                       variant="outlined"
//                       key="TradingDGN"
//                       placeholder="INTERBANK"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading DSubGrpDec"
//                       required
//                       variant="outlined"
//                       key="TradingDSGD"
//                       placeholder="INTERBANK TRANSACTION"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>
//                 </Grid>
//               );
//             })}

//             <br />
//             <Divider />
//             <br />

//             {/* <Grid container spacing={3}> */}
//             {/* {templateDataSecondPart.map(function (option) {
//                     if (option.FieldType === 'text') {
//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             label={option.FieldLabel}
//                             required
//                             variant="outlined"
//                             key={option.FieldPlaceHolder}
//                             InputLabelProps={{ shrink: true }}
//                           />
//                         </Grid>
//                       );
//                     } else if (option.FieldType === 'dropdown') {
//                       var dropdownlist = option.FieldPlaceHolder.split('|');

//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             label={option.FieldLabel}
//                             name="state"
//                             required
//                             select
//                             SelectProps={{ native: true }}
//                             key={dropdownlist[0]}
//                             variant="outlined"
//                           >
//                             {dropdownlist.map((option) => (
//                               <option key={option} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </TextField>
//                         </Grid>
//                       );
//                     } else if (option.FieldType === 'date') {
//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             name="startDate"
//                             label={option.FieldLabel}
//                             required
//                             SelectProps={{ native: true }}
//                             variant="outlined"
//                             type="date"
//                             InputLabelProps={{ shrink: true }}
//                           />
//                         </Grid>
//                       );
//                     }
//                   })} */}
//             {/* </Grid> */}

//             <Box display="flex" justifyContent="flex-end" p={2}>
//               <Button
//                 className={classes.importButton}
//                 color="primary"
//                 variant="contained"
//                 onClick={() => {
//                   alert('Created');
//                 }}
//               >
//                 Generate
//               </Button>
//               <br />
//               <Button
//                 className={classes.importButton}
//                 // color=""
//                 variant="contained"
//                 type="reset"
//                 onClick={(e) => {
//                   if (!window.confirm('Are you sure to clear all field?'))
//                     e.preventDefault();
//                 }}
//               >
//                 Clear
//               </Button>
//             </Box>
//           </CardContent>

//           {data.map(function (ub) {
//             return (
//               <div className={classes.root}>
//                 <Paper className={classes.paper}>
//                   <Grid container spacing={2}>
//                     <Grid item></Grid>
//                     <Grid item xs={12} md={12} sm container>
//                       <Grid
//                         item
//                         md={6}
//                         xs={6}
//                         container
//                         direction="column"
//                         spacing={2}
//                       >
//                         <Grid item>
//                           <Typography component="h3" variant="h3">
//                             {ub.ClientName}
//                           </Typography>
//                           <Typography variant="subtitle1" color="textSecondary">
//                             {ub.Type}{' '}
//                             {ub.Status ? (
//                               <span style={{ color: '#FFC83D' }}>
//                                 ({ub.Status})
//                               </span>
//                             ) : (
//                               ''
//                             )}
//                           </Typography>
//                         </Grid>
//                       </Grid>
//                       <Grid item md={6} xs={6}>
//                         {ub.PVAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>PV </span>
//                             <span className={classes.right}>
//                               {ub.PVCurrency} {ub.PVAmt}
//                             </span>
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                         <Typography
//                           variant="subtitle2"
//                           color="textSecondary"
//                           className={classes.right}
//                         >
//                           {ub.Date}
//                         </Typography>
//                         {ub.DeltaAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>Delta </span>
//                             {ub.DeltaCurrency} {ub.DeltaAmt}
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                         {ub.VegaAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>Vega </span>
//                             {ub.VegaCurrency} {ub.VegaAmt}
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                       </Grid>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </div>
//             );
//           })}
//         </Card>
//       </form>

//       {/* <Box display="flex" justifyContent="flex-end">
//         <Button className={classes.importButton}>Import</Button>
//         <Button className={classes.exportButton}>Export</Button>
//         <Button color="primary" variant="contained">
//           Add customer
//         </Button>
//       </Box> */}
//     </div>
//   );
// }

// const PreviewDetails2 = ({ className, ...rest }) => {
//   // class PreviewDetails extends React.Component {
//   //   render() {
//   const classes = useStyles();
//   return (
//     <div className={clsx(classes.root, className)} {...rest}>
//       <form
//         autoComplete="off"
//         noValidate
//         className={clsx(classes.root, className)}
//         {...rest}
//       >
//         <Card>
//           <CardHeader
//             // subheader="The information can be edited"
//             title="Create Details"
//           />
//           <Divider />
//           {data.map(function (ub) {
//             return (
//               <div className={classes.root}>
//                 <Paper className={classes.paper}>
//                   <Grid container spacing={2}>
//                     <Grid item></Grid>
//                     <Grid item xs={12} md={12} sm container>
//                       <Grid
//                         item
//                         md={6}
//                         xs={6}
//                         container
//                         direction="column"
//                         spacing={2}
//                       >
//                         <Grid item>
//                           <Typography component="h3" variant="h3">
//                             {ub.ClientName}
//                           </Typography>
//                           <Typography variant="subtitle1" color="textSecondary">
//                             {ub.Type}{' '}
//                             {ub.Status ? (
//                               <span style={{ color: '#FFC83D' }}>
//                                 ({ub.Status})
//                               </span>
//                             ) : (
//                               ''
//                             )}
//                           </Typography>
//                         </Grid>
//                       </Grid>
//                       <Grid item md={6} xs={6}>
//                         {ub.PVAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>PV </span>
//                             <span className={classes.right}>
//                               {ub.PVCurrency} {ub.PVAmt}
//                             </span>
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                         <Typography
//                           variant="subtitle2"
//                           color="textSecondary"
//                           className={classes.right}
//                         >
//                           {ub.Date}
//                         </Typography>
//                         {ub.DeltaAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>Delta </span>
//                             {ub.DeltaCurrency} {ub.DeltaAmt}
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                         {ub.VegaAmt ? (
//                           <Typography
//                             component="h4"
//                             variant="h4"
//                             className={classes.rightPanel}
//                           >
//                             <span style={{ color: '#FFC83D' }}>Vega </span>
//                             {ub.VegaCurrency} {ub.VegaAmt}
//                           </Typography>
//                         ) : (
//                           ''
//                         )}
//                       </Grid>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </div>
//             );
//           })}
//           {/* {data.map(function (ub) {
//                 return (
//                   <div className={classes.root}>
//                     <div className={classes.details}>
//                       <CardContent className={classes.content}>
//                         <Typography component="h4" variant="h4">
//                           {ub.ClientName}
//                         </Typography>
//                         <Typography variant="subtitle1" color="textSecondary">
//                           {ub.Type}{' '}
//                           <span style={{ color: '#FFC83D' }}>({ub.Status})</span>
//                         </Typography>
//                       </CardContent>
//                     </div>
//                     <div className={classes.details}>
//                       <CardContent
//                         className={classes.content}
//                         style={{ textAlign: 'right' }}
//                       >
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>PV </span>
//                           {ub.PVCurrency} {ub.PVAmt}
//                         </Typography>
//                         <Typography variant="subtitle1" color="textSecondary">
//                           {ub.Date}
//                         </Typography>
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>Delta </span>
//                           {ub.DeltaCurrency} {ub.DeltaAmt}
//                         </Typography>
//                         <Typography component="h4" variant="h4">
//                           <span style={{ color: '#FFC83D' }}>Vega </span>
//                           {ub.VegaCurrency} {ub.VegaAmt}
//                         </Typography>
//                       </CardContent>
//                     </div>
//                   </div>
//                 );
//               })} */}
//           {/* <TableContainer component={Paper}>
//                 <Table className="SimpleTable" aria-label="simple table">

//                     {data.map(function (ub) {
//                       return (
//                         <TableBody>
//                           <TableRow>
//                             <TableCell style={{ width: '60%' }}>
//                               <h3>{ub.ClientName}</h3>
//                               <Typography style={{ display: 'inline-block' }}>
//                                 {ub.Type}{' '}
//                                 <span style={{ color: '#FFC83D' }}>
//                                   ({ub.Status})
//                                 </span>
//                               </Typography>
//                               <Typography style={{ display: 'inline-block' }}>
//                                 <br/>
//                               </Typography>
//                               <br/>
//                             </TableCell>
//                             <TableCell align="right" style={{ width: '40%' }}>
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>PV </span>
//                                 {ub.PVCurrency} {ub.PVAmt}
//                               </h3>
//                               {ub.Date}
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>Delta </span>
//                                 {ub.DeltaCurrency} {ub.DeltaAmt}
//                               </h3>
//                               <h3>
//                                 <span style={{ color: '#FFC83D' }}>Vega </span>
//                                 {ub.VegaCurrency} {ub.VegaAmt}
//                               </h3>
//                             </TableCell>
//                           </TableRow>

//                         </TableBody>

//                       );
//                     })}

//                 </Table>
//               </TableContainer> */}

//           <CardContent>
//             {data2.map(function (ub) {
//               return (
//                 <Grid container spacing={3}>
//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Base Ccy"
//                       required
//                       select
//                       variant="outlined"
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.BaseCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Profit Currency"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.ProfitCurrency.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Term Ccy"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.TermCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Client Sell or Buy Base Ccy"
//                       required
//                       variant="outlined"
//                       select
//                       SelectProps={{ native: true }}
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {ub.TransactionBaseCcy.split('|').map(function (option) {
//                         return (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         );
//                       })}
//                     </TextField>
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales BDShortName"
//                       required
//                       variant="outlined"
//                       key="SalesBDSN"
//                       placeholder="Default"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales DGroupName"
//                       required
//                       variant="outlined"
//                       key="SalesDGN"
//                       placeholder="INTERBANK"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales DSubGrpDesc"
//                       required
//                       variant="outlined"
//                       key="SalesDSGD"
//                       placeholder="INTERBANK TRANSACTION"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Sales Comment"
//                       required
//                       variant="outlined"
//                       key="SalesComment"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading BDBranchShortName"
//                       required
//                       variant="outlined"
//                       key="TradingBDBSN"
//                       placeholder="TRG"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading DGroupName"
//                       required
//                       variant="outlined"
//                       key="TradingDGN"
//                       placeholder="INTERBANK"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>

//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Trading DSubGrpDec"
//                       required
//                       variant="outlined"
//                       key="TradingDSGD"
//                       placeholder="INTERBANK TRANSACTION"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </Grid>
//                 </Grid>
//               );
//             })}

//             <br />
//             <Divider />
//             <br />
//             <Grid container spacing={3}>
//               {/* {templateDataSecondPart.map(function (option) {
//                     if (option.FieldType === 'text') {
//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             label={option.FieldLabel}
//                             required
//                             variant="outlined"
//                             key={option.FieldPlaceHolder}
//                             InputLabelProps={{ shrink: true }}
//                           />
//                         </Grid>
//                       );
//                     } else if (option.FieldType === 'dropdown') {
//                       var dropdownlist = option.FieldPlaceHolder.split('|');

//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             label={option.FieldLabel}
//                             name="state"
//                             required
//                             select
//                             SelectProps={{ native: true }}
//                             key={dropdownlist[0]}
//                             variant="outlined"
//                           >
//                             {dropdownlist.map((option) => (
//                               <option key={option} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </TextField>
//                         </Grid>
//                       );
//                     } else if (option.FieldType === 'date') {
//                       return (
//                         <Grid item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             name="startDate"
//                             label={option.FieldLabel}
//                             required
//                             SelectProps={{ native: true }}
//                             variant="outlined"
//                             type="date"
//                             InputLabelProps={{ shrink: true }}
//                           />
//                         </Grid>
//                       );
//                     }
//                   })} */}
//             </Grid>

//             <Box display="flex" justifyContent="flex-end" p={2}>
//               <Button
//                 className={classes.importButton}
//                 color="primary"
//                 variant="contained"
//                 onClick={() => {
//                   alert('Created');
//                 }}
//               >
//                 Create
//               </Button>
//               <br />
//               <Button
//                 className={classes.importButton}
//                 // color=""
//                 variant="contained"
//                 type="reset"
//                 onClick={(e) => {
//                   if (!window.confirm('Are you sure to clear all field?'))
//                     e.preventDefault();
//                 }}
//               >
//                 Clear
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </form>

//       {/* <Box display="flex" justifyContent="flex-end">
//         <Button className={classes.importButton}>Import</Button>
//         <Button className={classes.exportButton}>Export</Button>
//         <Button color="primary" variant="contained">
//           Add customer
//         </Button>
//       </Box> */}
//     </div>
//   );
// };

// CreateDetails.propTypes = {
//   className: PropTypes.string
// };

// export default PreviewDetails;

CreateDetails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CreateDetails);
