export default class FormTarefas{
  constructor(seletores) {
    this.input = document.querySelector(seletores.input);
    this.prazo = document.querySelector(seletores.prazo);
    this.radio = document.querySelectorAll(seletores.radios);
    this.opcoesDiv = document.querySelectorAll(seletores.opcoes);
    this.botaoEnviar = document.querySelector(seletores.enviar);
    this.categoriaCriarButton = document.querySelector(seletores.criarCategoria);
    this.textoCriar = document.querySelector(".texto-criar");

    this.cesta = JSON.parse(localStorage.getItem("cesta")) || [];
    this.categoriasLista =
    JSON.parse(localStorage.getItem("categoriasLista")) || [];
  };
  inputValidar(event) {
    const div = document.createElement("div");
    if (event.currentTarget.value.trim() === "") {
      const pai = event.currentTarget.parentElement;
      const label = event.currentTarget.parentElement.querySelector("label");
      div.classList.add("erro");
      label.classList.remove("feita");
      event.currentTarget.parentElement.classList.remove("valido");
      div.innerHTML = "Por favor digite algo válido!";
      pai.appendChild(div);
    } else {
      div.classList.remove("erro");
      event.currentTarget.parentElement.classList.add("valido");
      const label = event.currentTarget.parentElement.querySelector("label");
      label.classList.add("feita");
      div.innerHTML = "";
    };
  };

  formatarPrazo(data) {
    const valor = data.currentTarget.value.replace(/\D/g, "");
    const prazoConstruido = valor.replace(
      /(\d{2})(\d{2})(\d{2})/g,
      "$1/$2/$3",
    );
    return prazoConstruido;
  };

  prazoValidar(event) {
    const divPrazo = document.createElement("div");
    const matchPrazo = event.currentTarget.value.match(
      /\d{2}[\/\-\.\s]?\d{2}[\/\-\.\s]?\d{4}/,
    );

    if (matchPrazo && matchPrazo[0] === event.currentTarget.value) {
      const label = event.currentTarget.parentElement.querySelector("label");
      label.classList.add("feita");
      divPrazo.classList.remove("erro");
      event.currentTarget.parentElement.classList.add("valido");
      divPrazo.innerHTML = "";
      event.currentTarget.value = this.formatarPrazo(event);
    } else {
      const pai = event.currentTarget.parentElement;
      divPrazo.classList.add("erro");
      const label = event.currentTarget.parentElement.querySelector("label");
      label.classList.remove("feita");
      event.currentTarget.parentElement.classList.remove("valido");
      divPrazo.innerHTML = "Por favor digite uma data válida!";
      pai.appendChild(divPrazo);
    };
  };

  ativarButton(event) {
    event.currentTarget.classList.add("ativo");
    const elementoPai =
      event.currentTarget.parentElement.parentElement.querySelector(
        ".selecione",
      );
    if (elementoPai) {
      elementoPai.innerText = event.currentTarget.innerText;
      elementoPai.classList.add("texto-selecionado");
      event.currentTarget.parentElement.parentElement.classList.add(
        "texto-selecionado",
      );
      elementoPai.parentElement.parentElement.classList.add("valido");
    };
  };

  abrirOpcao(event) {
    event.currentTarget.nextElementSibling.classList.toggle("abrir");
  };

  botaoCategoria(event) {
    event.preventDefault();
    const inputCategoria = document.querySelector(".btn-categoria input");
    const elementoPai = document.querySelector(".categoria-aberta .opcoes");
    const div = document.createElement("div");
    div.innerText = inputCategoria.value;
    const erroCategoria = document.querySelector(".info-sem-categoria");
    const opcoesCategoria = document.querySelectorAll(
      ".categoria-aberta .opcoes div",
    );
    if (div.innerText.trim() === "") {
      erroCategoria.innerHTML = '<p class="erro">Digite uma Categoria</p>';
      return;
    };

    let categoriaExite = false;
    for (const opcao of opcoesCategoria) {
      if (opcao.innerText.trim() === div.innerText.trim()) {
        categoriaExite = true;
        break;
      };
    };
    if (categoriaExite) {
      erroCategoria.innerHTML =
        '<p class="erro">Essa categoria já exite!</p>';
      return;
    };
    elementoPai.appendChild(div);
    erroCategoria.innerHTML = "";

    div.addEventListener("click", (event) => {
      opcoesCategoria.forEach((div) => {
        div.classList.remove("ativo");
      });
      event.currentTarget.classList.add("ativo");
      const elementoSelecione =
        event.currentTarget.parentElement.parentElement.parentElement.querySelector(
          ".selecione",
        );
      elementoSelecione.innerText = event.currentTarget.innerHTML;
      elementoSelecione.classList.add("texto-selecionado");
      elementoSelecione.parentElement.classList.add("texto-selecionado");
      elementoSelecione.parentElement.parentElement.classList.add(
        "categoria-valida",
      );
    });
  };

