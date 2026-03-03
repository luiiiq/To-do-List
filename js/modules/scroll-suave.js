export default class ScrollSuave {
  constructor(sections) {
    this.scrollLista = document.querySelectorAll(sections);
    this.alturaMinima = window.innerHeight * 0.6;

    this.ativarScrollSuave = this.ativarScrollSuave.bind(this);
  };

  ativarScrollSuave() {
    this.scrollLista.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visivel = sectionTop - this.alturaMinima < 0;
      if (visivel) {
        section.classList.add("ativo");
      };
    });
  };

  init() {
    if (this.scrollLista.length) {
      this.ativarScrollSuave();
      window.addEventListener("scroll", this.ativarScrollSuave);
    };
    return this;
  };
};
