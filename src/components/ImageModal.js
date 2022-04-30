const ImageModal = ({src,link,name})=>{
return (
<div class="modal fade" id={`${name}Modal`} tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
        <img src={src} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">LOAD TILL</button>
      </div>
    </div>
  </div>
</div>
)
}

export default ImageModal;