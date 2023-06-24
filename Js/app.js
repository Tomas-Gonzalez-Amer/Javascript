// Declaración de variables
let puntajeJugador = 0;
let puntajeComputadora = 0;

// Array de opciones posibles
let opciones = ["piedra", "papel", "tijera"];

// Función para obtener una elección aleatoria de la computadora
function obtenerEleccionComputadora() {
  let indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

// Función para determinar el ganador de una ronda
function determinarGanador(eleccionJugador, eleccionComputadora) {
  if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "tijera" && eleccionComputadora === "papel")
  ) {
    return "jugador";
  } else if (
    (eleccionJugador === "tijera" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "piedra" && eleccionComputadora === "papel") ||
    (eleccionJugador === "papel" && eleccionComputadora === "tijera")
  ) {
    return "computadora";
  } else {
    return "empate";
  }
}

// Objeto Jugador
let jugador = {
  puntaje: 0,
  eleccion: "",
  actualizarPuntaje: function () {
    this.puntaje++;
  },
  reiniciarPuntaje: function () {
    this.puntaje = 0;
  }
};

// Objeto Computadora
let computadora = {
  puntaje: 0,
  eleccion: "",
  actualizarPuntaje: function () {
    this.puntaje++;
  },
  reiniciarPuntaje: function () {
    this.puntaje = 0;
  }
};

// Función principal del juego
function jugarPiedraPapelTijera() {
  alert("¡Bienvenido al juego de Piedra, Papel o Tijera!");

  while (true) {
    // Obtener la elección del jugador
    let eleccionJugador = prompt("Elegí: piedra, papel o tijera. Para salir, escribí 'salir'.");

    if (eleccionJugador === null || eleccionJugador.toLowerCase() === "salir") {
      alert("Gracias por jugar. Nos vemos!");
      break;
    }

    // Validar la elección del jugador
    if (!opciones.includes(eleccionJugador)) {
      alert("Elección inválida. Intenta nuevamente.");
      continue;
    }

    // Generar elección de la computadora
    let eleccionComputadora = obtenerEleccionComputadora();

    // Asignar elecciones al jugador y la computadora
    jugador.eleccion = eleccionJugador;
    computadora.eleccion = eleccionComputadora;

    // Determinar el ganador de la ronda
    let ganador = determinarGanador(jugador.eleccion, computadora.eleccion);

    // Actualizar puntajes y mostrar resultados
    if (ganador === "jugador") {
      jugador.actualizarPuntaje();
      alert("¡Ganaste esta ronda!");
    } else if (ganador === "computadora") {
      computadora.actualizarPuntaje();
      alert("La computadora ganó esta ronda.");
    } else {
      alert("Empate en esta ronda.");
    }

    // Mostrar elecciones y puntajes
    alert("Elección del jugador: " + jugador.eleccion);
    alert("Elección de la computadora: " + computadora.eleccion);
    alert("Puntaje actual:");
    alert("Jugador: " + jugador.puntaje);
    alert("Computadora: " + computadora.puntaje);
  }
}

// Llamar a la función para iniciar el juego
jugarPiedraPapelTijera();
