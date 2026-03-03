export default class Config {
  constructor(tema) {
    this.temaLista = document.querySelectorAll(tema);
    this.html = document.documentElement;

    this.verificarTema = this.verificarTema.bind(this);
  };

  verificarTema() {
    const modo = localStorage.getItem("tema");
    if (modo === "claro") {
      this.temaLista[0].classList.add("ativo");
      this.temaLista[1].classList.remove("ativo");
    } else {
      this.temaLista[1].classList.add("ativo");
      this.temaLista[0].classList.remove("ativo");
    };
  };

  ativarTema(event) {
    if (event.currentTarget.innerText === "Claro") {
      localStorage.setItem("tema", "claro");
      this.html.classList.remove("tema-escuro");
    } else {
      localStorage.setItem("tema", "escuro");
      this.html.classList.add("tema-escuro");
    };

    if (this.temaLista[0] !== event.currentTarget) {
      this.temaLista[0].classList.remove("ativo");
      event.currentTarget.classList.toggle("ativo");
    } else {
      this.temaLista[1].classList.remove("ativo");
      event.currentTarget.classList.toggle("ativo");
    };
  };


  init() {
    if (this.temaLista.length) {
      this.verificarTema();
      this.temaLista.forEach((tema) => {
        tema.addEventListener("click", (event) => this.ativarTema(event));
      });
    };
    return this;
  };
};
