// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Función para iniciar el juego
function jugarJuego() {
  let intento = prompt("Adivina el número (entre 1 y 100):");
  let numero = parseInt(intento);

  // Comprobar si el jugador ingresó un número válido
  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    jugarJuego(); // Volver a solicitar un intento
    return;
  }

  // Comprobar si el jugador adivinó el número
  if (numero === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste el número.");
  } else {
    // Proporcionar pistas al jugador
    let mensaje = "Incorrecto. ";
    if (numero < numeroAleatorio) {
      mensaje += "Intenta con un número más alto.";
    } else {
      mensaje += "Intenta con un número más bajo.";
    }
    alert(mensaje);
    jugarJuego(); // Volver a solicitar un intento
  }
}

// Iniciar el juego
jugarJuego();