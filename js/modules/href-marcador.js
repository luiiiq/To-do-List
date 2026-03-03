export default function hrefMarcador(linksLista, iconesLista) {
  const links = document.querySelectorAll(linksLista);
  const iconesLinks = document.querySelectorAll(iconesLista);

  if (links.length || iconesLinks) {
    function linkSelecionado() {
      const windowLink = window.location.pathname;
      links.forEach((link) => {
        const href = link.pathname;
        if (href === windowLink) {
          link.classList.add("linkAtual");
        } else {
          link.classList.remove("linkAtual");
        }
      });
      iconesLinks.forEach((link) => {
        const href = link.pathname;
        if (href === windowLink) {
          link.classList.add("pag-atual");
        } else {
          link.classList.remove("pag-atual");
        }
      });
    }
    linkSelecionado();
  }
}
