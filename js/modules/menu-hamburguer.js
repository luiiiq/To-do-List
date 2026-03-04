export default class MenuHamburguer {
  constructor(menuButton, navLista, eventos) {
    this.menu = document.querySelector(menuButton);
    this.nav = document.querySelector(navLista);
    this.eventos = eventos;
    this.ativarMenu = this.ativarMenu.bind(this);
  };

  ativarMenu(event) {
    event.currentTarget.classList.toggle("inativo");
    event.currentTarget.classList.toggle("ativo");
    this.nav.classList.toggle("abrir");
    this.clicarForaMenu(this.nav, this.eventos, () => {
      this.nav.classList.remove("abrir");
      this.menu.classList.remove("ativo");
      this.menu.classList.add("inativo");
    });
  };

  clicarForaMenu(elementoMenu, eventos, callback) {
    const html = document.documentElement;
    if (!elementoMenu.hasAttribute("data-click", "")) {
      eventos.forEach((evento) => {
        setTimeout(() => {
          html.addEventListener(evento, controlarClick);
        });
      });
      elementoMenu.setAttribute("data-click", "");
    };

    function controlarClick(event) {
      if (!elementoMenu.contains(event.target) && event.target !== this.menu) {
        elementoMenu.removeAttribute("data-click");
        eventos.forEach((evento) => {
          html.removeEventListener(evento, controlarClick);
        });
        callback();
      };
    };
  };
  init() {
    if (this.menu && this.nav) {
      this.menu.addEventListener("click", this.ativarMenu);
    };
    return this;
  };
};
