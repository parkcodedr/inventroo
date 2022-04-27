import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from '../store/actions/auth';
import { useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useSelector} from 'react-redux';

const TopNav = () => {
  const { user} = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = ()=>{
    history.push('/login');
    dispatch(logout());
  }


    return (
        <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-semi-dark">
      <div className="navbar-wrapper">
        <div className="navbar-header bg-dark-nav" style={{ background:"#3d199f" }}>
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-lg-none mr-auto">
                <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="feather icon-menu font-large-1"></i></a></li>
            <li className="nav-item mr-auto">
                <a className="navbar-brand" href="#">
                    <img className="brand-logo" width="15%" height="15%" alt="stack admin logo" src="/app-assets/images/logo/user-64.png"/>
                <h6 className="brand-text">ID:{user && user.userID}</h6></a>
                </li>

            <li className="nav-item d-none d-lg-block">
                <Link to="/login" className="nav-link pr-0 mt-1"><i className="feather icon-log-out font-medium-3 white" data-ticon="feather.icon-toggle-right"></i>
                </Link></li>
            <li className="nav-item d-lg-none"><a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v"></i></a></li>
          </ul>
        </div>
        <div className="navbar-container content" style={{ background:"#eeeeee" }}>
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left col-md-8">
              <li className="dropdown nav-item mega-dropdown d-none d-lg-block">
                  <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                      <i className="feather icon-plus-circle"></i>
                  </a>
                <ul className="mega-dropdown-menu dropdown-menu row p-1">

                  <li className="col-md-4">
                    <h6 className="font-weight-bold font-medium-2">
                        <i className="feather icon-grid"></i>
                        General
                    </h6>
                    <ul className="row mt-1 mt-xl-2">
                      <li className="col-12 col-xl-12 pl-0">
                        <ul className="mega-component-list">
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/add-user"}>Add Users</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/products"}>Products</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/inventory"}>Inventory Adjustment</Link></li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                  <li className="col-md-4">
                    <h6 className="font-weight-bold font-medium-2">
                        <i className="feather icon-shopping-cart"></i>
                        Sales
                    </h6>
                    <ul className="row mt-1 mt-xl-2">
                      <li className="col-md-12 col-xl-12 pl-0">
                        <ul className="mega-component-list">
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Customer</a></li>
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Invoices</a></li>
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Sales Order</a></li>
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Packages</a></li>
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Customer Payment</a></li>
                          <li className="mega-component-item"><a className="mb-1 mb-xl-2" >Credit Notes</a></li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                  <li className="col-md-4">
                    <h6 className="font-weight-bold font-medium-2">
                        <i className="feather icon-shopping-bag"></i>
                        Purchases
                    </h6>
                    <ul className="row mt-1 mt-xl-2">
                      <li className="col-md-12 col-xl-12 pl-0">
                        <ul className="mega-component-list">
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/vendor"}>Vendor</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/vendor"}>Bills</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/vendor"}>Purchase Orders</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/vendor"}>Vendor Payments</Link></li>
                          <li className="mega-component-item"><Link className="mb-1 mb-xl-2" to={"/vendor"}>Vendor Credit</Link></li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-none d-md-block">
                  <a className="nav-link" ><i className="ficon feather icon-refresh-cw"></i>
              </a>
              </li>

              <div className="col-xl-8 col-lg-8 col-md-8 d-flex align-items-center ">
                <fieldset className="form-group has-icon-left search-bar">
                    <select className="custom-select pl-3 round" id="customSelect" style={{ height:"32px" }}>
                        <option >Search in Items</option>
                        <option value="1">Customers</option>
                        <option value="2">Vendors</option>
                        <option value="3">Invoices</option>
                        <option value="3">Packages</option>
                        <option value="3">Sales Orders</option>
                        <option value="3">Credit Notes</option>
                        <option value="3">Bills</option>
                        <option value="3">Vendor Credit</option>
                        <option value="3">Purchase Orders</option>
                        <option value="3">Items</option>
                        <option value="3">Composite Items</option>
                        <option value="3">Advance Search</option>

                    </select>
                    <div className="form-control-position mr-5">
                      <i className="feather icon-search "></i>
                  </div>
                </fieldset>
            </div>
         </ul>
            <ul className="nav navbar-nav col-md-2">
              <li className="dropdown dropdown-notification nav-item ">
                <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                  <div className=""><i></i></div><span className="">{user? user.first_name:"Okwori"}</span>
                  </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right color-light">

                      <li className="scrollable-container media-list ">
                      
                      <div className="media justify-content-center mt-0 mx-auto ">

                        <div className="d-flex justify-content-center flex-column ">

                            <img className="mx-auto"  width="50%" height="50%" alt="user" src="/app-assets/images/logo/user-64.png"/>

                          <h4 className="text-center mt-2">OLA BANJI</h4>

                          <div className="text-center mt-0 mx-auto">
                            <p>User ID: 7865748</p>
                            <p>mark@gmail.com</p>
                            <p className="mt-2">

                              <Link to="/dashboard" >My Account</Link>|
<<<<<<< HEAD
                              <Link className="text-danger" to={"#"} onClick={logoutUser}> Sign out</Link>
=======
                              <Link className="text-danger" to={'#'} onClick={logoutUser}> Sign out</Link>
