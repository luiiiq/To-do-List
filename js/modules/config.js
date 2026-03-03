export default function config(tema) {
  const temaLista = document.querySelectorAll(tema);
  const html = document.documentElement;

  const modo = localStorage.getItem("tema");

  if (temaLista.length) {
    if (modo === "claro") {
      temaLista[0].classList.add("ativo");
      temaLista[1].classList.remove("ativo");
    } else {
      temaLista[1].classList.add("ativo");
      temaLista[0].classList.remove("ativo");
    }

    function ativarTema(event) {
      if (event.currentTarget.innerText === "Claro") {
        localStorage.setItem("tema", "claro");
        html.classList.remove("tema-escuro");
      } else {
        localStorage.setItem("tema", "escuro");
        html.classList.add("tema-escuro");
      }

      if (temaLista[0] !== event.currentTarget) {
        temaLista[0].classList.remove("ativo");
        event.currentTarget.classList.toggle("ativo");
      } else {
        temaLista[1].classList.remove("ativo");
        event.currentTarget.classList.toggle("ativo");
      }
    }

    temaLista.forEach((tema) => {
      tema.addEventListener("click", (event) => ativarTema(event));
    });
  }
}
