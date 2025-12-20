const baseTitle = "   Sara Sofia Hernandez Zambrano | Portfolio "; 
let position = 0;

function animateTitle() {
  const scrollText = baseTitle.substring(position) + baseTitle.substring(0, position);
  document.title = scrollText;
  position = (position + 1) % baseTitle.length;
  setTimeout(animateTitle, 110);
}

animateTitle();