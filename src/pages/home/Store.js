const Store = ()=>{
return(
    <>
    <div className="row mx-auto">
    <section className="store-text col-md-6 mx-auto mt-5">
    <h3 className="text-center color-main">
    See How Troo Works For Your Business!
    </h3>
    <p className="text-center feature-text mt-1">
    Troo allows you create work flows streamlined for your kind of business. Sign up for free and 
    our customer success managers will help you explore a personalized solution for your business.
    </p>

    </section>
    <div className="row mx-auto justify-content-center mt-3">

    {/* <div className="col-md-4 m-1 flip">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src="/app-assets/images/backgrounds/restaurant image.png" className="image-responsive" />
    </div>
    
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
    </div>

    </div> */}

<div className="col-md-4 m-1">
    <img src="/app-assets/images/backgrounds/restaurant image.png" className="image-responsive"/>
    </div>
    <div className="col-md-4 m-1">
    <img src="/app-assets/images/backgrounds/retail stores & supermarket.png" className="image-responsive"/>
    </div>
    <div className="col-md-4 m-1">
    <img src="/app-assets/images/backgrounds/service businesses.png" className="image-responsive"/>
    </div>
    <div className="col-md-4 m-1">
    <img src="/app-assets/images/backgrounds/fashion apparel.png" className="image-responsive" />
    </div>
    </div>
    </div>
    </>
)
}
export default Store;