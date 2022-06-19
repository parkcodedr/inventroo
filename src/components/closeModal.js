export const closeModal = (id)=>{
    document.getElementById(id).classList.remove("show", "d-block");
    document.getElementById(id).style.display="none";
    document.querySelectorAll(".modal-backdrop")
        .forEach(el => el.classList.remove("modal-backdrop"));
}