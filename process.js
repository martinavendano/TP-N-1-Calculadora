let process = require('process')
let suma = require('./operaciones/suma')
let resta = require('./operaciones/resta');
let multiplicar = require('./operaciones/multiplicacion');
let dividir = require('./operaciones/division');

console.log(process.argv);

let operacion = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]

num1 = +num1
num2 = +num2








switch (operacion) {
    case 'suma':
        resultado = suma(num1, num2)
        console.log(resultado);
        break;
    case 'resta':
        resultado = resta(num1, num2)
        console.log(resultado);
        break;
    case 'multiplicar':
        resultado = multiplicar(num1, num2)
        console.log(resultado);

        break;
    case "dividir":
        resultado = dividir(num1, num2)
        console.log(resultado);

        break;
    default:
        console.log('no se encuentra la operacion solicitada')
        break;

}



