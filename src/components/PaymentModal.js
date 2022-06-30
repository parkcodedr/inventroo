
const PaymentModal = ({id,onClick,enableTitle,title,modalBody,btnOk,btnCancel,btnOkType,btnCancelType,children})=>{
return (
<div className="modal fade" id={id} tabindex="-1" aria-labelledby={id} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      {enableTitle? (
        <div className="modal-header">
        <h5 className="modal-title" id={`${id}ModalLabel`}>
            <div className="d-flex justify-centent-between align-items-center">
                <p>{title}</p>
               
            </div>
        </h5>
        
      </div>
      ):""}
      
      <div className={modalBody?'modal-body':''}>
        {children}
      </div>
      <div className="modal-footer justify-content-center">
      <button type="button" data-dismiss="modal" className={`${btnCancelType}`}>{btnCancel}</button>
       
          <button type="button" className={`${btnOkType}`} onClick={onClick}>{btnOk}</button>
     
      </div>
    </div>
  </div>
</div>
    )
}
export default PaymentModal