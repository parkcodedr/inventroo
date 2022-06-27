const Feature = ({src,title,text})=>{
    return(<div>
       <img src={`/app-assets/images/backgrounds/${src}`} className="img-small"  alt="feature icon"/>
        <h4 className="font-weight-bold">
            {title}
        </h4>
        <p className="features-text mt-1 mb-1">
            {text}
        </p>

    </div>
    )
}
export default Feature;