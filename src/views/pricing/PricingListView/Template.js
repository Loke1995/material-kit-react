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

const styles = (theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
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
    FieldPlaceHolder: 'Vanila|Seagull|Collar',
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

function resetForm() {
  alert('Great Shot!');
}

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreOption: false,
      createTemplate: false,
      templateName: this.props.templateName,
      templateType: this.props.templateType
    };
    this.createTemplate = this.createTemplate.bind(this);
    this.moreOptions = this.moreOptions.bind(this);
  }

  moreOptions(item) {
    this.setState({
      moreOption: !this.state.moreOption
    });
  }

  createTemplate() {
    this.setState({
      createTemplate: true
    });
  }

  render() {
    const { classes } = this.props;
    const { createTemplate, moreOption } = this.state;

    return createTemplate ? (
      <CreateDetails />
    ) : (
      <div className={classes.root}>
        <form autoComplete="off" noValidate className={classes.root}>
          <Card>
            <CardHeader
              // subheader="The information can be edited"
              title="Pricing Details"
            />
            <Divider />
            <CardContent>
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
                })}
              </Grid>

              <br />
              <Grid item md={12} xs={12} style={{ textAlign: 'center' }}>
                <Button
                  style={{ color: 'blue' }}
                  onClick={() => {
                    this.moreOptions();
                  }}
                >
                  {this.state.moreOption ? 'Less Options' : 'More Options'}
                </Button>
              </Grid>
              {/* <Divider /> */}
              <br />
              <Grid container spacing={3}>
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
              </Grid>

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
                    this.createTemplate();
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
