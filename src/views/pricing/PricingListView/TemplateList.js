import React, { useState, setState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
  Grid,
  TextField,
  CardContent
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/styles';

const data = [
  {
    TemplateName: 'Joe',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'RM',
    TemplateAmount: 999999.35,
    TemplateDate: '3 Mar 3:05pm',
    TemplateCenter: 'KL',
    TemplateType: 'Vanilla',
    TemplatePair: 'USD/MYR',
    TemplateGen: 'Delivery Date',
    TemplateEvery: 'Monday',
    TemplateRollConvention: 'Modified Following',
    TemplateOccurance: '10'
  },
  {
    TemplateName: 'Alxerson Chan Keong Keong',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'GBP',
    TemplateAmount: 168999,
    TemplateDate: '5 Mar 4:05pm',
    TemplateCenter: 'SG',
    TemplateType: 'Seagull',
    TemplatePair: 'GBP/MYR',
    TemplateGen: 'Delivery Date',
    TemplateEvery: 'Tuesday',
    TemplateRollConvention: 'Modified Following',
    TemplateOccurance: '20'
  },
  {
    TemplateName: 'Mohamad Abdullah Ahmad Ibrahim',
    TemplateStatus: 'Draft',
    TemplateCurrency: 'SGD',
    TemplateAmount: 388,
    TemplateDate: '6 Mar 5:05pm',
    TemplateCenter: 'KL',
    TemplateType: 'Collar',
    TemplatePair: 'SGD/MYR',
    TemplateGen: 'Expiry Date',
    TemplateEvery: 'Friday',
    TemplateRollConvention: 'Modified Following',
    TemplateOccurance: '52'
  }
];

const styles = (theme) => ({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
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
    textAlign: 'right',
    padding: '0px'
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
  divFullWidth: {
    width: '100%'
  }
});

class TemplateList extends React.Component {
  constructor() {
    super();
    this.clickTemplate = this.clickTemplate.bind(this);
    this.state = {
      data: '',
      expanded: false
    };
  }
  clickTemplate(word) {
    this.setState({
      // data: event.target.value
      data: word
    });
    this.props.methodfromparent(this.state.data);
  }

  render() {
    const { classes } = this.props;
    // const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      // setExpanded(isExpanded ? panel : false);
      isExpanded
        ? this.setState({ expanded: panel })
        : this.setState({ expanded: false });
    };

    return (
      <Card>
        <CardHeader
          // subheader="The information can be edited"
          title="Template Listing"
        />
        <Divider />
        {data.map((ub) => {
          return (
            <div>
              <Accordion
                expanded={this.state.expanded === ub.TemplateName}
                onChange={handleChange(ub.TemplateName)}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Grid item lg={12} sm={12} xl={12} xs={12}>
                    <CardContent
                      style={{
                        paddingBottom: '0px',
                        paddingTop: '0px',
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem'
                      }}
                    >
                      <Grid container justify="space-between" spacing={1}>
                        <Grid item lg={6} sm={6} xl={6} xs={6}>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h4"
                          >
                            <span
                              style={{ color: '#FFC83D' }}
                              onClick={() =>
                                this.props.methodfromparent(
                                  ub.TemplateName,
                                  ub.TemplateType
                                )
                              }
                            >
                              {ub.TemplateType}
                            </span>
                            {' for '}
                            {ub.TemplateName}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                          >
                            {ub.TemplateStatus}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={6}
                          className={classes.right}
                        >
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h4"
                          >
                            {ub.TemplateCurrency}{' '}
                            {ub.TemplateAmount.toLocaleString(undefined, {
                              maximumFractionDigits: 2
                            })}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                          >
                            {ub.TemplateDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                </AccordionSummary>

                <AccordionDetails>
                  <div className={classes.divFullWidth}>
                    <Paper className={classes.paper}>
                      <Grid
                        container
                        lg={12}
                        sm={12}
                        xl={12}
                        xs={12}
                        spacing={2}
                      >
                        {/* <Grid container justify="space-between" spacing={2}> */}
                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h5"
                          >
                            Generate:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplateGen}
                          </Typography>
                        </Grid>

                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h5"
                          >
                            CcyPair:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplatePair}
                          </Typography>
                        </Grid>
                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h5"
                          >
                            Center:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplateCenter}
                          </Typography>
                        </Grid>

                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                          >
                            Roll Conv:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h6"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplateRollConvention}
                          </Typography>
                        </Grid>
                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h5"
                          >
                            Every:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplateEvery}
                          </Typography>
                        </Grid>

                        <Grid
                          lg={6}
                          sm={6}
                          xl={6}
                          xs={12}
                          container
                          justify="space-between"
                          style={{ padding: '0.5rem' }}
                        >
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                          >
                            Occur:
                          </Typography>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h6"
                            style={{ color: '#FFC83D' }}
                          >
                            {ub.TemplateOccurance}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Card>
    );
  }
}
// const TemplateList2 = ({ className, ...rest }) => {
//   const classes = useStyles();

//   let hidingOn = useState(false);

//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Card>
//       <CardHeader
//         // subheader="The information can be edited"
//         title="Template Listing"
//       />
//       <Divider />
//       {data.map((ub) => {
//         return (
//           <div>
//             <Accordion
//               expanded={expanded === ub.TemplateName}
//               onChange={handleChange(ub.TemplateName)}
//             >
//               <AccordionSummary
//                 // expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Grid item lg={12} sm={12} xl={12} xs={12}>
//                   <CardContent
//                     style={{
//                       paddingBottom: '0px',
//                       paddingTop: '0px',
//                       paddingLeft: '0.5rem',
//                       paddingRight: '0.5rem'
//                     }}
//                   >
//                     <Grid container justify="space-between" spacing={1}>
//                       <Grid item lg={6} sm={6} xl={6} xs={6}>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h4"
//                         >
//                           <span style={{ color: '#FFC83D' }}>
//                             {ub.TemplateType}
//                           </span>
//                           {' for '}
//                           {ub.TemplateName}
//                         </Typography>
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h6"
//                         >
//                           {ub.TemplateStatus}
//                         </Typography>
//                       </Grid>
//                       <Grid
//                         item
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={6}
//                         className={classes.right}
//                       >
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h4"
//                         >
//                           {ub.TemplateCurrency}{' '}
//                           {ub.TemplateAmount.toLocaleString(undefined, {
//                             maximumFractionDigits: 2
//                           })}
//                         </Typography>
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h6"
//                         >
//                           {ub.TemplateDate}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <div className={classes.divFullWidth}>
//                   <Paper className={classes.paper}>
//                     <Grid container lg={12} sm={12} xl={12} xs={12} spacing={2}>
//                       {/* <Grid container justify="space-between" spacing={2}> */}
//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h5"
//                         >
//                           Generate:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h5"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplateGen}
//                         </Typography>
//                       </Grid>

//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h5"
//                         >
//                           CcyPair:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h5"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplatePair}
//                         </Typography>
//                       </Grid>
//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h5"
//                         >
//                           Center:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h5"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplateCenter}
//                         </Typography>
//                       </Grid>

//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h6"
//                         >
//                           Roll Conv:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h6"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplateRollConvention}
//                         </Typography>
//                       </Grid>
//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h5"
//                         >
//                           Every:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h5"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplateEvery}
//                         </Typography>
//                       </Grid>

//                       <Grid
//                         lg={6}
//                         sm={6}
//                         xl={6}
//                         xs={12}
//                         container
//                         justify="space-between"
//                         style={{ padding: '0.5rem' }}
//                       >
//                         <Typography
//                           color="textSecondary"
//                           gutterBottom
//                           variant="h6"
//                         >
//                           Occur:
//                         </Typography>
//                         <Typography
//                           color="textPrimary"
//                           gutterBottom
//                           variant="h6"
//                           style={{ color: '#FFC83D' }}
//                         >
//                           {ub.TemplateOccurance}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Paper>
//                 </div>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         );
//       })}
//     </Card>
//   );
// };

TemplateList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
// export default TemplateList;
export default withStyles(styles, { withTheme: true })(TemplateList);
