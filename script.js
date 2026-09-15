// ======================================================
// CHECKOUT KIWIFY
// Quando você tiver o link, cole entre as aspas abaixo.
// Exemplo:
// const CHECKOUT_URL = "https://pay.kiwify.com.br/pN0pc7H";
// ======================================================

const CHECKOUT_URL = "https://pay.kiwify.com.br/pN0pc7H";

document.querySelectorAll(".checkout-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (CHECKOUT_URL.trim()) {
      window.location.href = CHECKOUT_URL;
      return;
    }

    button.textContent = "LINK DA KIWIFY SERÁ ADICIONADO";
    button.style.cursor = "default";

    setTimeout(() => {
      button.textContent = "QUERO COMEÇAR AGORA";
      button.style.cursor = "pointer";
    }, 2400);
  });
});

// Animações leves ao rolar a página.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
