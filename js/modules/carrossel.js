export default function carrossel(
  slideWrapper,
  slideLista,
  prev,
  prox,
  enviar,
  buttonLista,
) {
  const wrapper = document.querySelector(slideWrapper);
  const slideContainer = document.querySelector(slideLista);
  const prevButton = document.querySelector(prev);
  const proxButton = document.querySelector(prox);
  const enviarButton = document.querySelector(enviar);
  const controleButtons = document.querySelectorAll(buttonLista);
  let distancia = {
    posInicial: 0,
    posFinal: 0,
    movimento: 0,
  };
  let slideArray;
  let index;

  const carrossel = document.querySelector(".carrossel");

  if (
    wrapper &&
    slideContainer &&
    prevButton &&
    proxButton &&
    controleButtons.length
  ) {
    if (localStorage.getItem("carrosselRespondido")) {
      carrossel.remove();
    }
    function moverSlide(distX) {
      const limiteEsquerdo = 0;
      const limiteDireito = wrapper.offsetWidth - slideContainer.scrollWidth;
      const distanciaLimitada = Math.max(
        limiteDireito,
        Math.min(limiteEsquerdo, distX),
      );
      distancia.posicaoMovida = distanciaLimitada;
      slideContainer.style.transform = `translate3d(${distanciaLimitada}px, 0, 0)`;
    }

    // ! Slide Config
    function posicaoSlide(slide) {
      const margin = slideContainer.offsetWidth - slide.offsetWidth;
      return -(slide.offsetLeft - margin);
    }

    function configSlide() {
      slideArray = [...slideContainer.children].map((elemento) => {
        const posicao = posicaoSlide(elemento);
        return {
          posicao,
          elemento,
        };
      });
    }
    configSlide();

    const dots = document.querySelectorAll(".dot");
    function slideNav(indexItem) {
      const ultimoItem = slideArray.length - 1;
      index = {
        prev: indexItem - 1 < 0 ? undefined : indexItem - 1,
        atual: indexItem,
        prox: indexItem === ultimoItem ? undefined : indexItem + 1,
      };
      if (dots.length) {
        if (index.atual === 3) {
          const enviarButton = document.querySelector(".enviar");
          enviarButton.style.display = "block";
          proxButton.style.display = "none";
        } else {
          const enviarButton = document.querySelector(".enviar");
          enviarButton.style.display = "none";
          proxButton.style.display = "block";
        }
        dots.forEach((dot) => {
          dot.classList.remove("item-atual");
        });
        dots[index.atual]?.classList.add("item-atual");

        const nomeInput = slideContainer.querySelector("#nome");
        if (nomeInput.value.trim() !== "") {
          dots[0].classList.add("item-feito");
        } else {
          dots[0].classList.remove("item-feito");
        }

        const carrosselItems = document.querySelectorAll(".carrossel-item");
        carrosselItems.forEach((elemento, index) => {
          const inputs = elemento.querySelectorAll("input");
          inputs.forEach((input) => {
            if (input.checked) {
              dots[index].classList.add("item-feito");
            }
          });
        });
      }
    }

    function mudarSlide(index) {
      moverSlide(slideArray[index].posicao);
      slideNav(index);
      distancia.posFinal = slideArray[index].posicao;
    }

    function ativarPrev() {
      if (index.prev !== undefined) {
        mudarSlide(index.prev);
      } else {
        mudarSlide(0);
      }
    }

    function ativarProx() {
      if (index.prox !== undefined) {
        mudarSlide(index.prox);
      } else {
        mudarSlide(slideArray.length - 1);
      }
    }

    const div = document.createElement("div");
    let valido = [];
    function verificarValorInputs() {
      valido.length = 0;
      const inputs = slideContainer.querySelectorAll(".opcoes-item input");
      const nomeInput = slideContainer.querySelector("#nome");
      inputs.forEach((input) => {
        if (input.checked) {
          valido.push(input);
        }
      });
      if (nomeInput.value.trim() !== "") {
        valido.push(nomeInput.value.trim());
      }
    }

    function validarEnviar() {
      verificarValorInputs();
      const pai = document.querySelector(".carrossel");
      if (valido.length === 4) {
        div.classList.remove("erro-slide");
        div.innerText = "";
        localStorage.setItem("carrosselRespondido", "true");
        carrossel.remove();
        window.location.href = "./index.html";
      } else {
        div.classList.add("erro-slide");
        div.innerText = "Certifique-se de preencher todos os formulários!";
        pai.appendChild(div);
      }
    }

    function transicao(statusTransicao) {
      slideContainer.style.transition = statusTransicao
        ? "transform 0.3s"
        : "none";
    }

    prevButton.addEventListener("click", ativarPrev);
    proxButton.addEventListener("click", ativarProx);
    enviarButton.addEventListener("click", validarEnviar);
    mudarSlide(0);
    transicao(true);
    console.log('oi');
  };
};
