export  const useHandleCloseModal = (id)=>{
    document.getElementById(id).classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
        .forEach(el => el.classList.remove("modal-backdrop"));
}