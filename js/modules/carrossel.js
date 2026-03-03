export default class Carrossel {
  constructor(wrapper, container, prev, prox, enviar, buttonsControles, carrossel) {
    this.wrapper = document.querySelector(wrapper);
    this.slideContainer = document.querySelector(container);
    this.prevButton = document.querySelector(prev);
    this.proxButton = document.querySelector(prox);
    this.enviarButton = document.querySelector(enviar);
    this.controleButtons = document.querySelectorAll(buttonsControles);
    this.ativarProx = this.ativarProx.bind(this);
    this.ativarPrev = this.ativarPrev.bind(this);
    this.validarEnviar = this.validarEnviar.bind(this);
    this.carrossel = document.querySelector(carrossel);
  };

  moverSlide(distX) {
    const limiteEsquerdo = 0;
    const limiteDireito = this.wrapper.offsetWidth - this.slideContainer.scrollWidth;
    const distanciaLimite = Math.max(
      limiteDireito,
      Math.min(limiteEsquerdo, distX),
    );
    this.slideContainer.style.transform = `translate3d(${distanciaLimite}px, 0, 0)`;
  };

  //! Slides Config
  posicaoSlide(slide) {
    const margin = this.slideContainer.offsetWidth - slide.offsetWidth;
    return -(slide.offsetLeft - margin);
  };

  configSlide() {
    this.slideArray = [...this.slideContainer.children].map((elemento) => {
      const posicao = this.posicaoSlide(elemento);
      return {
        posicao,
        elemento
      };
    });
  };

  slideNav(indexAtual) {
    const dots = document.querySelectorAll(".dot");
    const ultimoItem = this.slideArray.length - 1;
    this.index = {
      prev: indexAtual - 1 < 0 ? undefined : indexAtual - 1,
      atual: indexAtual,
      prox: indexAtual === ultimoItem ? undefined : indexAtual + 1
    };
    if (dots.length) {
      if (this.index.atual === 3) {
        const enviarButton = document.querySelector(".enviar");
        enviarButton.style.display = "block";
        this.proxButton.style.display = "none";
      } else {
        const enviarButton = document.querySelector(".enviar");
        enviarButton.style.display = "none";
        this.proxButton.style.display = "block";
      }
      dots.forEach((dot) => {
        dot.classList.remove("item-atual");
      });
      dots[this.index.atual]?.classList.add("item-atual");

      const nomeInput = this.slideContainer.querySelector("#nome");
      if (nomeInput.value.trim() !== "") {
        dots[0].classList.add("item-feito");
      } else {
        dots[0].classList.remove("item-feito");
      };

      const carrosselItems = document.querySelectorAll(".carrossel-item");
      carrosselItems.forEach((elemento, index) => {
        const inputs = elemento.querySelectorAll("input");
        inputs.forEach((input) => {
          if (input.checked) {
            dots[index].classList.add("item-feito");
          };
        });
      });
    };
  };

  mudarPosSlide(index) {
    this.moverSlide(this.slideArray[index].posicao);
    this.slideNav(index);
  };

  ativarProx() {
    if (this.index.prox !== undefined) {
      this.mudarPosSlide(this.index.prox);
    } else {
      this.mudarPosSlide(this.slideArray.length - 1);
    };
  };

  ativarPrev() {
    if (this.index.prev !== undefined) {
      this.mudarPosSlide(this.index.prev);
    } else {
      this.mudarPosSlide(0);
    };
  };

  verificarValorInputs() {
    this.valido = [];
    this.valido.length = 0;
    const inputs = this.slideContainer.querySelectorAll(".opcoes-item input");
    const nomeInput = this.slideContainer.querySelector("#nome");
    inputs.forEach((input) => {
      if (input.checked) {
        this.valido.push(input);
      };
    });
    if (nomeInput.value.trim() !== "") {
      this.valido.push(nomeInput.value.trim());
    };
  };

  validarEnviar() {
    this.verificarValorInputs();
    const pai = this.carrossel;
    let div = pai.querySelector(".erro-slide");
    if (this.valido.length === 4) {
      if (div) {
        div.remove();
      };
      div.classList.remove("erro-slide");
      div.innerText = "";
      localStorage.setItem("carrosselRespondido", "true");
      this.carrossel.remove();
      window.location.href = "./index.html";
    } else {
      if (!div) {
        div = document.createElement("div");
        div.classList.add("erro-slide");
        pai.appendChild(div);
      };
      div.innerText = "Certifique-se de preencher todos os formulários!";
    };
  };

  // ! transição suave
  transicao(estado) {
    this.slideContainer.style.transition = estado
      ? "transform 0.3s"
      : "none";
  };

  init() {
    if (localStorage.getItem("carrosselRespondido") && this.carrossel) {
      this.carrossel.remove();
    };
    if (this.wrapper && this.slideContainer && this.prevButton && this.proxButton && this.enviarButton && this.controleButtons.length) {
      this.proxButton.addEventListener('click', this.ativarProx);
      this.prevButton.addEventListener('click', this.ativarPrev);
      this.enviarButton.addEventListener("click", () =>
        this.validarEnviar()
      );
      this.moverSlide();
      this.configSlide();
      this.mudarPosSlide(0);
      this.transicao(true);
    };
    return this;
  };
};
