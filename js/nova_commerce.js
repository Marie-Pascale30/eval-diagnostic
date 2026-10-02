// Menu mobile : ouverture / fermeture de la sidebar
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".sidebar-close");
const overlay = document.getElementById("overlay");

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  // focus dans le menu à l'ouverture, retour sur le burger à la fermeture
  (open ? closeBtn : burger).focus();
}

burger.addEventListener("click", () => setMenu(true));
closeBtn.addEventListener("click", () => setMenu(false));
overlay.addEventListener("click", () => setMenu(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
});
