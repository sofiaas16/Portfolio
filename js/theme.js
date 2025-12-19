const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);
  toggle.textContent = next === "light" ? "☀️" : "🌙";
});
