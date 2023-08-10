function toggleExpansion(sectionId) {
    const expandedContent = document.getElementById(sectionId + '-content');
    if (expandedContent.style.display === 'none') {
      expandedContent.style.display = 'block';
    } else {
      expandedContent.style.display = 'none';
    }
  }
  

  const boton = document.getElementById("miBoton");
const mensajeArea = document.getElementById("mensaje");

// Agrega un evento de clic al botón
boton.addEventListener("click", function() {
  // Cambia el contenido del área de mensaje
  mensajeArea.textContent = "¡Haz hecho clic en el botón!";
});

function toggleExpansion(contentId) {
    const content = document.getElementById(contentId + '-content');
    content.classList.toggle('expanded');
  }