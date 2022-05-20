export const AccordianItem = ({title,id,parent,show,headerId,bg,children})=>{
    return (
        <div className="card accordion collapse-icon accordion-icon-rotate">
					<div id={headerId} className="card-header primary" data-toggle="collapse" href={`#${id}`} aria-expanded={show}
					aria-controls={id}>
						<a className="collapsed font-weight-bold" href="#">{title}</a>
					</div>
					<div id={id}  role="tabpanel" data-parent={`#${parent}`} aria-labelledby={title} className={`collapse ${show}`}>
						<div className={`card-content p-1 ${bg}`}>
							<div className="">
                            {
                            children
                            }
							</div>
						</div>
					</div>
				</div>
    )
}