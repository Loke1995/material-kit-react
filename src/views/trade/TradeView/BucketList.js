import React, { useState, setState, Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
  Grid,
  Collapse,
  TextField
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Accordion from '@material-ui/core/Accordion';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import RepeatIcon from '@material-ui/icons/Repeat';

const data = [
  {
    TemplateID: 'data',
    TemplateName: 'Vanilla for Peter',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'RM',
    TemplateAmount: '999999',
    TemplateDate: '14 March 2021',
    TemplateInfo: [
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
    ]
  },
  {
    TemplateID: 'data2',
    TemplateName: 'Seagull for Alxerson Chan Keong Keong',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'USD',
    TemplateAmount: '168999',
    TemplateDate: '14 March 2021',
    TemplateInfo: [
      {
        ClientName: 'Alxerson Chan Keong Keong',
        Type: 'Seagull',
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
    ]
  },
  {
    TemplateID: 'data3',
    TemplateName: 'Collar for Mohamad Abdullah Ahmad Ibrahim',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'USD',
    TemplateAmount: '388',
    TemplateDate: '14 March 2021',
    TemplateInfo: []
  }
];

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  avatar: {
    backgroundColor: red[500]
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
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  paper2: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  //style for font size
  resize: {
    fontSize: 12
  }
});

class BucketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleChange = (panel, id) => (event, isExpanded) => {
    if (isExpanded) {
      this.setState({ expanded: panel });
    } else {
      this.setState({ expanded: false });
    }

    this.props.methodBucketList(id);
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <Card>
        <CardHeader
          // subheader="The information can be edited"
          title="Bucket Review Listing"
          // title={
          //   <h4 style={{ display: 'inline-flex', alignItems: 'center' }}>
          //     <CreateIcon /> Bucket Review Listing
          //   </h4>
          // }
          style={{ backgroundColor: 'gray', color: 'white', height: '2.5rem' }}
        />
        <Divider />
        {data.map((ub, i) => {
          var titleName = ub.TemplateName + ' (' + ub.TemplateStatus + ')';
          return (
            <div>
              <Accordion
                expanded={expanded === ub.TemplateName}
                onChange={this.handleChange(ub.TemplateName, ub.TemplateID)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {ub.TemplateName.substring(1, 0)}
                      </Avatar>
                    }
                    title={titleName}
                    subheader={ub.TemplateDate}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  {ub.TemplateInfo.map((item) => {
                    return (
                      <div className={classes.root}>
                        <Paper className={classes.paper}>
                          <Grid container spacing={2}>
                            <Grid item></Grid>

                            <Timeline align="alternate">
                              <TimelineItem>
                                <TimelineOppositeContent>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    3 April 2021
                                    <br />
                                    10:00 am
                                  </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                  <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                  </TimelineDot>
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <Paper
                                    elevation={3}
                                    className={classes.paper2}
                                  >
                                    <Typography
                                      style={{
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem',
                                        fontSize: '12px'
                                      }}
                                    >
                                      Submitted For Review (by John)
                                    </Typography>
                                  </Paper>
                                </TimelineContent>
                              </TimelineItem>

                              <TimelineItem>
                                <TimelineOppositeContent>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    {new Date().toLocaleString()}
                                  </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                  <TimelineDot color="secondary">
                                    <RepeatIcon />
                                  </TimelineDot>
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <Paper
                                    elevation={3}
                                    className={classes.paper2}
                                  >
                                    <Typography
                                      style={{
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem',
                                        fontSize: '12px'
                                      }}
                                    >
                                      Pending Review
                                    </Typography>
                                  </Paper>
                                </TimelineContent>
                              </TimelineItem>
                            </Timeline>

                            <Grid
                              xs={12}
                              md={12}
                              container
                              // style={{ textAlign: 'center' }}
                              style={{ marginLeft: '0.5rem' }}
                            >
                              {/* <h3>Submitted for Review (John)</h3>
                              <h3>Pending for you</h3> */}
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <Divider />
                            </Grid>
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
                                    {item.ClientName}
                                  </Typography>
                                  <Typography
                                    variant="subtitle1"
                                    color="textSecondary"
                                  >
                                    {item.Type}{' '}
                                    <span style={{ color: '#FFC83D' }}>
                                      ({item.Status})
                                    </span>
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                md={6}
                                xs={6}
                                style={{ marginLeft: '10px' }}
                              >
                                <Typography
                                  component="h5"
                                  variant="h5"
                                  className={classes.rightPanel}
                                >
                                  <span style={{ color: '#FFC83D' }}>PV </span>
                                  <span className={classes.right}>
                                    {item.PVCurrency} {item.PVAmt}
                                  </span>
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  color="textSecondary"
                                  className={classes.right}
                                >
                                  {item.Date}
                                </Typography>
                                <Typography
                                  component="h5"
                                  variant="h5"
                                  className={classes.rightPanel}
                                >
                                  <span style={{ color: '#FFC83D' }}>
                                    Delta{' '}
                                  </span>
                                  {item.DeltaCurrency} {item.DeltaAmt}
                                </Typography>
                                <Typography
                                  component="h5"
                                  variant="h5"
                                  className={classes.rightPanel}
                                >
                                  <span style={{ color: '#FFC83D' }}>
                                    Vega{' '}
                                  </span>
                                  {item.VegaCurrency} {item.VegaAmt}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <br />
                          <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                label="Base Ccy"
                                required
                                select
                                disabled
                                variant="outlined"
                                key={item.BaseCcy}
                                SelectProps={{ native: true }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              >
                                <option key={item.BaseCcy} value={item.BaseCcy}>
                                  {item.BaseCcy}
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
                                disabled
                                key={item.ProfitCurrency}
                                SelectProps={{ native: true }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              >
                                <option
                                  key={item.ProfitCurrency}
                                  value={item.ProfitCurrency}
                                >
                                  {item.ProfitCurrency}
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
                                disabled
                                key={item.TermCcy}
                                SelectProps={{ native: true }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              >
                                <option key={item.TermCcy} value={item.TermCcy}>
                                  {item.TermCcy}
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
                                disabled
                                key={item.TransactionBaseCcy}
                                SelectProps={{ native: true }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              >
                                <option
                                  key={item.TransactionBaseCcy}
                                  value={item.TransactionBaseCcy}
                                >
                                  {item.TransactionBaseCcy}
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
                                disabled
                                variant="outlined"
                                key={item.SalesBDSN}
                                value={item.SalesBDSN}
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
                                disabled
                                variant="outlined"
                                key={item.SalesDGN}
                                value={item.SalesDGN}
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
                                label="Sales DSitemGrpDesc"
                                required
                                disabled
                                variant="outlined"
                                key={item.SalesDSGD}
                                value={item.SalesDSGD}
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
                                disabled
                                variant="outlined"
                                key={item.SalesComment}
                                value={item.SalesComment}
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
                                disabled
                                variant="outlined"
                                key={item.TradingBDBSN}
                                value={item.TradingBDBSN}
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
                                disabled
                                variant="outlined"
                                key={item.TradingDGN}
                                value={item.TradingDGN}
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
                                label="Trading DSitemGrpDec"
                                required
                                disabled
                                variant="outlined"
                                key={item.TradingDSGD}
                                value={item.TradingDSGD}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              />
                            </Grid>

                            <Grid item md={12} xs={12}>
                              <TextField
                                fullWidth
                                label="Comments"
                                required
                                multiline
                                rows={5}
                                variant="outlined"
                                placeholder="Place comments here"
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>

                          <Box display="flex" justifyContent="flex-end" p={2}>
                            <Button
                              className={classes.importButton}
                              color="primary"
                              variant="contained"
                              onClick={() => alert('Approved')}
                            >
                              Approve
                            </Button>
                            <br />
                            <Button
                              className={classes.importButton}
                              // color=""
                              variant="contained"
                              type="reset"
                              onClick={(e) => {
                                if (!window.confirm('Are you sure to reject?'))
                                  e.preventDefault();
                              }}
                            >
                              Reject
                            </Button>
                          </Box>
                        </Paper>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Card>
    );
  }
}

BucketList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BucketList);
