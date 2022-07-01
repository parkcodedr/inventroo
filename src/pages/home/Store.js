import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Link} from 'react-router-dom';
import { hoverState } from 'components/features';

const Store = ()=>{
  const ref = useRef();
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

    <section className="col-md-9">
    <div className="row">
    
    {hoverState.map(state=>(
      
      <div className="col-md-6 mb-1" key={state.id}>
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
    >
      <FrontSide style={{border:'none',padding:'0px'}}>
      <img src={`/app-assets/images/backgrounds/${state.image}`} alt={state.title} className="image-responsive" />
      </FrontSide>
      <BackSide style={{ backgroundColor: '#62E1AA'}}>
      <div className="text-center mb-1">
      
      <img src={`/app-assets/images/backgrounds/${state.icon}`} alt={state.title} className="flip-card-image" />
      </div>
        <h5 className="text-white text-center">{state.title}</h5>
        <p className="hero-text text-center">{state.text}</p>
        <div className="text-center mt-1">
        <Link to={state.link} >
        <button className="btn btn-main">Apply Now</button>
        </Link>
        </div>
        
        
      </BackSide>
    </Flippy>
      
      </div>
      ))}
    </div>
     

    </section>
    
    </div>
    </div>
    </>
)
}
export default Store;