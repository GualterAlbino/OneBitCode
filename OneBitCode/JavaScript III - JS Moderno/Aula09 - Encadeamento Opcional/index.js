/*


Operador que permite ler propriedades internas de uma cadeia de objetos, mas com o diferencial
de que ELE NÃO FAZ A VALIDAÇÃO, usando o operador "?"

Em vez de usar o "." , ele usa o "?"


*/

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
}

//Nesse caso, não existe o phone em FRIENDS
//console.log(user.friends[0].phone.ddd);

//Para usar o encadeamento opcional (Caso exista)
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

console.log(user?.name)

//Verifica e caso der erro retorna UNDEFINED
//Caso não tenha o que você procura eme retorna UNDEFINED em vez de retornar ERRO