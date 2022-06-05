const Modal = ({id,title,mode,time,btnOk,btnCancel,btnOkType,btnCancelType,children})=>{
    return (
<div className="modal fade" id={id} tabindex="-1" aria-labelledby={id} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id={`${id}ModalLabel`}>
            <div className="d-flex justify-centent-between align-items-center">
                <p>{title}</p>
                <p>{mode}</p>
                <p>{time}</p>
            </div>
        </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer">
      <button type="button" data-dismiss="modal" className={`${btnCancelType}`}>{btnCancel}</button>
        <button type="button" className={`${btnOkType}`} >{btnOk}</button>
   
      </div>
    </div>
  </div>
</div>
    )
}
export default Modal