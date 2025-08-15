// Espera que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos todos los enlaces del header
    const enlaces = document.querySelectorAll("header nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el salto instantáneo

            // Tomamos el texto del link y buscamos la sección correspondiente
            const seccionNombre = this.textContent.toLowerCase();
            const seccion = document.querySelector("section." + seccionNombre);

            if (seccion) {
                seccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
