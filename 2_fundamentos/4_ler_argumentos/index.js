console.log(process.argv)

const args = process.argv.slice(2) // mostra informações do arquivo
console.log(args)

const nome =  args[0].split('=')[1] // mostra informação passada pelo usuário
console.log(nome)

const idade = args[1].split('=')[1] // mostra informação passada pelo usuário
console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`) // mostra na tela as informações!