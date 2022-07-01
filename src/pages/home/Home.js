import React from 'react'
import { Link } from 'react-router-dom'
import { usePageSetup } from "components/hooks/usePageSetup";
import HeroSection from './HeroSection';
import Features from './Features';
import { services,screenCard } from "components/features";
import ServiceCard from './ServiceCard';
import Store from './Store';
import ScreenCard from 'components/ScreenCard';
import Footer from 'components/Footer';


const Home = () => {
  usePageSetup();
    return (
        <>
        <section className="home-bg">
            <div className="container">
              <nav  className="header-navbar navbar-expand-sm navbar navbar-with-menu">
                    <div className="navbar-wrapper">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="nav-item mobile-menu d-md-none float-left">
                                    <button className="nav-link menu-toggle hamburger hamburger--arrow js-hamburger is-active"><span className="hamburger-box"></span><span className="hamburger-inner"></span></button>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="navbar-brand nav-link">
                                    <img src="/app-assets/images/logo/troo-logo-color.png"  alt="branding logo" height="70%" width="70%" />
                  </a>
                                </li>
                                <li className="nav-item d-md-none float-right"><a data-toggle="collapse" data-target="#navbar-mobile1" className="nav-link open-navbar-container"><i className="fa fa-bars color-main"></i></a></li>
                            </ul>
                        </div>
                        <div className="navbar-container content">
                            <div id="navbar-mobile1" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h5 " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">tilltroo</a>
                                            <a className="dropdown-item" href="#">inventroo</a>
                                            <a className="dropdown-item" href="#">paytroo</a>
                      
                                            <a className="dropdown-item" href="#">scantroo</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h5 " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Businesses</a>
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
                                placeholder="Search" style={{borderRadius:'10px'}} />
                            <div class="form-control-position">
                                <i class="feather icon-search"></i>
                            </div>
                            
                        </fieldset>
                                  </span>
                                      
                                    </li>
                                    <li className="dropdown dropdown-user nav-item">
                                      <Link className="nav-link" to="/register">
                                      <button className="btn btn-success">Sign up</button>
                                      </Link>
                                      
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="mt-5">
                <HeroSection/>
                </main>
                
                <div className="text-center mx-auto mt-5">
                  <h3 className="color-main mt-5">Feature Rich Software, Hardware and Payments
                  </h3>
                  <h3 className="color-main">Designed for Your Business</h3>
                  <p className="hero-text mt-2">Whether you are just starting out, or looking to scale
                    our retail 
                  </p>
                  <p className="hero-text">operating system helps you streamline your operations.</p>
                </div>

                <Features/>

                {
        services.map(service=>(
            <ServiceCard
            service={service}
            

            />
        ))
       }
       <Store/>

       <div className="row mx-auto mt-5 justify-content-center">
       <h4 className="text-center color-main">Accessories Tailor-Made For Retail</h4>
       </div>
       <section className="row mx-auto justify-content-center mt-5">

       <div className="col-md-10">
       <div className="row">
       
       {
           screenCard.map(cardItem=>(
               <div className="col-md-4">
               <ScreenCard cardDetail={cardItem} />
               </div>
           ))
       }
       </div>
       </div>

       </section>

        </div>
       
        <Footer/>
        

        

        
       
       
        </section>
       

        </>
    )
}

export default Home