  verificarCategorias() {
    const pSemCategoria = document.querySelector(
      ".categoria-aberta .info-sem-categoria p:nth-of-type(1)",
    );
    const opcoesContainer = document.querySelector(".categoria .opcoes");
    if (this.cesta.length > 0) {
      pSemCategoria.style.display = "none";
    } else {
      pSemCategoria.style.display = "block";
    };
    opcoesContainer.innerHTML = "";
    this.categoriasLista.forEach((elemento) => {
      const divOpcoesCategoria = document.createElement("div");
      const itemCategoria = document.querySelector(".categoria");
      const select = itemCategoria.querySelector(".costumizart-select");
      const selecione = itemCategoria.querySelector(".selecione");
      divOpcoesCategoria.innerText = elemento.categoria;
      divOpcoesCategoria.addEventListener("click", (event) => {
        opcoesContainer.querySelectorAll("div").forEach((item) => {
          itemCategoria.classList.remove("categoria-valida");
          select.classList.remove("texto-selecionado");
          selecione.classList.remove("texto-selecionado");
          item.classList.remove("ativo");
        });
        event.currentTarget.classList.add("ativo");
        selecione.innerHTML = elemento.categoria;
        itemCategoria.classList.add("categoria-valida");
        select.classList.add("texto-selecionado");
        selecione.classList.add("texto-selecionado");
        if (event.currentTarget.classList.contains("ativo")) {
          const erroCategoria = document.querySelector(".info-sem-categoria");
          erroCategoria.innerHTML = "";
        };
      });
      opcoesContainer.appendChild(divOpcoesCategoria);
    });
  };

  validarSelecao(event) {
    event.preventDefault();
    const form = document.querySelector(".form-tarefa");
    const validoLista = form.querySelectorAll(".valido");
    const validoCategoria = form.querySelector(".categoria-valida");
    const erroBotoes = document.querySelector(".js-erro-button");

    if (validoCategoria === null || validoLista.length < 4) {
      erroBotoes.classList.add("erro");
      erroBotoes.innerHTML =
        "Certifique-se de preencher todo o formulário corretamente!";
    } else {
      erroBotoes.classList.remove("erro");
      erroBotoes.innerHTML = "";

      const titulo = document.querySelector(
        ".item-form input:nth-of-type(1)",
      );
      const valorTitulo = titulo.value.trim();

      const status = document.querySelector(".status .selecione");
      const valorStatus = status.innerText;

      const prioridade = document.querySelector(".prioridade .selecione");
      const valorPrioridade = prioridade.innerText;

      const categoria = document.querySelector(
        ".categoria-aberta .opcoes .ativo",
      );
      const valorCategoria = categoria.innerText.trim();

      const prazo = document.querySelector("#prazo");
      const valorPrazo = prazo.value;

      this.cesta.push({
        id: this.cesta.length,
        titulo: valorTitulo,
        status: valorStatus,
        prioridade: valorPrioridade,
        categoria: valorCategoria,
        prazo: valorPrazo,
      });
      let categoriaExisteSalvar = false;
      for (let i = 0; i < this.categoriasLista.length; i++) {
        if (this.categoriasLista[i].categoria === valorCategoria) {
          categoriaExisteSalvar = true;
          break;
        };
      };

      if (!categoriaExisteSalvar) {
        this.categoriasLista.push({
          categoria: valorCategoria,
          titulos: valorTitulo,
        });
      };

      localStorage.setItem("cesta", JSON.stringify(this.cesta));
      localStorage.setItem(
        "categoriasLista",
        JSON.stringify(this.categoriasLista),
      );

      const modal = document.querySelector(".modal");
      modal.classList.remove("ativo");
      this.textoCriar.style.display = "none";
      window.location.href = "../pag-extras/tarefas.html";
    };
  };

  adicionarEventos() {
    this.input.addEventListener("change", (event) => this.inputValidar(event));
    this.prazo.addEventListener("change", (event) => this.prazoValidar(event));
    this.radio.forEach((item) => {
      item.addEventListener("click", (event) => this.ativarButton(event));
    });
    this.opcoesDiv.forEach((opcao) => {
      opcao.addEventListener("click", (event) => this.abrirOpcao(event));
    });
    this.botaoEnviar.addEventListener("click", (event) => this.validarSelecao(event));
    this.categoriaCriarButton.addEventListener("click", (event) =>
      this.botaoCategoria(event),
    );
  };

  init() {
    if (!this.input) return;
    if (this.cesta.length > 0) {
      this.textoCriar.style.display = "none";
    };
    if (this.input && this.prazo &&
        this.radio.length &&
        this.opcoesDiv.length &&
        this.botaoEnviar &&
        this.categoriaCriarButton &&
        this.textoCriar) {
      this.verificarCategorias();
      this.adicionarEventos();
    };
    return this;
  };
};
