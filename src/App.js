import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
// import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
// import routes from './routes';
import { Navigate } from 'react-router-dom';

import Router from './routes';
// import IdleTimer from 'react-idle-timer';

// class App extends React.Component {
//   render() {
//     const { routing } = this.props;

//     return (
//       <ThemeProvider theme={theme}>
//         <GlobalStyles />
//         {routing}
//       </ThemeProvider>
//     );
//   }
// }

// function App() {
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   const routing = useRoutes(routes(isLoggedIn));

//   return (
//     (
//       <ThemeProvider theme={theme}>
//         <GlobalStyles />
//         {routing}
//       </ThemeProvider>
//     ) || <Navigate to="/404" />
//   );
// }

// class App2 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       timeout: 1000 * 5 * 1,
//       showModal: false,
//       userLoggedIn: false,
//       isTimedOut: false
//     };

//     this.idleTimer = null;
//     this.onAction = this._onAction.bind(this);
//     this.onActive = this._onActive.bind(this);
//     this.onIdle = this._onIdle.bind(this);
//   }

//   _onAction(e) {
//     console.log('user did something', e);
//     this.setState({ isTimedOut: false });
//   }

//   _onActive(e) {
//     console.log('user is active', e);
//     this.setState({ isTimedOut: false });
//   }

//   _onIdle(e) {
//     console.log('user is idle', e);
//     const isTimedOut = this.state.isTimedOut;
//     if (isTimedOut) {
//       this.props.history.push('/');
//     } else {
//       this.setState({ showModal: true });
//       this.idleTimer.reset();
//       this.setState({ isTimedOut: true });
//     }
//   }

//   render() {
//     return (
//       (
//         <>
//           <IdleTimer
//             ref={(ref) => {
//               this.idleTimer = ref;
//             }}
//             element={document}
//             onActive={this.onActive}
//             onIdle={this.onIdle}
//             onAction={this.onAction}
//             debounce={250}
//             timeout={this.state.timeout}
//           />
//           <ThemeProvider theme={theme}>
//             <GlobalStyles />
//             {/* {routing} */}
//             <Router />
//           </ThemeProvider>
//         </>
//       ) || <Navigate to="/404" />
//     );
//   }
// }
const App = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const routing = useRoutes(routes(isLoggedIn));
  // const routing = useRoutes(routes);

  return (
    (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* {routing} */}
        <Router />
      </ThemeProvider>
    ) || <Navigate to="/404" />
  );
};

export default App;
