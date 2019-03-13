import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Billing = React.lazy(() => import('./views/AccountingLayout/Billing'));
const Forms = React.lazy(() => import('./views/Base/Forms/Forms'));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/billing', exact: true, name: 'Billing', component: Billing },
  { path: '/forms', exact: true, name: 'Forms', component: Forms },

];

export default routes;
