import LoadingButton from 'components/LoadingButton';

const Modal = ({loading,id,enableTitle,modalBody,title,mode,time,btnOk,btnCancel,btnOkType,btnCancelType,onClick,onCloseModal,children})=>{
    return (
<div className="modal fade" id={id}  aria-labelledby={id} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      {enableTitle? (
        <div className="modal-header">
        <h5 className="modal-title" id={`${id}ModalLabel`}>
            <div className="d-flex justify-centent-between align-items-center">
                <p>{title}</p>
                <p>{mode}</p>
                <p>{time}</p>
            </div>
        </h5>
        
      </div>
      ):""}
      
      <div className={modalBody?'modal-body':''}>
        {children}
      </div>
      <div className="modal-footer">
      <button type="button" data-dismiss="modal" className={`${btnCancelType}`} onClick={onCloseModal}>{btnCancel}</button>
        {loading?(
          <LoadingButton/>
        ):(
          <button type="button" className={`${btnOkType}`} onClick={onClick}>{btnOk}</button>
        )}

       
   
      </div>
    </div>
  </div>
</div>
    )
}
export default Modal