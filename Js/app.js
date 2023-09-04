function calcular() {
    const operacion = prompt("Ingrese una operación (+, -, *, /) o 'salir'");
    
    if (operacion === 'salir') {
        alert("Calculadora finalizada.");
        return;
    }

    if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
        alert("Operación no válida. Por favor, ingrese +, -, *, / o 'salir'.");
        calcular();
        return;
    }

    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        calcular();
        return;
    }

    let resultado;
    
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                alert("No se puede dividir por cero.");
                calcular();
                return;
            }
            resultado = numero1 / numero2;
            break;
    }

    alert(`Resultado: ${resultado}`);
    calcular();
}

calcular();
