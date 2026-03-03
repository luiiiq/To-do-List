export default function criarDepoimentos(listaDepoimentos) {
  const depoimentosContainer = document.querySelector(listaDepoimentos);

  if (depoimentosContainer) {
    async function fetchDepoimentos() {
      try {
        const response = await fetch(
          "./depoimentos-dos-usuarios/depoimentos.json",
        );
        const responseJSON = await response.json();

        responseJSON.forEach((item) => {
          const li = document.createElement("li");
          const divEstrelas = document.createElement("div");
          divEstrelas.classList.add("estrelas");

          for (let i = 0; i < item.estrela; i++) {
            const img = document.createElement("img");
            img.src = "./img/estrela.svg";
            img.alt = "Estrela";
            divEstrelas.appendChild(img);
          }

          const p = document.createElement("p");
          p.innerText = item.avaliacao;

          const h3 = document.createElement("h3");
          h3.innerText = item.nome;

          li.appendChild(divEstrelas);
          li.appendChild(p);
          li.appendChild(h3);
          depoimentosContainer.appendChild(li);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchDepoimentos();
  }
}
