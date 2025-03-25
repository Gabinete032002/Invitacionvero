// Seleccionar elementos del DOM
const openButton = document.getElementById('openButton');
const letterContainer = document.getElementById('letterContainer');
const closeButton = document.getElementById('closeButton');

// Función para mostrar la carta
openButton.addEventListener('click', () => {
    // Oculta el botón
    openButton.classList.add('hidden');

    // Muestra el contenedor de la carta con animación
    letterContainer.classList.remove('hidden');
    setTimeout(() => {
        letterContainer.classList.add('show');
    }, 10); // Pequeño retraso para activar la animación
});

// Función para cerrar la carta
closeButton.addEventListener('click', () => {
    letterContainer.classList.remove('show');
    setTimeout(() => {
        letterContainer.classList.add('hidden');
        openButton.classList.remove('hidden');
    }, 500); // Esperar a que termine la animación
});
// Seleccionar elementos del DOM
const preferencesForm = document.getElementById('preferencesForm');

// Función para enviar el formulario
preferencesForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe

    // Recopila los datos del formulario
    const movieGenre = document.getElementById('movieGenre').value;
    const favoriteMovie = document.getElementById('favoriteMovie').value;
    const snacks = document.getElementById('snacks').value;
    const comments = document.getElementById('comments').value;

    // Muestra los datos en la consola (puedes enviarlos a un servidor aquí)
    console.log("Género favorito:", movieGenre);
    console.log("Película favorita:", favoriteMovie);
    console.log("Snacks preferidos:", snacks);
    console.log("Comentarios adicionales:", comments);

    // Muestra un mensaje de confirmación
    alert("¡Gracias por completar el formulario! 🎬");

    // Redirige a la página principal después de enviar
    window.location.href = "index.html";
});
// Seleccionar elementos del DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Configuración del contador
let totalSeconds = 4 * 24 * 60 * 60; // 4 días en segundos

// Función para actualizar el contador
function updateCountdown() {
    if (totalSeconds <= 0) {
        // Si el tiempo ha terminado
        clearInterval(countdownInterval);
        daysElement.textContent = "4";
        hoursElement.textContent = "24";
        minutesElement.textContent = "60";
        secondsElement.textContent = "60";
        return;
    }

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    // Actualizar el contador en la página
    daysElement.textContent = String(days).padStart(2, '04');
    hoursElement.textContent = String(hours).padStart(2, '24');
    minutesElement.textContent = String(minutes).padStart(2, '60');
    secondsElement.textContent = String(seconds).padStart(2, '60');

    // Reducir el tiempo restante
    totalSeconds--;
}

// Iniciar el contador
const countdownInterval = setInterval(updateCountdown, 1000); // Actualizar cada segundo
updateCountdown(); // Ejecutar la función inmediatamente