export default function temas(tema) {
  const temaButton = document.querySelector(tema);
  const html = document.documentElement;

  const modo = localStorage.getItem("tema");

  if (modo === "escuro") {
    html.classList.add("tema-escuro");
  } else if (modo === "claro") {
    html.classList.remove("tema-escuro");
  }

  if (temaButton) {
    if (modo === "escuro") {
      temaButton.innerHTML = `
                <img src="./img/modo-escuro-ativado.svg" alt="Modo-escuro ativado">
                <img src="./img/modo-claro-desativado.svg" alt="Modo-claro desativado">
            `;
    } else if (modo === "claro") {
      temaButton.innerHTML = `
                <img src="./img/modo-escuro-desativado.svg" alt="Modo-escuro desativado">
                <img src="./img/modo-claro-ativado.svg" alt="Modo-claro ativado">
            `;
    }
    function controlarTemas() {
      html.classList.toggle("tema-escuro");
      if (html.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
        temaButton.innerHTML = `
                    <img src="./img/modo-escuro-ativado.svg" alt="Modo-escuro ativado">
                    <img src="./img/modo-claro-desativado.svg" alt="Modo-claro desativado">
                `;
      } else {
        localStorage.setItem("tema", "claro");
        temaButton.innerHTML = `
                    <img src="./img/modo-escuro-desativado.svg" alt="Modo-escuro desativado">
                    <img src="./img/modo-claro-ativado.svg" alt="Modo-claro ativado">
                `;
      }
    }

    temaButton.addEventListener("click", controlarTemas);
  }
}
