const nome = prompt('Digite o seu nome');
const idade = Number(prompt('Digite a sua idade'));

// códigos a serem reescritos
// a)
// if (nome === 'José') {
//     console.log('Oi, Zé!');
// } else {
//     console.log('Olá, ' + nome);
// }

// b)
// if (idade >= 18) {
//     console.log('Pode tirar carteira de motorista!');
// } else {
//     console.log('Ainda não pode tirar carteira de motorista!');
// }

// códigos reescritos:
// a)
nome === 'José' 
	? console.log('Oi, Zé!') 
	: console.log('Olá, ' + nome);

// b)
idade >= 18
    ? console.log('Pode tirar carteira de motorista!')
    : console.log('Ainda não pode tirar carteira de motorista!');
