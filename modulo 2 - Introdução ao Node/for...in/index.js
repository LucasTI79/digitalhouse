const filme = {
  codigo: 1,
  titulo: 'Encanto',
  duracao: 1.50,
  atores: ['Stephanie Beatriz', 'Maluma', 'Rhenzy Feliz'],
  anoDeLancamento: 2021,
  emCartaz: true
}

// 1° propriedade = codigo
// 2° propriedade = titulo
// 3° propriedade = duracao
// 4° propriedade = atores
// 5° propriedade = anoDeLancamento
// 6° propriedade = emCartaz

for (let propriedade in filme) {
  console.log(propriedade + ": " + filme[propriedade])
}