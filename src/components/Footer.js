
import {Link} from 'react-router-dom';

const Footer = ()=>{
    return(
    <section className="bg-black text-white mt-5  pr-lg-5 pl-lg-5 pt-2">
    <div className="row justify-content-center">
    <div className="col-md-4 ">
    <div className="sales text-center">
    <div>    <img src="app-assets/images/logo/troo-logo-white.png"  alt="Troo Logo"/></div>
    <Link to="connect-sales" className="text-center">
    <button className="btn btn-success mt-1 col-md-6" type="button">Connect Sales</button>
    </Link>
    </div>
    
    </div>
    </div>
    <section className="row mx-auto p-lg-2">
    <div className="col-md-4">
    <ul className="nav flex-column">
    <li className="nav-item">
    <Link className="nav-link text-white" to="">Features</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="">POS Software</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="">Inventory Management System</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="">Payments</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="">Payroll Management</Link>
    </li>
    </ul>
    </div>

    <div className="col-md-4">
    <ul className="nav  flex-column">
    <li className="nav-item">
    <Link className="nav-link text-white" to="/privacy-policy">Privacy Policy</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="/contact">Contact Us</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="/about">About</Link>
    </li>
   
    </ul>
    </div>

    <div className="col-md-4">
    <ul className="nav  flex-column">
    <li className="nav-item">
    <Link className="nav-link text-white" to="/faq">FAQs</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="/help-center">Help Center</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-white" to="/about">business@inventroo.com</Link>
    </li>
   
    </ul>
    </div>
    
    </section>

     </section>
    )
}

export default Footer;