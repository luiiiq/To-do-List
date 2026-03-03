export default class HrefMarcador {
  constructor(linksLista, iconesLista) {
    this.links = document.querySelectorAll(linksLista);
    this.iconesLinks = document.querySelectorAll(iconesLista);

    this.linkSelecionado = this.linkSelecionado.bind(this);
  };

  linkSelecionado() {
    const windowLink = window.location.pathname;
    this.links.forEach((link) => {
      const href = link.pathname;
      if (href === windowLink) {
        link.classList.add("linkAtual");
      } else {
        link.classList.remove("linkAtual");
      };
    });
    this.iconesLinks.forEach((link) => {
      const href = link.pathname;
      if (href === windowLink) {
        link.classList.add("pag-atual");
      } else {
        link.classList.remove("pag-atual");
      };
    });
  };

  init() {
    if (this.links.length && this.iconesLinks.length) {
      this.linkSelecionado();
    };
    return this;
  };
};
