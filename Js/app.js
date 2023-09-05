function calcular() {
    let continuar = true;

    while (continuar) {
        const operacion = prompt("Ingrese una operación (+, -, *, /) o 'salir' para detenerse:");

        if (operacion === 'salir') {
            alert("Calculadora finalizada.");
            continuar = false;
            break;
        }

        if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            alert("Operación no válida. Por favor, ingrese +, -, *, / o 'salir'.");
            continue;
        }

        const numero1 = parseFloat(prompt("Ingrese el primer número:"));
        const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingrese números válidos.");
            continue;
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
                    continue;
                }
                resultado = numero1 / numero2;
                break;
        }

        alert(`Resultado: ${resultado}`);
    }
}

calcular(); // Iniciar la calculadora
