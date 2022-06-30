const Feature = ({src,title,text})=>{
    return(<div>
       <img src={`/app-assets/images/backgrounds/${src}`} className="img-small"  alt="feature icon"/>
        <h5 className="font-weight-bold mt-1">
            {title}
        </h5>
        <p className="features-text mt-1 mb-1">
            {text}
        </p>

    </div>
    )
}
export default Feature;