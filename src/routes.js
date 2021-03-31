import React from 'react';
import { Navigate, Switch, Redirect } from 'react-router-dom';
import DashboardLayout from '/src/layouts/DashboardLayout';
import MainLayout from '/src/layouts/MainLayout';
import AccountView from '/src/views/account/AccountView';
import PricingListView from '/src/views/pricing/PricingListView';
import DashboardView from '/src/views/reports/DashboardView';
import LoginView from '/src/views/auth/LoginView';
// import LoginView from '/src/components/login.component';
import NotFoundView from '/src/views/errors/NotFoundView';
import ProductListView from '/src/views/product/ProductListView';
import RegisterView from '/src/views/auth/RegisterView';
import SettingsView from '/src/views/settings/SettingsView';
import MarketView from '/src/views/market/MarketView';
import TradeView from '/src/views/trade/TradeView';
import ProfileView from '/src/components/profile.component';
import { Route, Routes } from 'react-router';

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
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
        {sessionStorage.getItem('user') ? (
          <Route path="app" element={<DashboardLayout />}>
            <Route path="/" element={<DashboardView />} />
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="pricing" element={<PricingListView />} />
            <Route path="trade" element={<TradeView />} />
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
