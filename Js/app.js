const juego = {
    opciones: ["piedra", "papel", "tijera"],
    puntajeUsuario: 0,
    puntajeComputadora: 0,
  };
  
  function obtenerOpcionComputadora() {
    const indice = Math.floor(Math.random() * juego.opciones.length);
    return juego.opciones[indice];
  }
  
  function jugarRonda() {
    const opcionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    const opcionComputadora = obtenerOpcionComputadora();
  
    if (!juego.opciones.includes(opcionUsuario)) {
      alert("Esa no es una opción válida. Inténtalo de nuevo.");
      return;
    }
  
    alert(`Computadora eligió: ${opcionComputadora}`);
  
    if (opcionUsuario === opcionComputadora) {
      alert("Empate.");
    } else if (
      (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
      (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
      (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
      alert("¡Ganaste esta ronda!");
      juego.puntajeUsuario++;
    } else {
      alert("¡La computadora ganó esta ronda!");
      juego.puntajeComputadora++;
    }
  }
  
  function jugarPiedraPapelTijera() {
    while (true) {
      jugarRonda();
      alert(`Puntuación:\nUsuario: ${juego.puntajeUsuario}\nComputadora: ${juego.puntajeComputadora}`);
      const seguirJugando = confirm("¿Hacemos otra ronda?");
      if (!seguirJugando) {
        break;
      }
    }
  }
  
  jugarPiedraPapelTijera();
  