let nacionalidade = prompt('Digite aqui a nacionalidade').toLowerCase();
const mensagemPositiva = `A sua nacionalidade é ${nacionalidade}`;
const mensagemNegativa = `A nacionalidade '${nacionalidade}' não foi encontrada`;

switch (nacionalidade) {
    case 'brasileira':
        console.log(mensagemPositiva);
        break;
    case 'argentina':
        console.log(mensagemPositiva);
        break;
    case 'uruguaia':
        console.log(mensagemPositiva);
        break;
    case 'chilena':
        console.log(mensagemPositiva);
        break;
    case 'colombiana':
        console.log(mensagemPositiva);
        break;
    default:
        console.log(mensagemNegativa);
}

// também funciona:
// switch (nacionalidade) {
//     case 'brasileira','brasileiro':
//     case 'argentina','argentino':
//     case 'uruguaia','uruguaio':
//     case 'chilena','chileno':
//     case 'colombiana','colombiano':
//     console.log(mensagemPositiva);
//     break;
//     default:
//         console.log(mensagemNegativa);
// }