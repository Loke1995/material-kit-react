import React, { useState, setState, Component } from 'react';
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
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Collapse,
  TextField
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
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const data = [
  {
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
    TemplateName: 'Collar for Mohamad Abdullah Ahmad Ibrahim',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'USD',
    TemplateAmount: '388',
    TemplateDate: '14 March 2021',
    TemplateInfo: []
  }
];

const useStyles3 = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
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
  }
}));

const useStyles = makeStyles((theme) => ({
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
  }
}));

const myData = [
  {
    id: '1',
    nameHeader: 'Header1',
    subMenu: [
      { id: '1', name: 'subMenu1' },
      { id: '2', name: 'subMenu2' }
    ]
  },
  {
    id: '2',
    nameHeader: 'Header2',
    subMenu: [
      { id: '1', name: 'subMenu1' },
      { id: '2', name: 'subMenu2' }
    ]
  }
];

const BucketList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card>
      <CardHeader
        // subheader="The information can be edited"
        title="Bucket Review Listing"
      />
      <Divider />
      {data.map((ub, i) => {
        return (
          <div>
            <Accordion
              expanded={expanded === ub.TemplateName}
              onChange={handleChange(ub.TemplateName)}
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
                  title={ub.TemplateName}
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
                                component="h4"
                                variant="h4"
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
                                component="h4"
                                variant="h4"
                                className={classes.rightPanel}
                              >
                                <span style={{ color: '#FFC83D' }}>Delta </span>
                                {item.DeltaCurrency} {item.DeltaAmt}
                              </Typography>
                              <Typography
                                component="h4"
                                variant="h4"
                                className={classes.rightPanel}
                              >
                                <span style={{ color: '#FFC83D' }}>Vega </span>
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
};

class BucketList3 extends Component {
  constructor() {
    super();
    this.state = {
      selectedHeader: null
    };
    this.listItems = [];
    this.headers = [
      {
        name: 'header1',
        staticKey: 'abc'
      },
      {
        name: 'header2',
        staticKey: 'def'
      },
      {
        name: 'header3',
        staticKey: 'ghi'
      }
    ];
    this.subheaders = [
      { name: 'subheader1' },
      { name: 'subheader2' },
      { name: 'subheader3' }
    ];
    this.keyCounter = 0;
  }

  state = {
    settings: [
      { id: '1', open: false },
      { id: '2', open: false }
    ]
  };

  handleClick = (id) => {
    this.setState((state) => ({
      ...state,
      settings: state.settings.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    }));
  };

  render() {
    const { settings } = this.state;

    const useStyles = makeStyles((theme) => ({
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest
        })
      },
      expandOpen: {
        transform: 'rotate(180deg)'
      }
    }));

    return (
      <Card>
        <CardHeader
          // subheader="The information can be edited"
          title="Bucket Listing"
        />
        <Divider />
        {data.map((ub, i) => {
          return (
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    style={{ backgroundColor: red[500] }}
                  >
                    {/* {ub.TemplateName.substring(1, 0)} */}V
                  </Avatar>
                }
                action={
                  <IconButton
                    className={clsx(useStyles.expand, {
                      [useStyles.expandOpen]: useStyles.expanded
                    })}
                    // onClick={handleExpandClick}
                    onClick={() => this.setSelectedHeader(ub.TemplateName)}
                    aria-expanded={i}
                    aria-label="show more"
                  >
                    {/* {settings.find((item) => item.id === ub.TemplateName).open
                      ? 'expanded'
                      : 'collapsed'} */}
                    <ExpandMoreIcon />
                  </IconButton>
                }
                title={ub.TemplateName}
                subheader={ub.TemplateDate}
              />

              <Collapse
                in={this.state.selectedHeader === ub.TemplateName}
                timeout={2000}
              >
                <h1>Testing</h1>
              </Collapse>
            </Card>
          );
        })}

        {/* <List component="nav">
          {myData.map((each) => (
            <React.Fragment key={each.id}>
              <ListItem button onClick={() => this.handleClick(each.id)}>
                <ListItemText inset primary={each.nameHeader} />
                {settings.find((item) => item.id === each.id).open
                  ? 'expanded'
                  : 'collapsed'}
              </ListItem>
              <Divider />
              <Collapse
                in={settings.find((item) => item.id === each.id).open}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {each.subMenu.map((subData) => (
                    <ListItem key={subData.id} button>
                      <ListItemText inset primary={subData.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List> */}
      </Card>
    );
  }
  setSelectedHeader(headerName) {
    this.setState({ selectedHeader: headerName });
  }
}

const BucketList2 = ({ className, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        // subheader="The information can be edited"
        title="Bucket Listing"
      />
      <Divider />
      {data.map((ub, i) => {
        return (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {ub.TemplateName.substring(1, 0)}
                </Avatar>
              }
              action={
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: i
                  })}
                  // onClick={handleExpandClick}
                  onClick={() => this.setState({ selectedHeader: true })}
                  aria-expanded={i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              }
              title={ub.TemplateName}
              subheader={ub.TemplateDate}
            />
            {/* <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent> */}

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {ub.TemplateInfo.map((item) => {
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
                          <Grid item md={6} xs={6}>
                            <Typography
                              component="h4"
                              variant="h4"
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
                              component="h4"
                              variant="h4"
                              className={classes.rightPanel}
                            >
                              <span style={{ color: '#FFC83D' }}>Delta </span>
                              {item.DeltaCurrency} {item.DeltaAmt}
                            </Typography>
                            <Typography
                              component="h4"
                              variant="h4"
                              className={classes.rightPanel}
                            >
                              <span style={{ color: '#FFC83D' }}>Vega </span>
                              {item.VegaCurrency} {item.VegaAmt}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                );
              })}

              {/* <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent> */}
            </Collapse>
            <Divider />
          </Card>
        );
      })}
    </Card>
  );
};

BucketList.propTypes = {
  className: PropTypes.string
};

export default BucketList;
