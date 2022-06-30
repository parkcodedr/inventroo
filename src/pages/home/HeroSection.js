import {Link} from 'react-router-dom'
const HeroSection = ()=>{
return(
    <div className="row  justify-content-center ml-lg-3">
        <section className="col-md-7">
            <h5 className="color-main">Hassle-free Business Operations For SMEs</h5>
            <h1 className="font-weight-bolder hero-title">Cloud-based</h1>
            <h1 className="font-weight-bolder hero-title">retail tech stack</h1>
            <h1 className="font-weight-bolder hero-title">build for <span className="color-main">Inventory.</span></h1>
            <p className="hero-text mt-1">Troo offers smart point-of-sales system for every</p>
            <p className="hero-text">Setup shops, take orders, accept payments, track inventory
                <br/>grow sales and manage employees all in one place
            </p>
            <Link to="/register">
            <button className="btn col-md-5 btn-main pr-2 pl-2 mt-2">Get Started</button>
            </Link>
        </section>
        <section className="col-md-5">
        <img src="/app-assets/images/backgrounds/hero section image.png"  className="image-responsive " alt="Shop"/>
        </section>

    </div>
)
}

export default HeroSection