// // // Reescreva a próxima expressão usando
// // um if / else.
// switch (day) {
// 	case 0: 
<<<<<<< Updated upstream
// 		console.log("Segunda")
// 		break
// 	case 1:
// 		console.log("Terça")
// 		break
// 	case 2:
// 		console.log("Quarta")
// 		break
// 	case 3:
// 		console.log("Quinta")
// 		break
// 	case 4:
// 		console.log("Sexta")
// 		break
// 	case 5:
// 		console.log("Sábado")
// 		break
// 	case 6:
// 		console.log("Domingo")
// 		break
// 	default:
// 		throw "Dia inválido!"
// }
if (day === 0) {
	console.log("Segunda")
} else if (day === 1) {
	console.log("Terça")
} else if (day === 2) {
	console.log("Quarta")
} else if (day === 3) {
	console.log("Quinta")
} else if (day === 4) {
	console.log("Sexta")
} else if (day === 5) {
	console.log("Sábado")
} else if (day === 6) {
	console.log("Domingo")
} else {
	alert("Dia inválido!")
}
=======
//         console.log("Segunda")
//         break
// 	case 1:
//         console.log("Terça")
//         break
// 	case 2:
//         console.log("Quarta")
//         break
// 	case 3:
//         console.log("Quinta")
//         break
// 	case 4:
//         console.log("Sexta")
//         break
// 	case 5:
//         console.log("Sábado")
//         break
// 	case 6:
//         console.log("Domingo")
//         break
// 	default:
// 		throw "Dia inválido!"
// }

n = prompt ("Que dia é hoje? sendo 0:Segunda; 1: terça; 2: quarta; 3: quinta; 4: sexta; 5: sábado; 6: domingo;")

if (n == 0) {
    alert("É segunda feira!!! Affff")
}
else if (n == 1){
    alert("É Terça Feira!!! Hoje tem master chef!!")
}
else if (n == 2){
    alert("É Quarta Feira!!! Dia de beber com as migas!!")
}
else if (n == 3){
    alert("É Quinta Feira!!! Que canseira da porra!!")
}
 
else if (n == 4){
    alert("É Sexta Feira!!! THANXXXXXXXX VAMO BEBEEEER")
}

else if (n == 5){
    alert("É Sábado!!! Dia de sexo e netflix")
}

else if (n == 6){
    alert("É Domingo!!! Dia de comer muito e dormir a tarde")
}
else {
    throw "Dia inválido!"
}

>>>>>>> Stashed changes

// Reescreva a próxima expressão usando
// o operador ternário
// let rand
// if (Math.random() > 0.5) {
// 	rand = true
// } else {
// 	rand = false
// }
<<<<<<< Updated upstream
let rand = Math.random() > 0.5 ? true : false
=======

let rand = Math.random() > 0.5 ? true :  false

//[condição] ? [se true] [se nao false]





>>>>>>> Stashed changes

// Reescreva a próxima expressão usando
// o operador ternário
// let color
// if (r > g && r > b) {
// 	color = "Vermelho"
// } else if (g > b && g > r) {
// 	color = "Verde"
// } else if (b > r && b > g) {
// 	color = "Azul"
// }
<<<<<<< Updated upstream
const r = Math.random() * 256
const g = Math.random() * 256
const b = Math.random() * 256
let color = r > g && r > b ? "Vermelho"
	: g > b && g > r ? "Verde" 
	: b > r && b > g ? "Azul"
	: "Cor indefinida"
=======
// const r = Math.random() * 256
// const g = Math.random() * 256
// const b = Math.random() * 256
color = r > g && r > b ? "vermelho" : g > b && g > r ? "Verde" : "Azul" 

color = r > g && r > b ? "vermelho" : g > b && g > r ? "Verde" : b > r && b > g ? "Azul" : "cor indefinida" 


Condicionais
if/else
if ([expressao -> true/false]) {
    [codigo a ser executado caso a expressao = true]
}else if ([expressao2 -> true/false]){
    [codigo a ser executado caso expressao 2 = true]
}else{
    [codigo a ser executado caso expressao e expressao = false]
}

switch / case
switch([valor]) {
    case [1]:
        [codigo a ser executado caso valor == 1]
        break
    case [2]:
        [codigo a ser executado caso valor == 2]
        break
    case [3]:
        [codigo a ser executado caso valor == 3]
        break
    case [4]:
        [codigo a ser executado caso valor == 4]
        break
    case [5]:
    case [6]:
        [codigo a ser executado caso valor == 5 ou 6]
        break
    default:
    [codigo a ser executado caso aconteça qualquer outro valor]
}

operador ternario

[expressao] ? [se expressao true] : [se nao]

[expressao] ? [se expressao true] : [expressao2] ? [se expressao 2 true] : [se expressao e expressao 2 false]

variaveis

let nome_da_variavel = 876  // pode ser alterado
const nome_da_constante = 123 // não pode ser alterado

var nome = 123

>>>>>>> Stashed changes

