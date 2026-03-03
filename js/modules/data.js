export default function dataTarefa() {
  let cesta = JSON.parse(localStorage.getItem("cesta")) || [];

  let prazoLista = [];
  function criarListaPrazo() {
    cesta.forEach((elemento) => {
      prazoLista.push(elemento.prazo);
    });
  }
  criarListaPrazo();

  function validarPrazo(item) {
    item = item.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, `$3/$2/$1`);
    return item;
  }

  function prazoVerificar(dataPrazo) {
    const hoje = new Date();
    const alvo = new Date(dataPrazo);
    const diferenca = alvo - hoje;

    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    return dias;
  }

  let prazoListaSpan = [...prazoLista];
  function prazoHtml() {
    const prazoTarefa = document.querySelectorAll(".p-item");

    prazoListaSpan.forEach((prazo, index) => {
      prazoListaSpan[index] = prazo.replace(
        /(\d{4})-(\d{2})-(\d{2})/g,
        "$3/$2/$1",
      );
    });
    prazoTarefa.forEach((itemTarefa) => {
      const dataDaTarefa = itemTarefa.firstChild.textContent.trim();
      prazoListaSpan.forEach((prazo) => {
        if (prazo === dataDaTarefa) {
          const span = itemTarefa.querySelector("span");
          const resultado = prazoVerificar(validarPrazo(prazo));
          if (resultado < -0) {
            span.classList.add("atrasou");
            span.classList.remove("hoje");
            span.innerHTML = `Já passou dessa data!`;
          } else if (resultado === -0) {
            span.classList.add("hoje");
            span.classList.remove("atrasou");
            span.innerHTML = `Chegou o dia`;
          } else if (!resultado && resultado !== -0) {
            span.classList.remove("hoje");
            span.classList.add("atrasou");
            span.innerHTML = `Data não Encontrada!`;
          } else {
            span.classList.remove("hoje");
            span.classList.remove("atrasou");
            span.innerHTML = `Faltam ${resultado} dias`;
          }
        }
      });
    });
  }
  prazoHtml();
}
