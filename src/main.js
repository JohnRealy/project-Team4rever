(() => {
  const refs = { 
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll("[data-menu-link]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
 
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("menu-open");
  }
})();