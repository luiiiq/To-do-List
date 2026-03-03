export default function scrollSuave(scrollSection) {
  const scrollLista = document.querySelectorAll(scrollSection);
  const alturaMinima = window.innerHeight * 0.6;

  if (scrollLista.length) {
    ativarScrollSuave();
    function ativarScrollSuave() {
      scrollLista.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visivel = sectionTop - alturaMinima < 0;
        if (visivel) {
          section.classList.add("ativo");
        }
      });
    }

    window.addEventListener("scroll", ativarScrollSuave);
  }
}
