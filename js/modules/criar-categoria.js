export default function criarCategoria() {
  const categoriaGrid = document.querySelector(".categoria-resumo");
  const accordionContainer = document.querySelector(".categoria-container");
  let cesta = JSON.parse(localStorage.getItem("cesta")) || [];
  let categoriasLista =
    JSON.parse(localStorage.getItem("categoriasLista")) || [];

  if (cesta.length > 0 && categoriaGrid) {
    let listaItens = [];
    function criarCategorias() {
      const btnCriar = document.querySelector(".criar-tarefa");
      btnCriar.style.display = "none";
      const h1SemCategoria = document.querySelector(".categoria-h1");
      h1SemCategoria.style.display = "none";

      listaItens = [];
      accordionContainer.innerHTML = "";

      const resultado = {};

      cesta.forEach((elemento) => {
        const categoria = elemento.categoria;

        if (!resultado[categoria]) {
          resultado[categoria] = [];
        }

        resultado[categoria].push({
          titulo: elemento.titulo,
          status: elemento.status,
        });
      });

      categoriasLista = Object.entries(resultado).map(
        ([categoria, titulos]) => {
          return { categoria, titulos };
        },
      );
      localStorage.setItem("categoriasLista", JSON.stringify(categoriasLista));
      categoriasLista.forEach((elemento) => {
        const feitas = elemento.titulos.filter(
          (item) => item.status === "Feita",
        ).length;

        const div = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");

        div.classList.add("categoria-item");
        dt.classList.add("js-accordion");
        dd.classList.add("descricao");

        dt.innerHTML = `<h2>${elemento.categoria}</h2>`;
        if (elemento.titulos.length === 1) {
          dd.innerHTML = `
                        <p>
                            <span>Você fez ${feitas}</span> de
                            <span>${elemento.titulos.length}</span>
                            tarefa
                        </p>
                    `;
        } else {
          dd.innerHTML = `
                        <p>
                            <span>Você fez ${feitas}</span> de
                            <span>${elemento.titulos.length}</span>
                            tarefas
                        </p>
                    `;
        }

        div.appendChild(dt);
        div.appendChild(dd);

        const divDescricao = document.createElement("div");
        divDescricao.classList.add("categoria-tarefas");
        dd.appendChild(divDescricao);

        elemento.titulos.forEach((tarefa) => {
          divDescricao.innerHTML += `
                    <p class="${tarefa.status === "Feita" ? "feita" : ""}">
                    ${tarefa.titulo}
                    </p>
                `;
        });

        accordionContainer.appendChild(div);
      });
    }
    criarCategorias();

    const accordionItem = document.querySelectorAll(".js-accordion");
    function ativarCategoria(event) {
      const tituloContainer = event.currentTarget.parentElement;
      const descricaoDoTitulo = tituloContainer.querySelector(".descricao");

      descricaoDoTitulo.classList.toggle("aberto");
      tituloContainer.classList.toggle("ativo");
    }

    accordionItem.forEach((titulo) => {
      titulo.addEventListener("click", (event) => ativarCategoria(event));
    });
  }
}
