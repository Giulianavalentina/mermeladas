// Función para resaltar el enlace de navegación activo
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la ruta actual
    const currentPage = window.location.pathname.split("/").pop()
  
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-link")
  
    // Recorrer los enlaces y agregar la clase 'active' al enlace correspondiente a la página actual
    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href")
      if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
        link.style.backgroundColor = "#E4C2C2"
        link.style.fontWeight = "600"
      }
    })
  
    // Agregar evento de clic al botón de contacto
    const contactButton = document.querySelector(".contact-button")
    if (contactButton) {
      contactButton.addEventListener("click", () => {
        alert("¡Gracias por contactarnos! Te responderemos a la brevedad.")
      })
    }
  })
  