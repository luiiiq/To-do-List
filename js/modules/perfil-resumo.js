export default class ResumoTarefasPerfil {
  constructor(perfilGrid, concluido, progresso, aFazer) {
    this.perfilGrid = document.querySelector(perfilGrid);
    this.concluido = document.querySelector(concluido);
    this.progresso = document.querySelector(progresso);
    this.aFazer = document.querySelector(aFazer);
    this.cesta = JSON.parse(localStorage.getItem("cesta")) || [];
    this.listaConcluidas = [];
    this.listaProgresso = [];
    this.listaPendente = [];
  };
  tarefasConcluidas() {
    this.cesta.map((elemento) => {
      if (elemento.status === "Feita") {
        this.listaConcluidas.push(elemento);
      };
    });
    this.concluido.innerHTML = this.listaConcluidas.length;
  };

  tarefasProgresso() {
    this.cesta.map((elemento) => {
      if (elemento.status === "Em Progresso") {
        this.listaProgresso.push(elemento);
      };
    });
    this.progresso.innerHTML = this.listaProgresso.length;
  };

  tarefasPendente() {
    this.cesta.map((elemento) => {
      if (elemento.status === "A Fazer") {
        this.listaPendente.push(elemento);
      };
    });
    this.aFazer.innerHTML = this.listaPendente.length;
  };

  progressoTarefas() {
    const progressoSpan = document.querySelector(".p-progresso span");
    const soma =
      this.listaConcluidas.length + this.listaProgresso.length + this.listaPendente.length;
    const calculoProgresso = Math.round(
      (this.listaConcluidas.length * 100) / soma,
    );
    progressoSpan.innerHTML = `${calculoProgresso}%`;

    const progressoBar = document.querySelector(".progresso-bar");
    progressoBar.style.setProperty("--progresso", `${calculoProgresso}%`);
  };

  init() {
    if (this.perfilGrid) {
      this.tarefasConcluidas();
      this.tarefasProgresso();
      this.tarefasPendente();
      this.progressoTarefas();
    };
    return this;
  };
};
