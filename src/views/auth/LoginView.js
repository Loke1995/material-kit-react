import React from 'react';
import {
  Redirect,
  Link as RouterLink,
  useNavigate,
  withRouter,
  useHistory
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from '/src/icons/Facebook';
import GoogleIcon from '/src/icons/Google';
import Page from '/src/components/Page';

import Form from 'react-validation/build/form';
import { withStyles } from '@material-ui/styles';
import AuthService from '../../services/auth.service';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: '',
      password: '',
      loading: false,
      message: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: '',
      loading: true
    });

    this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.login(this.state.username, this.state.password).then(
      () => {
        window.location.href = '/app/dashboard';
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // this.setState({
        //   loading: false,
        //   message: resMessage
        // });

        alert(resMessage);

        this.setState({
          username: '',
          password: '',
          loading: false,
          message: ''
        });
      }
    );
    // } else {
    //   this.setState({
    //     loading: false
    //   });
    // }
  }

  render() {
    // const { classes } = this.props;

    return (
      <Page
        //  className={classes.root}
        title="Login"
        style={{ height: '100%' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="sm">
            <Formik
              initialValues={
                {
                  // email: 'demo@devias.io',
                  // password: 'Password123'
                }
              }
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email('Must be a valid email')
                  .max(255)
                  .required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
              })}
              // onSubmit={() => {
              //   navigate('/app/dashboard', { replace: true });
              // }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
              }) => (
                <Form
                  onSubmit={this.handleLogin}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2">
                      Sign in
                    </Typography>
                    {/* <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in on the internal platform
                    </Typography> */}
                  </Box>

                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    // onBlur={handleBlur}
                    onChange={this.onChangeUsername}
                    type="email"
                    // value={values.email}
                    variant="outlined"
                    required
                  />

                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    // onBlur={handleBlur}
                    onChange={this.onChangePassword}
                    type="password"
                    // value={values.password}
                    variant="outlined"
                    required
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={this.state.loading}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    >
                      SIGN IN
                    </Button>
                  </Box>

                  {/* <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>

                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: 'none' }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  /> */}
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      </Page>
    );
  }
}

// const LoginView2 = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   return (
//     <Page className={classes.root} title="Login">
//       <Box
//         display="flex"
//         flexDirection="column"
//         height="100%"
//         justifyContent="center"
//       >
//         <Container maxWidth="sm">
//           <Formik
//             initialValues={
//               {
//                 // email: 'demo@devias.io',
//                 // password: 'Password123'
//               }
//             }
//             validationSchema={Yup.object().shape({
//               email: Yup.string()
//                 .email('Must be a valid email')
//                 .max(255)
//                 .required('Email is required'),
//               password: Yup.string().max(255).required('Password is required')
//             })}
//             onSubmit={() => {
//               navigate('/app/dashboard', { replace: true });
//             }}
//           >
//             {({
//               errors,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//               isSubmitting,
//               touched,
//               values
//             }) => (
//               <form onSubmit={handleSubmit}>
//                 <Box mb={3}>
//                   <Typography color="textPrimary" variant="h2">
//                     Sign in
//                   </Typography>
//                   {/* <Typography
//                     color="textSecondary"
//                     gutterBottom
//                     variant="body2"
//                   >
//                     Sign in on the internal platform
//                   </Typography> */}
//                 </Box>
//                 {/* <Grid container spacing={3}>
//                   <Grid item xs={12} md={6}>
//                     <Button
//                       color="primary"
//                       fullWidth
//                       startIcon={<FacebookIcon />}
//                       onClick={handleSubmit}
//                       size="large"
//                       variant="contained"
//                     >
//                       Login with Facebook
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <Button
//                       fullWidth
//                       startIcon={<GoogleIcon />}
//                       onClick={handleSubmit}
//                       size="large"
//                       variant="contained"
//                     >
//                       Login with Google
//                     </Button>
//                   </Grid>
//                 </Grid> */}
//                 {/* <Box mt={3} mb={1}>
//                   <Typography
//                     align="center"
//                     color="textSecondary"
//                     variant="body1"
//                   >
//                     or login with email address
//                   </Typography>
//                 </Box> */}
//                 <TextField
//                   error={Boolean(touched.email && errors.email)}
//                   fullWidth
//                   helperText={touched.email && errors.email}
//                   label="Email Address"
//                   margin="normal"
//                   name="email"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   type="email"
//                   // value={values.email}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(touched.password && errors.password)}
//                   fullWidth
//                   helperText={touched.password && errors.password}
//                   label="Password"
//                   margin="normal"
//                   name="password"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   type="password"
//                   // value={values.password}
//                   variant="outlined"
//                 />
//                 <Box my={2}>
//                   <Button
//                     color="primary"
//                     disabled={isSubmitting}
//                     fullWidth
//                     size="large"
//                     type="submit"
//                     variant="contained"
//                   >
//                     SIGN IN
//                   </Button>
//                 </Box>
//                 {/* <Typography color="textSecondary" variant="body1">
//                   Don&apos;t have an account?{' '}
//                   <Link component={RouterLink} to="/register" variant="h6">
//                     Sign up
//                   </Link>
//                 </Typography> */}
//               </form>
//             )}
//           </Formik>
//         </Container>
//       </Box>
//     </Page>
//   );
// };

// export default withStyles(styles, { withTheme: true })(LoginView);
export default LoginView;
