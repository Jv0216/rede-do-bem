// ======== Rede do Bem - main.js ========

// ============================
// 1. Hero Banner: Frases dinâmicas
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("hero-title");
  const heroSub = document.getElementById("hero-sub");

  const frases = [
    {
      title: "Conectando quem quer ajudar a quem mais precisa",
      sub: "Junte-se a voluntários e ONGs para transformar a vida de crianças e jovens.",
    },
    {
      title: "Pequenas ações, grandes mudanças",
      sub: "Doe tempo, amor ou recursos. Cada gesto importa!",
    },
    {
      title: "Juntos pela esperança",
      sub: "A Rede do Bem une pessoas com o mesmo propósito: fazer o bem.",
    },
  ];

  let index = 0;

  function trocarFrase() {
    heroTitle.style.opacity = 0;
    heroSub.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % frases.length;
      heroTitle.textContent = frases[index].title;
      heroSub.textContent = frases[index].sub;
      heroTitle.style.opacity = 1;
      heroSub.style.opacity = 1;
    }, 400);
  }

  setInterval(trocarFrase, 5000); // troca a cada 5 segundos
});

// ============================
// 2. Menu Responsivo (Mobile)
// ============================

// Cria o botão hamburger dinamicamente
const nav = document.querySelector("nav");
const ul = nav.querySelector("ul");

const btnMenu = document.createElement("button");
btnMenu.classList.add("menu-toggle");
btnMenu.innerHTML = "☰";
btnMenu.setAttribute("aria-label", "Abrir menu");

nav.parentElement.insertBefore(btnMenu, nav);

btnMenu.addEventListener("click", () => {
  ul.classList.toggle("ativo");
  if (ul.classList.contains("ativo")) {
    ul.style.display = "flex";
  } else {
    ul.style.display = "none";
  }
});

// Fecha o menu ao clicar em um link
ul.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      ul.style.display = "none";
      ul.classList.remove("ativo");
    }
  });
});
