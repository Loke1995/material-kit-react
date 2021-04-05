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
  Grid
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import CreateDetails from './CreateDetails';
import { boolean } from 'yup';
import CreateIcon from '@material-ui/icons/Create';

const styles = (theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  resize: {
    fontSize: 12
  }
});

const templateData = [
  {
    FieldLabel: 'Customer Name',
    FieldPlaceHolder: 'Name',
    FieldType: 'text'
  },
  {
    FieldLabel: 'Center',
    FieldPlaceHolder: 'KL|Singapore',
    FieldType: 'dropdown'
  },
  {
    FieldLabel: 'Type',
    FieldPlaceHolder:
      'Vanilla|Collar|Seagull|Calendar Forward|Capped Forward|Leverage Forward|Anytime KO Fwd|At Expiry KO Fwd',
    FieldType: 'dropdown'
  },
  {
    FieldLabel: 'CcyPair',
    FieldPlaceHolder: 'USD/MYR|GBP/MYR',
    FieldType: 'dropdown'
  }
];

const templateDataSecondPart = [
  {
    FieldLabel: 'Generate',
    FieldPlaceHolder: 'Delivery Date|Expiry Date',
    FieldType: 'dropdown'
  },
  {
    FieldLabel: 'Every',
    FieldPlaceHolder: 'Monday|Tuesday|Wednesday|Thursday|Friday',
    FieldType: 'dropdown'
  },
  {
    FieldLabel: 'Roll Convention',
    FieldPlaceHolder: 'Modified Following',
    FieldType: 'dropdown'
  },
  {
    FieldLabel: 'Start Date',
    FieldPlaceHolder: '',
    FieldType: 'date'
  },
  {
    FieldLabel: 'Occurance',
    FieldPlaceHolder: '',
    FieldType: 'text'
  }
];

const data3 = {
  'Test::stripsInfo': [
    ['Generate', 'ExpiryDate', 'Delivery Date,Expiry Date'],
    ['Frequency', 'Monthly', 'Weekly,Biweekly,Monthly,Bimonthly,Quarterly'],
    [
      'Every',
      'Default',
      'Default,Monday,Tuesday,WednesDay,Thursday,Friday,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,End of Month'
    ],
    ['Roll Convention', 'Modified Following', 'Modified Following'],
    ['Occurrences', '6', ''],
    ['Start Date', '31-Mar-21', ''],
    ['End Date', '31-May-21', '']
  ]
};

function resetForm() {
  alert('Great Shot!');
}

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreOption: false,
      createTemplate: false
    };
    this.createTemplate = this.createTemplate.bind(this);
    this.moreOptions = this.moreOptions.bind(this);
    this.pricingCallTemplate = this.pricingCallTemplate.bind(this);
    this.customizeMethod = this.customizeMethod.bind(this);
  }

  moreOptions(show) {
    this.setState({
      moreOption: show
    });
    this.props.methodMoreOptionStrip(show);
  }

  createTemplate(show) {
    this.setState({
      createTemplate: show
    });
    this.props.methodCreateTemplate(show);
  }

  onDropdownSelected2(e) {
    console.log('in');
    console.log('THE VAL', e.target.value);

    //here you will see the current selected value of the select input
  }

  onDropdownSelected = (event, child) => {
    console.log('in');
    console.log(event.target.value);
    // this.setState({
    //   selectedID: child.key,
    //   visibleValue: event.target.value
    // });
  };

  pricingCallTemplate(show) {
    this.props.methodShowPricing(show);
    this.setState({
      moreOption: show
    });
  }

  customizeMethod(show) {
    this.setState({
      customizeMethod: show
    });
    this.props.methodCustomizeTemplate(show);
  }

  render() {
    const { classes } = this.props;
    const { createTemplate, moreOption } = this.state;

    return createTemplate ? (
      <CreateDetails
        templateName={this.props.templateName}
        templateType={this.props.templateType}
        pvData={this.props.pvData}
        methodShowPricingTemplate={this.pricingCallTemplate}
        methodCreateTemplate={this.createTemplate}
        methodCustomizeTemplate={this.customizeMethod}
        methodMoreOption={this.moreOptions}
      />
    ) : (
      <div className={classes.root}>
        <form autoComplete="off" noValidate className={classes.root}>
          <Card>
            <CardHeader
              // subheader="The information can be edited"
              // title="Pricing Details"
              title={
                <h4 style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <CreateIcon style={{ paddingRight: '5px' }} /> Pricing Details
                </h4>
              }
              style={{
                backgroundColor: 'gray',
                color: 'white',
                height: '2.5rem'
              }}
            />
            <Divider />
            <CardContent>
              {/* <h1>{this.props.templateType} 123</h1> */}
              <Grid container spacing={3}>
                {templateData.map(function (option) {
                  if (option.FieldType === 'text') {
                    return (
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label={option.FieldLabel}
                          required
                          variant="outlined"
                          key={option.FieldPlaceHolder}
                          // placeholder={this.state.templateName}
                          placeholder={classes.templateName}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            classes: {
                              input: classes.resize
                            }
                          }}
                        />
                      </Grid>
                    );
                  } else if (option.FieldType === 'dropdown') {
                    var dropdownlist = option.FieldPlaceHolder.split('|');

                    return (
                      <Grid item md={6} xs={12}>
                        {/* {console.log('|' + option.FieldLabel + '|')} */}
                        <TextField
                          fullWidth
                          label={option.FieldLabel}
                          name={option.FieldLabel}
                          required
                          select
                          SelectProps={{ native: true }}
                          key={dropdownlist[0]}
                          variant="outlined"
                          // onChange={this.onDropdownSelected}
                          onChange={console.log('changed')}
                          InputProps={{
                            classes: {
                              input: classes.resize
                            }
                          }}
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
                          InputProps={{
                            classes: {
                              input: classes.resize
                            }
                          }}
                        />
                      </Grid>
                    );
                  }
                })}
              </Grid>

              <br />
              <Grid item md={12} xs={12} style={{ textAlign: 'center' }}>
                <Button
                  style={{ color: 'blue' }}
                  onClick={() => {
                    this.moreOptions(!this.state.moreOption);
                  }}
                >
                  {this.state.moreOption ? 'Less Options' : 'More Options'}
                </Button>
              </Grid>
              {/* <Divider /> */}
              <br />

              {/* {data3['Test::stripsInfo'].map(function (option) {
                console.log(option[1]);
              })} */}
              <Grid container spacing={3}>
                {moreOption ? (
                  data3['Test::stripsInfo'].map(function (option) {
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
                            InputProps={{
                              classes: {
                                input: classes.resize
                              }
                            }}
                            // defaultValue={option[1]}
                          />
                        </Grid>
                      );
                    } else if (option[2] === '') {
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
                            InputProps={{
                              classes: {
                                input: classes.resize
                              }
                            }}
                          />
                        </Grid>
                      );
                      // } else if (option.FieldType === 'dropdown') {
                      //   var dropdownlist = option.FieldPlaceHolder.split('|');

                      //   return (
                      //     <Grid item md={6} xs={12}>
                      //       <TextField
                      //         fullWidth
                      //         label={option.FieldLabel}
                      //         name="state"
                      //         required
                      //         select
                      //         SelectProps={{ native: true }}
                      //         key={dropdownlist[0]}
                      //         variant="outlined"
                      //       >
                      //         {dropdownlist.map((option) => (
                      //           <option key={option} value={option}>
                      //             {option}
                      //           </option>
                      //         ))}
                      //       </TextField>
                      //     </Grid>
                      //   );
                    } else {
                      var dropdownlist = option[2].split(',');

                      return (
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label={option[0]}
                            name="state"
                            required
                            select
                            SelectProps={{ native: true }}
                            key={dropdownlist[0]}
                            variant="outlined"
                            InputProps={{
                              classes: {
                                input: classes.resize
                              }
                            }}
                          >
                            {dropdownlist.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </TextField>
                        </Grid>
                      );
                    }
                  })
                ) : (
                  <Box></Box>
                )}
              </Grid>

              {/* <Grid container spacing={3}>
                {moreOption ? (
                  templateDataSecondPart.map(function (option) {
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
                  })
                ) : (
                  <Box></Box>
                )}
              </Grid> */}

              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  className={classes.importButton}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert('Saved');
                    // this.createTemplate();
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
                    // alert('Created');
                    this.createTemplate(true);
                  }}
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
  }
}

