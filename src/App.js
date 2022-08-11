import React,{useEffect} from 'react';
import Loader from 'components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import {Switch,Route,} from "react-router-dom";
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
import { authCheckState } from 'store/actions/auth';
import { useDispatch,useSelector } from 'react-redux';


export default function App() {
  const dispatch =  useDispatch();
  const {token} = useSelector(state=>state.auth);
  useEffect(()=>{
     if(!token){
      dispatch(authCheckState());
     }
  },[])

    return (
      <div>
        <Switch>
        <Route path="/" exact>
          <React.Suspense fallback={<div className="d-flex justify-content-center align-items-center"><Loader/></div>}>
          <Home />
            </React.Suspense>
          </Route>
        <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/login" exact>
          <React.Suspense fallback={<div className="d-flex justify-content-center align-items-center"><Loader/></div>}>
          <Login/>
            </React.Suspense>
          </Route>
          <Route path="/connect-sales" exact>
          <React.Suspense fallback={<div className="d-flex justify-content-center align-items-center"><Loader/></div>}>
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
