import { features } from "components/features";
import Feature from "./Feature";


const Features = ()=>{
    return(
        <section className="row mt-5 mx-auto justify-content-center">
            <div className="col-md-4">
            <img src="/app-assets/images/backgrounds/features section image.png" className="image-responsive" alt="Shop"/>
            </div>
            <div className="col-md-8">
                <div className="row">
                {
                    features.map(feature=>(
                        <div className="col-md-6">
                        <Feature 
                        src={feature.img}
                        text={feature.text}
                        title={feature.title} />
                        </div>
                    ))
                }
               
                
                </div>
            </div>
        </section>
    )
}

export default Features;