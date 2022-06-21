const filme = {
  codigo: 1,
  titulo: 'Encanto',
  duracao: 1.50,
  atores: ['Stephanie Beatriz', 'Maluma', 'Rhenzy Feliz'],
  anoDeLancamento: 2021,
  emCartaz: true
}

const { titulo, anoDeLancamento } = filme;

console.log(titulo, anoDeLancamento)

console.log("=============================================")
// =============================================

const filmeArray = [
  "Encanto", "Bacurau", "Cidade de Deus", "Central do Brasil"
]

const [filme1, filme2, filme3] = filmeArray;

console.log(filme3)
