let a = 1
let b = 2
let c = 3

// Resultado: "Hello, world!"
<<<<<<< Updated upstream
if (6 < 2 * 5) { // 6 < 10
=======
if (6 < 2 * 5) {
>>>>>>> Stashed changes
	console.log("Hello, world!")
}

// Resultado: 2222
<<<<<<< Updated upstream
if (a > b && a > c) { // 1 > 2 && ..
=======
if (1 > 2 && 1 > 3) {
>>>>>>> Stashed changes
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado: "*"
<<<<<<< Updated upstream
if (a < c) { // 1 < 3
	console.log("*")
} else if (a === b) { // não executa
=======
if (1 < 3) {
	console.log("*")
} else if (1 === 2) {
>>>>>>> Stashed changes
	console.log("&")
} else { // não executa
	console.log("$")
}

<<<<<<< Updated upstream
// Resultado: "####"
if (a < b) { // 1 < 2
=======
// Resultado:
if (1 < 2) { 
>>>>>>> Stashed changes
	console.log("####")
} else { // não executa
	console.log("&&&&")
}

// Resultado: 100 200 0
const x = 100
const y = 200
<<<<<<< Updated upstream
if (y <= 200 && x > 100) { // 200 <= 200 && 100 > 100
	console.log(`${x} ${y} ${x + y}`)
} else { // não executa
	console.log(`${x} ${y} ${2 * x - y}`)
}

// Resultado: "*"
if (a < c) { // 1 < 3
=======
if (100 > 100 && 200 <= 200) {
	console.log(`${100} ${200} ${100 + 200}`)
} else {
	console.log(`${100} ${200} ${2 * 100 - 200}`)
}

// Resultado: "*"
if (1 < 3) {
>>>>>>> Stashed changes
	console.log("*")
} else if (a === c) { // não executa
	console.log("&")
} else { // não executa
	console.log("$")
}

<<<<<<< Updated upstream
// a++ -> a = a + 1 
// Resultado: 1 3 4
if (a++ > b++ || a-- > 0) { // 2 > 3 || 1 > 0
=======
// Resultado: 1 3 4 
if (a++ > b++ || a-- > 0) {
>>>>>>> Stashed changes
	c++
} else { // não executa
	c--
}
console.log(`${a} ${b} ${c}`)

// Resultado: "####"
<<<<<<< Updated upstream
if (a < b) { // 1 < 3
=======
if (1 < 2) {
>>>>>>> Stashed changes
	console.log("####")
} else { // não executa
	console.log("&&&&")
}

// Resultado: "****"
<<<<<<< Updated upstream
if (a < c) { // 1 < 4
=======
if (1 < 3) {
>>>>>>> Stashed changes
	console.log("****")
} else if (b > a) { // não executa
	console.log("&&&&")
} else { // não executa
	console.log("####")
}