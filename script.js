const container = document.querySelector(".container-letter");
const paper = document.querySelector(".paper");
const music = document.getElementById("music");

let abierto = false;

// Click en la carta → abrir
container.addEventListener("click", () => {
  if (!abierto) {
    abierto = true;
    container.classList.add("open");
    music.play().catch(() => {});
  }
});

// Click en la hoja → cerrar
paper.addEventListener("click", (e) => {
  e.stopPropagation();
  abierto = false;
  container.classList.remove("open");
});

/* ===== DECORACIÓN BORDES ===== */
const left = document.querySelector(".side-decor.left");
const right = document.querySelector(".side-decor.right");

const icons = ["💗", "🌹", "💕", "🌸", "💖"];

function crearIcono(lado) {
  const span = document.createElement("span");
  span.textContent = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 40 + "px";
  span.style.animationDuration = (4 + Math.random() * 4) + "s";
  lado.appendChild(span);

  setTimeout(() => span.remove(), 8000);
}

setInterval(() => crearIcono(left), 700);
setInterval(() => crearIcono(right), 700);



