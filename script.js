const container = document.querySelector(".container-letter");
const paper = document.querySelector(".paper");
const music = document.getElementById("music");

let abierto = false;
let desbloqueado = false;

// ABRIR CARTA
container.addEventListener("click", () => {
  if (!abierto) {
    abierto = true;
    container.classList.add("open");
    music.play().catch(()=>{});
  }
});

// CERRAR CARTA Y DESBLOQUEAR BOTONES
paper.addEventListener("click", (e) => {
  e.stopPropagation();
  abierto = false;
  container.classList.remove("open");

  if (!desbloqueado) {
    desbloqueado = true;
    document.getElementById("respuesta").classList.remove("hidden");
  }
});

/* ===== RESPUESTA SAN VALENTÍN ===== */
const video = document.getElementById("videoRespuesta");
const mensaje = document.getElementById("mensajeRespuesta");
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

let noCount = 0;

// VIDEOS TRISTES
const tristes = [
  "triste1.mp4",
  "triste2.mp4",
  "triste3.mp4",
  "triste4.mp4"
];

// MENSAJES TRISTES (EN ORDEN)
const mensajesTristes = [
  "¿Estás segura :c ? 🥺",
  "No me rompas el corazón :c, por favor 💔",
  "Mi niña di que sí, por favor.... 🥹",
  "Pero yo te amo mucho cariño 💖"
];

// BOTÓN SÍ
btnSi.addEventListener("click", () => {
  video.src = "feliz.mp4";
  mensaje.textContent = "Te amo mucho 💖 Feliz 14 de febrero";
  document.querySelector(".botones").style.display = "none";
});

// BOTÓN NO
btnNo.addEventListener("click", () => {
  const index = Math.min(noCount, tristes.length - 1);
  video.src = tristes[index];
  mensaje.textContent = mensajesTristes[index];
  noCount++;
});

/* ===== DECORACIÓN ===== */
const left = document.querySelector(".side-decor.left");
const right = document.querySelector(".side-decor.right");
const icons = ["💗","🌸","💕","🌹"];

function crearIcono(lado){
  const span = document.createElement("span");
  span.textContent = icons[Math.floor(Math.random()*icons.length)];
  span.style.left = Math.random()*40+"px";
  lado.appendChild(span);
  setTimeout(()=>span.remove(),6000);
}

setInterval(()=>crearIcono(left),800);
setInterval(()=>crearIcono(right),800);





