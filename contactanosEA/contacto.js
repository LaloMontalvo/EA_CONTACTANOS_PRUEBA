document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.remove("scrolled");
            navbar.classList.add("transparent");
        }
    }

    // Ejecutar al cargar y al hacer scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    
});


// Usa el SDK moderno de EmailJS (sin la necesidad de "import")
const emailjs = window.emailjs;

// Inicializa EmailJS con tu clave pública (API Key)
emailjs.init("ht8MejfeTbMaXBbpR"); // Reemplaza con tu clave pública real

// Lógica de envío del formulario
document.getElementById("contacto-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Enviar el formulario utilizando el servicio y la plantilla de EmailJS
  emailjs.send("service_wt4mjg5", "template_5el2r6l", {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("mensaje").value
  })
  .then(function(response) {
    alert("✅ Mensaje enviado correctamente.");
    document.getElementById("contacto-form").reset();
  }, function(error) {
    alert("❌ Error al enviar el mensaje.");
    console.error("EmailJS error:", error);
  });
});

  document.getElementById("contacto-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío hasta validar

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const errores = [];

    // Validar nombre
    if (nombre.length < 3 || !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
      errores.push("El nombre debe tener al menos 3 letras y solo contener letras y espacios.");
    }

    // Validar email (HTML ya valida, pero reforzamos)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errores.push("El correo electrónico no es válido.");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    // Mostrar errores o enviar
    const errorDiv = document.getElementById("errores");
    if (errores.length > 0) {
      errorDiv.innerHTML = errores.join("<br>");
    } else {
      errorDiv.innerHTML = "";
      // Aquí podrías hacer un envío real con fetch/AJAX
      alert("Formulario enviado correctamente.");
      this.reset(); // Limpia el formulario
    }
  });



