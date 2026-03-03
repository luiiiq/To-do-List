export default function menuHamburguer(menuButton, navLista) {
  const menu = document.querySelector(menuButton);
  const nav = document.querySelector(navLista);

  if (menu && nav) {
    function ativarMenu(event) {
      event.currentTarget.classList.toggle("inativo");
      event.currentTarget.classList.toggle("ativo");
      nav.classList.toggle("abrir");
      clicarForaMenu(nav, ["click", "touchstart"], () => {
        nav.classList.remove("abrir");
        menu.classList.remove("ativo");
        menu.classList.add("inativo");
      });
    }

    function clicarForaMenu(elementoMenu, eventos, callback) {
      const html = document.documentElement;
      if (!elementoMenu.hasAttribute("data-click", "")) {
        eventos.forEach((evento) => {
          setTimeout(() => {
            html.addEventListener(evento, controlarClick);
          });
        });
        elementoMenu.setAttribute("data-click", "");
      }

      function controlarClick(event) {
        if (!elementoMenu.contains(event.target) && event.target !== menu) {
          elementoMenu.removeAttribute("data-click");
          eventos.forEach((evento) => {
            html.removeEventListener(evento, controlarClick);
          });
          callback();
        }
      }
    }

    menu.addEventListener("click", (event) => ativarMenu(event));
  }
}
