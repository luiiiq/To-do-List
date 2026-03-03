export default class Modal {
  constructor(modalButton, modalContainer, fecharButton, cancelarButton, modalItem) {
    this.modalAtivar = document.querySelector(modalButton);
    this.modal = document.querySelector(modalContainer);
    this.fechar = document.querySelector(fecharButton);
    this.cancelar = document.querySelector(cancelarButton);
    this.modalForm = document.querySelector(modalItem);
    this.inputs = document.querySelectorAll(".form-tarefa input");
    this.itensForm = document.querySelectorAll(".item-form .selecione");

    this.ativarModal = this.ativarModal.bind(this);
    this.desativarModal = this.desativarModal.bind(this);
  };

  ativarModal() {
    this.modal.classList.add("ativo");
  };

  desativarModal(event) {
    event.preventDefault();
    this.modal.classList.remove("ativo");
    this.inputs.forEach((input) => {
      input.value = "";
    });
    const modalValidos = this.modal.querySelectorAll(".valido");
    const modalFeitos = this.modal.querySelectorAll(".feita");
    modalValidos.forEach((valido) => {
      valido.classList.remove("valido");
    });
    modalFeitos.forEach((feito) => {
      feito.classList.remove("feita");
    });
    this.itensForm.forEach((item) => {
      item.innerText = "Selecione";
      item.parentElement.classList.remove("texto-selecionado");
      const selecione = item.parentElement.querySelector(".selecione");
      selecione.classList.remove("texto-selecionado");
    });
    this.itensForm[2].parentElement.parentElement.classList.remove(
      "categoria-valida",
    );
  };

  clicarForaModal(event) {
    if (event.target === this.modalForm) {
      this.modal.classList.remove("ativo");
      this.inputs.forEach((input) => {
        input.value = "";
      });
      const modalValidos = this.modal.querySelectorAll(".valido");
      const modalFeitos = this.modal.querySelectorAll(".feita");
      modalValidos.forEach((valido) => {
        valido.classList.remove("valido");
      });
      modalFeitos.forEach((feito) => {
        feito.classList.remove("feita");
      });
      this.itensForm.forEach((item) => {
        item.innerText = "Selecione";
        item.parentElement.classList.remove("texto-selecionado");
        const selecione = item.parentElement.querySelector(".selecione");
        selecione.classList.remove("texto-selecionado");
      });
      this.itensForm[2].parentElement.parentElement.classList.remove(
        "categoria-valida",
      );
    };
  };

  init() {
    if (this.modalAtivar && this.modal && this.fechar && this.cancelar && this.modalForm) {
      this.modalAtivar.addEventListener("click", this.ativarModal);
      this.fechar.addEventListener("click", this.desativarModal);
      this.cancelar.addEventListener("click", (event) => this.desativarModal(event));
      this.modalForm.addEventListener("click", (event) => this.clicarForaModal(event));
    };
  };
};
