import React,{useEffect} from "react";
import {
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

import Nav from "../components/Nav";
import TopNav from "../components/TopNav";

import {useSelector} from 'react-redux';
import {routes} from '../components/routes/AdminRoutes'

const AdminDashboard = () => {
  const history = useHistory();
  const {pathname} = useLocation();
  const { token} = useSelector((state) => state.auth);


  if(!token){
    history.push("/login");
  }
  useEffect(()=>{

        document.body.classList.add("2-columns");
        document.body.classList.add("fixed-navbar");
        document.body.classList.add("vertical-layout");
        document.body.classList.add("vertical-menu-modern");

    return ()=>{
      document.body.classList.remove("2-columns");
      document.body.classList.remove("fixed-navbar");
      document.body.classList.remove("vertical-layout");
      document.body.classList.remove("vertical-menu-modern");
    }
    },[])

    return (
        <>
            <TopNav/>
            <Nav/>

        <div className="app-content content">
      <div className="content-wrapper">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
              </Switch>
              </div>
              </div>

      </>
     );
}

export default AdminDashboard;
