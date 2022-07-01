import React,{useEffect} from 'react';
import Loader from 'components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
// import 'rsuite/dist/rsuite.min.css';
// import 'index.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  Home,
  Register,
  Login,
  ConnectSales,
  AdminDashboard,
  EmailConfirmation,
  Confirm,
  AddUserRole,
  UserRoles,
  OrganizationProfile,
  PageNotFound} from './pages'
import TillA from 'pages/till/TillA';
import TillB from 'pages/till/TillB';
import Kds from 'pages/till/Kds';

export default function App() {

    return (
      <div>
        <Switch>
        <Route path="/" exact>
          <React.Suspense fallback={<p className="d-flex justify-content-center align-items-center"><Loader/></p>}>
          <Home />
            </React.Suspense>
          </Route>
        <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/login" exact>
          <React.Suspense fallback={<p className="d-flex justify-content-center align-items-center"><Loader/></p>}>
          <Login/>
            </React.Suspense>
          </Route>
          <Route path="/connect-sales" exact>
          <React.Suspense fallback={<p className="d-flex justify-content-center align-items-center"><Loader/></p>}>
          <ConnectSales/>
            </React.Suspense>
          </Route>
          <Route path="/dashboard">
            <AdminDashboard/>
          </Route>

          <Route path="/email-confirmation">
            <EmailConfirmation />
          </Route>
          <Route path="/account/confirm">
            <Confirm/>
          </Route>
          <Route path="/account/setup/user-role/new">
            <AddUserRole/>
          </Route>
          <Route path="/account/setup/user-role">
            <UserRoles/>
          </Route>
          <Route path="/account/setup/org-profile">
           <OrganizationProfile/>
          
          </Route>
          <Route path="/till/restaurant">
           <TillA />
          </Route>
          <Route path="/till/glocery">
           <TillB/>
          </Route>
          <Route path="/till/kds">
           <Kds/>
          </Route>

      <Route path="*">
      <PageNotFound/>
      </Route>
        </Switch>
        <ToastContainer />
      </div>
    );
  }
