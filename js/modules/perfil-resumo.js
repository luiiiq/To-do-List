export default function resumoTarefasPerfil() {
  const concluido = document.querySelector('[data-perfil="concluida"] h2');
  const progresso = document.querySelector('[data-perfil="progresso"] h2');
  const aFazer = document.querySelector('[data-perfil="pendente"] h2');
  let cesta = JSON.parse(localStorage.getItem("cesta")) || [];

  if (concluido && progresso && aFazer) {
    let listaConcluidas = [];
    function tarefasConcluidas() {
      cesta.map((elemento) => {
        if (elemento.status === "Feita") {
          listaConcluidas.push(elemento);
        }
      });
      concluido.innerHTML = listaConcluidas.length;
    }
    tarefasConcluidas();

    let listaProgresso = [];
    function tarefasProgresso() {
      cesta.map((elemento) => {
        if (elemento.status === "Em Progresso") {
          listaProgresso.push(elemento);
        }
      });
      progresso.innerHTML = listaProgresso.length;
    }
    tarefasProgresso();

    let listaPendente = [];
    function tarefasPendente() {
      cesta.map((elemento) => {
        if (elemento.status === "A Fazer") {
          listaPendente.push(elemento);
        }
      });
      aFazer.innerHTML = listaPendente.length;
    }
    tarefasPendente();

    function progressoTarefas() {
      const progressoSpan = document.querySelector(".p-progresso span");
      const soma =
        listaConcluidas.length + listaProgresso.length + listaPendente.length;
      const calculoProgresso = Math.round(
        (listaConcluidas.length * 100) / soma,
      );
      progressoSpan.innerHTML = `${calculoProgresso}%`;

      const progressoBar = document.querySelector(".progresso-bar");
      progressoBar.style.setProperty("--progresso", `${calculoProgresso}%`);
    }
    progressoTarefas();
  }
}
