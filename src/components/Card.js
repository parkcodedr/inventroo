const Card = ({title,time,mode,color,id})=>{
return(
    <div className="card shadow-none">
  <div className={`card-header bg-${color} text-white`}>
    <div className="d-flex justify-content-between">
        <h5>{title}</h5>
        <h5>{time}</h5>
    </div>
  </div>
  <div className="card-body">
    <h5 className="card-title text-center font-weight-bold">
        {mode}
        </h5>
    <p className="card-text text-center">
        <span className="feather icon-maximize mr-1"></span>
    <a href="#" className="text-center h4" data-toggle="modal" data-target={`#${id}`}>Tap to Expand</a>
    </p>
   
  </div>
</div>
)
}

export default Card