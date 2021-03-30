import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '/src/components/GlobalStyles';
import '/src/mixins/chartjs';
import theme from '/src/theme';
import routes from '/src/routes';
import { Navigate } from 'react-router-dom';

import Router from './routes';

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