>>>>>>> 29e443bd37eabe35bbd0939113733749824c3d52
                            </p>
                          </div>

                        </div>
                      </div>
                     

                      </li>

                      <li className="dropdown-menu-header bg-white">
                        <h6 className="dropdown-header m-0 p-2"><span className="grey darken-2">MY ORGANIZATIONS</span><span className="float-right m-0 text-capitalize color-main"> <i className="feather icon-settings mr-1"></i> <Link to={'/account/setup/org-profile'}>Manage</Link></span></h6>
                      </li>
                        <div className="d-flex justify-content-between p-2 bg-white">
                        <div>
                        <h4>Gabriel</h4>
                        <p>Organization ID: 0908776</p>
                        <p>FREE</p>
                        </div>
                        <i className="fa fa-check-circle text-success"></i>
                        </div>

                </ul>
              </li>

            </ul>

            <ul className="nav navbar-nav col-md-6 ">
              <li className="dropdown dropdown-notification nav-item">
                  <a className="nav-link nav-link-label" href="#" data-toggle="dropdown">
                    <i className="ficon feather icon-user-plus"></i></a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right color-light">
                  <li className="scrollable-container media-list">

                  <section className="search-container p-1 " >
                  <p>Settings</p>
                  <fieldset className="form-group position-relative has-icon-left">
                    <input type="text" className="form-control form-control-sm  round"
                        placeholder="search settings"/>
                    <div className="form-control-position">
                        <i className="feather icon-search pl-1 pt-1"></i>
                    </div>

                </fieldset>
                  </section>

                   </li>

                   <div className="settings-nav pb-5 bg-white">
                   <ul className="nav flex-column ">
                     <li className="nav-item">
                       <Link className="nav-link ml-2" to={'/account/setup/org-profile'}>
                       <i className="feather icon-users"></i>
                       Organization Profile</Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link ml-2" to={'/account/setup/user-role'}>
                        <i className="feather icon-users"></i>
                       Users & Roles</Link>
                     </li>
                     <li className="nav-item">

                       <Link className="nav-link ml-2" to={'/account/setup/warehouse'}>
                       <i className="feather icon-home"></i>
                       Warehouse</Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link ml-2" to={'/account/setup/branches'}>
                       <i className="fa fa-building"></i>
                       Branches</Link>
                     </li>

                   </ul>
                   </div>

                </ul>
              </li>

              <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon feather icon-bell"></i></a>
              <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right color-light">
                <li className="scrollable-container media-list">

                <section className="search-container p-1 " >
                <p>Settings</p>
                <fieldset className="form-group position-relative has-icon-left">
                  <input type="text" className="form-control form-control-sm  round"
                      placeholder="search settings"/>
                  <div className="form-control-position">
                      <i className="feather icon-search pl-1 pt-1"></i>
                  </div>

              </fieldset>
                </section>

                 </li>

                 <div className="settings-nav pb-5 bg-white">
                 <ul className="nav flex-column ">
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/org-profile'}>
                     <i className="feather icon-users"></i>
                     Organization Profile</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/user-role'}>
                      <i className="feather icon-users"></i>
                     Users & Roles</Link>
                   </li>
                   <li className="nav-item">

                     <Link className="nav-link ml-2" to={'/account/setup/warehouse'}>
                     <i className="feather icon-home"></i>
                     Warehouse</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/branches'}>
                     <i className="fa fa-building"></i>
                     Branches</Link>
                   </li>

                 </ul>
                 </div>

              </ul>
              </li>

              <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon feather icon-settings"></i></a>
              <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right color-light">
                <li className="scrollable-container media-list">

                <section className="search-container p-1 " >
                <p>Settings</p>
                <fieldset className="form-group position-relative has-icon-left">
                  <input type="text" className="form-control form-control-sm  round"
                      placeholder="search settings"/>
                  <div className="form-control-position">
                      <i className="feather icon-search pl-1 pt-1"></i>
                  </div>

              </fieldset>
                </section>

                 </li>

                 <div className="settings-nav pb-5 bg-white">
                 <ul className="nav flex-column ">
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/org-profile'}>
                     <i className="feather icon-users"></i>
                     Organization Profile</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/user-role'}>
                      <i className="feather icon-users"></i>
                     Users & Roles</Link>
                   </li>
                   <li className="nav-item">

                     <Link className="nav-link ml-2" to={'/account/setup/warehouse'}>
                     <i className="feather icon-home"></i>
                     Warehouse</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/branches'}>
                     <i className="fa fa-building"></i>
                     Branches</Link>
                   </li>

                 </ul>
                 </div>

              </ul>
              </li>
              <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon feather icon-info"></i></a>
              <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right color-light">
                <li className="scrollable-container media-list">

                <section className="search-container p-1 " >
                <p>Settings</p>
                <fieldset className="form-group position-relative has-icon-left">
                  <input type="text" className="form-control form-control-sm  round"
                      placeholder="search settings"/>
                  <div className="form-control-position">
                      <i className="feather icon-search pl-1 pt-1"></i>
                  </div>

              </fieldset>
                </section>

                 </li>

                 <div className="settings-nav pb-5 bg-white">
                 <ul className="nav flex-column ">
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/org-profile'}>
                     <i className="feather icon-users"></i>
                     Organization Profile</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/user-role'}>
                      <i className="feather icon-users"></i>
                     Users & Roles</Link>
                   </li>
                   <li className="nav-item">

                     <Link className="nav-link ml-2" to={'/account/setup/warehouse'}>
                     <i className="feather icon-home"></i>
                     Warehouse</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link ml-2" to={'/account/setup/branches'}>
                     <i className="fa fa-building"></i>
                     Branches</Link>
                   </li>

                 </ul>
                 </div>

              </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
     );
}

export default TopNav;
