const Modal = ({id,title,mode,time,btnOk,btnCancel,children})=>{
    return (
<div class="modal fade" id={id} tabindex="-1" aria-labelledby={id} aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id={`${id}ModalLabel`}>
            <div className="d-flex justify-centent-between align-items-center">
                <p>{title}</p>
                <p>{mode}</p>
                <p>{time}</p>
            </div>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {children}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-main" data-dismiss="modal">{btnOk}</button>
        <button type="button" class="btn btn-danger">{btnCancel}</button>
      </div>
    </div>
  </div>
</div>
    )
}
export default Modal