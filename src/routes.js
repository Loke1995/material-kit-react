import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '/src/layouts/DashboardLayout';
import MainLayout from '/src/layouts/MainLayout';
import AccountView from '/src/views/account/AccountView';
import PricingListView from '/src/views/pricing/PricingListView';
import DashboardView from '/src/views/reports/DashboardView';
import LoginView from '/src/views/auth/LoginView';
import NotFoundView from '/src/views/errors/NotFoundView';
import ProductListView from '/src/views/product/ProductListView';
import RegisterView from '/src/views/auth/RegisterView';
import SettingsView from '/src/views/settings/SettingsView';
import MarketView from '/src/views/market/MarketView';
import TradeView from '/src/views/trade/TradeView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'pricing', element: <PricingListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'market', element: <MarketView /> },
      { path: 'trade', element: <TradeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
