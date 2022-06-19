export const openModal = (id)=>{
    const modal = document.getElementById(id);
    modal.classList.add("show");
    modal.style.display="block"
}