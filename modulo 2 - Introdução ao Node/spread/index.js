// spread => espalhar

// rest => resto


console.log("Caso de uso do spread")

const filmeArray = [
  "Encanto", "Bacurau", "Cidade de Deus", "Central do Brasil"
]

const novosFilmes = [...filmeArray, "tropa de elite"]

console.log(novosFilmes)

console.log("====================================================")

console.log("Outro caso de uso do spread")

const numeros = [2, 3, 2, 3, 10];

function somar(...numeros) {
  const soma = numeros.reduce((acumulador, numero) => acumulador + numero)
  console.log(soma)
}

somar(...numeros, 5)

console.log("====================================================")

console.log("Rest")

// O array filmeArray já está declarado lá em cima

const [filme1, ...filmeArrayRest] = filmeArray;

console.log("Usando o Rest operator com a desestruturação de array\n")

console.log("filme1", filme1)
console.log("filmeArrayRest", filmeArrayRest)


console.log("====================================================")

console.log("Usando o Rest operator com a desestruturação de objeto\n")

const filme = {
  codigo: 1,
  titulo: 'Encanto',
  duracao: 1.50,
  atores: ['Stephanie Beatriz', 'Maluma', 'Rhenzy Feliz'],
  anoDeLancamento: 2021,
  emCartaz: true
}

const { titulo, ...restoObjeto } = filme;

console.log("titulo", titulo)
console.log("Resto do objeto", restoObjeto)

console.log("filme", filme)

console.log("====================================================")





