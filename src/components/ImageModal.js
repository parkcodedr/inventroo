import { useHistory } from "react-router-dom"
import {useHandleCloseModal} from 'components/hooks/useCloseModal';
const ImageModal = ({src,link,name})=>{
    const history = useHistory();

    const HandleCloseModal = (id)=>{
      document.getElementById(id).classList.remove("show", "d-block");
      document.querySelectorAll(".modal-backdrop")
          .forEach(el => el.classList.remove("modal-backdrop"));
  }

    const loadTill = (link)=>{
        history.push(link)
        HandleCloseModal(`${name}Modal`);
    }
return (
<div class="modal fade col-md-12" id={`${name}Modal`} tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
     
      <div class="modal-body bg-transparent">
        <img src={src} height="100%" width="100%" alt="till image" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-main" onClick={()=>loadTill(link)}>LOAD TILL</button>
      </div>
    </div>
  </div>
</div>
)
}

export default ImageModal;