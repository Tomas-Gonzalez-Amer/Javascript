// Objeto Jugador
let jugador = {
  puntaje: 0,
  eleccion: "",
  actualizarPuntaje: function () {
    this.puntaje++;
    document.getElementById("puntajeJugador").textContent = this.puntaje;
    sessionStorage.setItem("puntajeJugador", this.puntaje);
  },
  reiniciarPuntaje: function () {
    this.puntaje = 0;
    document.getElementById("puntajeJugador").textContent = this.puntaje;
    sessionStorage.removeItem("puntajeJugador");
  }
};

// Objeto Computadora
let computadora = {
  puntaje: 0,
  eleccion: "",
  actualizarPuntaje: function () {
    this.puntaje++;
    document.getElementById("puntajeComputadora").textContent = this.puntaje;
    sessionStorage.setItem("puntajeComputadora", this.puntaje);
  },
  reiniciarPuntaje: function () {
    this.puntaje = 0;
    document.getElementById("puntajeComputadora").textContent = this.puntaje;
    sessionStorage.removeItem("puntajeComputadora");
  }
};

// Función principal del juego
function jugarPiedraPapelTijera() {
  alert("¡Bienvenido al juego de Piedra, Papel o Tijera!");

  // Obtener los elementos del DOM para manejar los eventos del usuario
  let opcionesElementos = document.querySelectorAll(".opcion");
  opcionesElementos.forEach(function (elemento) {
    elemento.addEventListener("click", manejarEventoUsuario);
  });

  // Obtener puntajes del almacenamiento de sesión (sessionStorage)
  let puntajeJugadorGuardado = sessionStorage.getItem("puntajeJugador");
  let puntajeComputadoraGuardado = sessionStorage.getItem("puntajeComputadora");

  // Restaurar puntajes desde el almacenamiento de sesión
  if (puntajeJugadorGuardado !== null) {
    jugador.puntaje = parseInt(puntajeJugadorGuardado);
    document.getElementById("puntajeJugador").textContent = jugador.puntaje;
  }

  if (puntajeComputadoraGuardado !== null) {
    computadora.puntaje = parseInt(puntajeComputadoraGuardado);
    document.getElementById("puntajeComputadora").textContent = computadora.puntaje;
  }
}

// Función para manejar los eventos del usuario
function manejarEventoUsuario() {
  let eleccionJugador = this.dataset.opcion;
  if (eleccionJugador === "salir") {
    alert("Gracias por jugar. ¡Hasta luego!");
    return;
  }

  // Validar la elección del jugador
  if (!["piedra", "papel", "tijera"].includes(eleccionJugador)) {
    alert("Elección inválida. Intenta nuevamente.");
    return;
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

// Función para obtener una elección aleatoria de la computadora
function obtenerEleccionComputadora() {
  let opciones = ["piedra", "papel", "tijera"];
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

// Llamar a la función para iniciar el juego
jugarPiedraPapelTijera();
