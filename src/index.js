import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Cookies from 'js-cookie';

export const getSession = () => {
  const jwt = Cookies.get('__session');
  let session;
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      // what is window.atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(window.atob(base64));
    }
  } catch (error) {
    console.log(error);
  }
  return session;
};

export const logOut = () => {
  Cookies.remove('__session');
};

ReactDOM.render(
  <BrowserRouter>
    {/* <Route
      path="/"
      render={() => (getSession() ? <App to="/" /> : <Redirect to="/login" />)}
    /> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
