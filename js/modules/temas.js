export default class Temas {
  constructor(tema) {
    this.temaButton = document.querySelector(tema);
    this.html = document.documentElement;
    this.controlarTemas = this.controlarTemas.bind(this);
  };

  verificarModo() {
    this.modo = localStorage.getItem("tema");
    if (this.modo === "escuro") {
      this.html.classList.add("tema-escuro");
    } else if (this.modo === "claro") {
      this.html.classList.remove("tema-escuro");
    };
  };

  verificarImgModo() {
    if (this.modo === "escuro") {
      this.temaButton.innerHTML = `
              <img src="./img/modo-escuro-ativado.svg" alt="Modo-escuro ativado">
              <img src="./img/modo-claro-desativado.svg" alt="Modo-claro desativado">
          `;
    } else if (this.modo === "claro") {
      this.temaButton.innerHTML = `
            <img src="./img/modo-escuro-desativado.svg" alt="Modo-escuro desativado">
            <img src="./img/modo-claro-ativado.svg" alt="Modo-claro ativado">
          `;
    };
  };
  controlarTemas() {
    this.html.classList.toggle("tema-escuro");
    if (this.html.classList.contains("tema-escuro")) {
      localStorage.setItem("tema", "escuro");
      this.temaButton.innerHTML = `
            <img src="./img/modo-escuro-ativado.svg" alt="Modo-escuro ativado">
            <img src="./img/modo-claro-desativado.svg" alt="Modo-claro desativado">
          `;
    } else {
      localStorage.setItem("tema", "claro");
      this.temaButton.innerHTML = `
            <img src="./img/modo-escuro-desativado.svg" alt="Modo-escuro desativado">
            <img src="./img/modo-claro-ativado.svg" alt="Modo-claro ativado">
        `;
    };
  };

  init() {
    this.verificarModo();
    if (this.temaButton) {
      this.verificarImgModo();
      this.temaButton.addEventListener("click", this.controlarTemas);
    };
    return this;
  };
}
