// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
const pokemon = {
	numero_nacional: 143,
	nome: "Snorlax",
	nome_japones: "Kabigon",
	numero_johnto: 230,
	evolui_de: "Munchlax",
	janiarli_tem: true
}

const pokemon ={
    nome:"pikachu",
    jname: "pikachu",

};



// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
pokemon.diga_ola = function () {
	console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
}

const pokemon ={
    nome:"pikachu",
    jname: "pikachu",
};

console.log(`Hello, my name is ${pokemon.nome}.And my japanese name is ${pokemon.jname}`)



// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.can_fly = false

const pokemon ={
    nome:"pikachu",
    jname: "pikachu",
    can_fly: false,
    
};



// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function () {
	if (this.can_fly) {
		return "Flyyyyiinnngggg!"
	} else {
		return "Sorry, I can't fly"
	}
}

pokemon.fly = function(){
        if (pokemon.can_fly){
            return "é noix que voa bruxão"
        }
        else{
            return  "i believe i can flyyyyyy, but i CANT!"
        }
    }


// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.do_something = function () {
	let acoes = ["FIGHT", "BAG", "RUN"]
	return acoes[Math.floor(Math.random() * acoes.length)]
}
// ou...
pokemon.do_something = function () {
	const rand = Math.floor(Math.random() * 3)
	if (rand === 0) {
		return "FIGHT"
	} else if (rand === 1) {
		return "BAG"
	} else {
		return "RUN"
	}
}

pokemon.do_something = function (){
    let actions = ["Raio do trovãooooo", "Pikaaaaaaaaaaaaachuuuuu", "Eita Ash, vão bora daqui!"]
    return actions[Math.floor(Math.random() * actions.length)] 
}


// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will <NOME DO POKEMON> do?" e
// retorna o resultado do metodo
// `do_something`.
pokemon.ask = function () {
	console.log(`What will ${this.nome} do?`)
	return this.do_something()
}

pokemon.ask = function (){
    console.log(`What the fuck ${pokemon.nome} does?`)
    return pokemon.do_something()
}


// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for (const prop in pokemon) {
	console.log(prop)
}

for (const key in pokemon){
    console.log(key)
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
for (const prop in pokemon) {
	console.log(`${prop}: ${pokemon[prop]}`)
}

// 9.
// Crie uma funcao construtora
// de um pokemon generico.
// function (nome, nome_japones) {}
function Pokemon(nome, nome_japones, pode_voar) {
	this.nome = nome
	this.nome_japones = nome_japones
	this.pode_voar = pode_voar
	this.diga_ola = function () {
		console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
	}
	this.voe = function () {
		if (this.pode_voar) {
			return "É nóis que voa bruxão!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.manda_ver = function () {
		let acoes = [
			"Desce a porrada", 
			"Deu ruim", 
			"Ash, vambora daqui"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}


for (const key in pokemon){
    console.log(key, pokemon[key])
}
