

const ServiceCard = ({service})=>{
    return(
        <div className={`row mx-auto justify-content-center mt-2 pr-lg-3 pl-lg-3 ${service.right===true? 'background-right service-card-right':'background-left service-card-left'} `}>
            {service.right===true?(
                <>
                <div className="col-md-4 pt-5 pb-5">
                 <img src={`/app-assets/images/backgrounds/${service.image}`} className="image-responsive" />
                 </div>

                <section className="col-md-8 p-lg-5">
                <img src={`/app-assets/images/backgrounds/${service.logo}`} className="col-md-3 mt-2"  />
                <h4 className="color-main mt-1 mb-1">{service.title}</h4>
                <div className="col-md-8 justify-content-end color-main">
               
                <ul className="hero-text">
                    {service.items.map((item,index)=>(
                        <li className="mb-1" key={index}>
                            {item}
                    </li>
                    ))}
                    
                </ul>
                <button className="btn col-md-5 btn-main pr-lg-2 pl-lg-2 mt-2">Learn more</button>
            
                </div>
                </section>
                 
                </>
            ):(
                <>
         
                <section className="col-md-8 p-lg-5">
                <img src={`/app-assets/images/backgrounds/${service.logo}`} className="col-md-3 mt-2"  />
                <h4 className="color-main mt-1 mb-1">Android Compactible POS Hardware & Accessories</h4>
                <div className="col-md-8">
               
                <ul className="hero-text">
                    {service.items.map((item,index)=>(
                        <li className="mb-1" key={index}>
                            {item}
                    </li>
                    ))}
                    
                </ul>
                <button className="btn col-md-5 btn-main pr-lg-2 pl-lg-2 mt-2">Learn more</button>
            
                </div>
                </section>
                <div className="col-md-4 pt-5 pb-5">
                 <img src={`/app-assets/images/backgrounds/${service.image}`} className="image-responsive" />
                 </div>
                </>
            )}
           


        </div>
    )
}
export default ServiceCard;