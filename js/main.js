function cerrarPanel(){
    let panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}


// FUNCION MODAL BROSS
const openModal = document.querySelector(".modal-bross");
const modal = document.querySelector(".m-bross");
const closeModal = document.querySelector(".close-bross");

openModal.addEventListener('click', (e)=>{
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// 

// FUNCION MODAL GUARDIANES
const openModal1 = document.querySelector(".modal-guardianes");
const modal1 = document.querySelector(".m-guardianes3");
const closeModal1 = document.querySelector(".close-guar");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

//
