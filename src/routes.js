import React from 'react';
import { Navigate, Switch, Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView';
import PricingListView from './views/pricing/PricingListView';
import DashboardView from './views/reports/DashboardView';
import LoginView from './views/auth/LoginView';
// import LoginView from './components/login.component';
import NotFoundView from './views/errors/NotFoundView';
import ProductListView from './views/product/ProductListView';
import RegisterView from './views/auth/RegisterView';
import SettingsView from './views/settings/SettingsView';
import MarketView from './views/market/MarketView';
import TradeView from './views/trade/TradeView';
import ProfileView from './components/profile.component';
import { Route, Routes } from 'react-router';

import AuthService from './services/auth.service';

// const routes = [
//   {
//     path: 'app',
//     element: <DashboardLayout />,
//     children: [
//       { path: 'account', element: <AccountView /> },
//       { path: 'pricing', element: <PricingListView /> },
//       { path: 'dashboard', element: <DashboardView /> },
//       { path: 'products', element: <ProductListView /> },
//       { path: 'settings', element: <SettingsView /> },
//       { path: 'market', element: <MarketView /> },
//       { path: 'trade', element: <TradeView /> },
//       { path: '*', element: <Navigate to="/404" /> },
//       { path: 'profile', element: <ProfileView /> }
//     ]
//   },
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       { path: 'login', element: <LoginView /> },
//       { path: 'register', element: <RegisterView /> },
//       { path: '404', element: <NotFoundView /> },
//       { path: '/', element: <Navigate to="/app/dashboard" /> },
//       { path: '*', element: <Navigate to="/404" /> }
//     ]
//   }
// ];

class routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSeller: false,
      showApprover: false,
      currentUser: undefined
      // showSeller: true,
      // showApprover: false,
      // currentUser: true
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showSeller: user.roles.includes('ROLE_MODERATOR'),
        showApprover: user.roles.includes('ROLE_ADMIN')
      });
    }
  }

  render() {
    const { currentUser, showSeller, showApprover } = this.state;
    return (
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<LoginView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<LoginView />} />
          <Route path="*" element={<LoginView />} />
          <Route path="404" element={<Navigate to="/404" />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
        {/* {currentUser? console.log('yes') : console.log('no')} */}
        {currentUser ? (
          <Route path="app" element={<DashboardLayout />}>
            <Route path="/" element={<DashboardView />} />
            <Route path="dashboard" element={<DashboardView />} />
            {showSeller && (
              <Route path="pricing" element={<PricingListView />} />
            )}
            {showApprover && <Route path="trade" element={<TradeView />} />}

            <Route path="account" element={<AccountView />} />
            <Route path="market" element={<MarketView />} />
            <Route path="*" element={<DashboardView />} />
          </Route>
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    );
  }
}

// const routes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />} />
//       <Route path="login" element={<LoginView />} />
//       <Route path="register" element={<LoginView />} />
//       <Route path="*" element={<LoginView />} />
//       <Route path="404" element={<Navigate to="/404" />} />

//       <Route path="app" element={<DashboardLayout />}>
//         <Route path="/" element={<DashboardView />} />
//         <Route path="dashboard" element={<DashboardView />} />
//         <Route path="pricing" element={<PricingListView />} />
//         <Route path="trade" element={<TradeView />} />
//         <Route path="account" element={<AccountView />} />
//         <Route path="market" element={<MarketView />} />
//       </Route>
//     </Routes>
//   );
// };

// {
//   path: 'app',
//   element: <DashboardLayout />,
//   children: [
//     { path: 'account', element: <AccountView /> },
//     { path: 'pricing', element: <PricingListView /> },
//     { path: 'dashboard', element: <DashboardView /> },
//     { path: 'products', element: <ProductListView /> },
//     { path: 'settings', element: <SettingsView /> },
//     { path: 'market', element: <MarketView /> },
//     { path: 'trade', element: <TradeView /> },
//     { path: '*', element: <Navigate to="/404" /> },
//     { path: 'profile', element: <ProfileView /> }
//   ]
// },
// {
//   path: '/',
//   element: <MainLayout />,
//   children: [
//     { path: 'login', element: <LoginView /> },
//     { path: 'register', element: <RegisterView /> },
//     { path: '404', element: <NotFoundView /> },
//     { path: '/', element: <Navigate to="/app/dashboard" /> },
//     { path: '*', element: <Navigate to="/404" /> }
//   ]
// }
// ];

export default routes;
