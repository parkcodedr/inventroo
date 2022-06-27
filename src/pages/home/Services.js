import Service from "./Service";

const Services = ()=>{
    return(
        <section className="row mt-5 mx-auto justify-content-center ml-lg-3">
            <div className="col-md-4">
            <img src="/app-assets/images/shop3.jpg" className="round mx-auto" alt="Shop"/>
            </div>
            <div className="col-md-8">
                <div className="row">
                <div className="col-md-6">
                    <Service/>
                </div>
                <div className="col-md-6">
                    <Service/>
                </div>
                <div className="col-md-6">
                    <Service/>
                </div>
                <div className="col-md-6">
                    <Service/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Services;