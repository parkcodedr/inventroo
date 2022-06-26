import React from 'react'
import { Link } from 'react-router-dom'
import { usePageSetup } from "components/hooks/usePageSetup";
import HeroSection from './HeroSection';


const Home = () => {
  usePageSetup();
    return (
        <div className="container">
              <nav  className="header-navbar navbar-expand-sm navbar navbar-with-menu navbar-light  border-lighten">
                    <div className="navbar-wrapper">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="nav-item mobile-menu d-md-none float-left">
                                    <button className="nav-link menu-toggle hamburger hamburger--arrow js-hamburger is-active"><span className="hamburger-box"></span><span className="hamburger-inner"></span></button>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="navbar-brand nav-link">
                                    <img src="/app-assets/images/logo/troo-logo-color.png"  alt="branding logo" height="60%" width="60%" />
                  </a>
                                </li>
                                <li className="nav-item d-md-none float-right"><a data-toggle="collapse" data-target="#navbar-mobile1" className="nav-link open-navbar-container"><i className="fa fa-ellipsis-v"></i></a></li>
                            </ul>
                        </div>
                        <div className="navbar-container content">
                            <div id="navbar-mobile1" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h5" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">tilltroo</a>
                                            <a className="dropdown-item" href="#">inventroo</a>
                                            <a className="dropdown-item" href="#">paytroo</a>
                      
                                            <a className="dropdown-item" href="#">scantroo</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h5" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Businesses</a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">tilltroo</a>
                                            <a className="dropdown-item" href="#">inventroo</a>
                                            <a className="dropdown-item" href="#">paytroo</a>
                      
                                            <a className="dropdown-item" href="#">scantroo</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h5" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shops</a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">tilltroo</a>
                                            <a className="dropdown-item" href="#">inventroo</a>
                                            <a className="dropdown-item" href="#">paytroo</a>
                      
                                            <a className="dropdown-item" href="#">scantroo</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav">
                                    <li className="dropdown dropdown-search nav-item">
                                  <span className="nav-link mt-1">
                                  <fieldset class="form-group position-relative has-icon-left">
                            <input type="text" class="form-control mb-1" 
                                placeholder="Search"/>
                            <div class="form-control-position">
                                <i class="feather icon-search"></i>
                            </div>
                            
                        </fieldset>
                                  </span>
                                      
                                    </li>
                                    <li className="dropdown dropdown-user nav-item">
                                      <a className="nav-link">
                                      <button className="btn btn-success">Sign up</button>
                                      </a>
                                      
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="mt-5">
                <HeroSection/>
                </main>
        </div>
    )
}

export default Home
