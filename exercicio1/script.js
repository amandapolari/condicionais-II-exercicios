const num = Number(prompt('Digite um número'));
let msgPositiva = `O número ${num} É divisível por 2 ou por 3`;
let msgNegativa = `O número ${num} NÃO é divisível por 2 ou por 3`;

// if com aninhamento:
if (num % 2 !== 0) {
    if (num % 3 !== 0) {
        console.log(msgNegativa);
    } else {
        console.log(msgPositiva);
    }
} else {
    console.log(msgPositiva);
}

// if com operador lógico:
// if (num % 2 === 0 || num % 3 === 0) {
//     console.log(msgPositiva);
// } else {
//     console.log(msgNegativa);
// }

// if com aninhamento de outra forma
// if (!(num % 2 === 0)) {
//     if (!(num % 3 === 0)) {
//         console.log(msgNegativa);
//     } else {
//         console.log(msgPositiva);
//     }
// } else {
//     console.log(msgPositiva);
// }
