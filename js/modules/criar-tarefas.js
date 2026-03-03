export default function criarTarefas() {
  const tarefasItens = document.querySelectorAll(".tarefa-flex");

  let cesta = JSON.parse(localStorage.getItem("cesta")) || [];
  let categoriasLista =
    JSON.parse(localStorage.getItem("categoriasLista")) || [];

  if (tarefasItens.length) {
    function criarItens() {
      tarefasItens.forEach((tarefa) => {
        const tarefaStatus = tarefa
          .querySelector(".h1-tarefa")
          .innerText.trim();
        cesta.map((item) => {
          if (item.status === tarefaStatus) {
            tarefa.innerHTML += `
                        <div class="tarefa-item" id="${item.id}">
                            <div class="item-info">
                                <div class="marcador" title="Marcar Tarefa"></div>
                                <h2 class="h2-item">${item.titulo}</h2>
                                <p class="p-item">${item.prazo}<span class="span-item"> - </span></p>
                            </div>
                            <div class="item-acoes">
                                <img class="btn-deletar" src="../img/deletar-icone.svg" alt="Deletar">
                                <img src="../img/bandeira-${item.prioridade}.svg" alt="Bandeira-alta">
                            </div>
                        </div>
                        `;
          }
        });
      });
    }
    criarItens();
    ativarDelete();
    marcarTarefa();

    function ativarDelete() {
      const deletarItens = document.querySelectorAll(".btn-deletar");
      deletarItens.forEach((item) => {
        item.addEventListener("click", (event) => {
          const tarefaItem = event.currentTarget.parentElement.parentElement;
          const id = Number(tarefaItem.id);
          const buscaCategoria = cesta.find((item) => item.id === id);
          const categoria = buscaCategoria.categoria;
          cesta = cesta.filter((item) => item.id !== id);

          let existeCategoria = false;
          cesta.forEach((item) => {
            if (item.categoria === categoria) {
              existeCategoria = true;
            }
          });
          if (!existeCategoria) {
            categoriasLista = categoriasLista.filter(
              (catItem) => catItem.categoria !== categoria,
            );
          }
          localStorage.setItem("cesta", JSON.stringify(cesta));
          localStorage.setItem(
            "categoriasLista",
            JSON.stringify(categoriasLista),
          );
          tarefaItem.remove();
          window.location.href = "../pag-extras/tarefas.html";
        });
      });
    }
    ativarDelete();

    function marcarTarefa() {
      const itemLista = document.querySelectorAll(".tarefa-item .marcador");
      itemLista.forEach((item) => {
        const h1 =
          item.parentElement.parentElement.parentElement.querySelector("h1");
        if (h1.innerText === "Feita") {
          item.classList.add("atv-feita");
          item.parentElement.parentElement.classList.add("atv-feita");
        }
        item.addEventListener("click", (event) => {
          event.currentTarget.classList.add("atv-feita");
          event.currentTarget.parentElement.parentElement.classList.add(
            "atv-feita",
          );
          document.body.style.pointerEvents = "none";
          document.body.style.opacity = "0.5";
          setTimeout(() => {
            document.body.style.pointerEvents = "auto";
            document.body.style.opacity = "1";
          }, 2000);
          const tarefaItem = event.currentTarget.parentElement.parentElement;
          const id = Number(tarefaItem.id);
          const buscaTarefa = cesta.find((item) => item.id === id);
          if (!buscaTarefa) return;
          buscaTarefa.status = "Feita";
          tarefaItem.remove();
          localStorage.setItem("cesta", JSON.stringify(cesta));
          criarItens();
          window.location.href = "../pag-extras/tarefas.html";
        });
      });
    }
    marcarTarefa();
  }
}
