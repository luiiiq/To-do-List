export default function modal(
  modalButton,
  modalContainer,
  fecharButton,
  cancelarButton,
  modalItem,
) {
  const modalAtivar = document.querySelector(modalButton);
  const modal = document.querySelector(modalContainer);
  const fechar = document.querySelector(fecharButton);
  const cancelar = document.querySelector(cancelarButton);
  const modalForm = document.querySelector(modalItem);

  if (modalAtivar && modal && fechar && cancelar && modalForm) {
    const inputs = document.querySelectorAll(".form-tarefa input");
    const itensForm = document.querySelectorAll(".item-form .selecione");

    function ativarModal() {
      modal.classList.add("ativo");
    }

    function desativarModal(event) {
      event.preventDefault();
      modal.classList.remove("ativo");
      inputs.forEach((input) => {
        input.value = "";
      });
      const modalValidos = modal.querySelectorAll(".valido");
      const modalFeitos = modal.querySelectorAll(".feita");
      modalValidos.forEach((valido) => {
        valido.classList.remove("valido");
      });
      modalFeitos.forEach((feito) => {
        feito.classList.remove("feita");
      });
      itensForm.forEach((item) => {
        item.innerText = "Selecione";
        item.parentElement.classList.remove("texto-selecionado");
        const selecione = item.parentElement.querySelector(".selecione");
        selecione.classList.remove("texto-selecionado");
      });
      itensForm[2].parentElement.parentElement.classList.remove(
        "categoria-valida",
      );
    }

    function clicarForaModal(event) {
      if (event.target === modalForm) {
        modal.classList.remove("ativo");
        inputs.forEach((input) => {
          input.value = "";
        });
        const modalValidos = modal.querySelectorAll(".valido");
        const modalFeitos = modal.querySelectorAll(".feita");
        modalValidos.forEach((valido) => {
          valido.classList.remove("valido");
        });
        modalFeitos.forEach((feito) => {
          feito.classList.remove("feita");
        });
        itensForm.forEach((item) => {
          item.innerText = "Selecione";
          item.parentElement.classList.remove("texto-selecionado");
          const selecione = item.parentElement.querySelector(".selecione");
          selecione.classList.remove("texto-selecionado");
        });
        itensForm[2].parentElement.parentElement.classList.remove(
          "categoria-valida",
        );
      }
    }

    modalAtivar.addEventListener("click", ativarModal);
    fechar.addEventListener("click", desativarModal);
    cancelar.addEventListener("click", (event) => desativarModal(event));
    modalForm.addEventListener("click", (event) => clicarForaModal(event));
  }
}