// const Template2 = ({ className, ...rest }) => {
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
//             title="Pricing Details"
//           />
//           <Divider />
//           <CardContent>
//             <Grid container spacing={3}>
//               {templateData.map(function (option) {
//                 if (option.FieldType === 'text') {
//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         label={option.FieldLabel}
//                         required
//                         variant="outlined"
//                         key={option.FieldPlaceHolder}
//                         InputLabelProps={{ shrink: true }}
//                       />
//                     </Grid>
//                   );
//                 } else if (option.FieldType === 'dropdown') {
//                   var dropdownlist = option.FieldPlaceHolder.split('|');

//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         label={option.FieldLabel}
//                         name="state"
//                         required
//                         select
//                         SelectProps={{ native: true }}
//                         key={dropdownlist[0]}
//                         variant="outlined"
//                       >
//                         {dropdownlist.map((option) => (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         ))}
//                       </TextField>
//                     </Grid>
//                   );
//                 } else if (option.FieldType === 'date') {
//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         name="startDate"
//                         label={option.FieldLabel}
//                         required
//                         SelectProps={{ native: true }}
//                         variant="outlined"
//                         type="date"
//                         InputLabelProps={{ shrink: true }}
//                       />
//                     </Grid>
//                   );
//                 }
//               })}
//             </Grid>

//             <br />
//             <Grid item md={12} xs={12} style={{ textAlign: 'center' }}>
//               <Button
//                 style={{ color: 'blue' }}
//                 onClick={() => {
//                   this.moreOptions();
//                 }}
//               >
//                 + More Options
//               </Button>
//             </Grid>
//             {/* <Divider /> */}
//             <br />
//             <Grid container spacing={3}>
//               {templateDataSecondPart.map(function (option) {
//                 if (option.FieldType === 'text') {
//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         label={option.FieldLabel}
//                         required
//                         variant="outlined"
//                         key={option.FieldPlaceHolder}
//                         InputLabelProps={{ shrink: true }}
//                       />
//                     </Grid>
//                   );
//                 } else if (option.FieldType === 'dropdown') {
//                   var dropdownlist = option.FieldPlaceHolder.split('|');

//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         label={option.FieldLabel}
//                         name="state"
//                         required
//                         select
//                         SelectProps={{ native: true }}
//                         key={dropdownlist[0]}
//                         variant="outlined"
//                       >
//                         {dropdownlist.map((option) => (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         ))}
//                       </TextField>
//                     </Grid>
//                   );
//                 } else if (option.FieldType === 'date') {
//                   return (
//                     <Grid item md={6} xs={12}>
//                       <TextField
//                         fullWidth
//                         name="startDate"
//                         label={option.FieldLabel}
//                         required
//                         SelectProps={{ native: true }}
//                         variant="outlined"
//                         type="date"
//                         InputLabelProps={{ shrink: true }}
//                       />
//                     </Grid>
//                   );
//                 }
//               })}
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
//                 color="third"
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
//           {/* <Divider /> */}
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

Template.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Template);
