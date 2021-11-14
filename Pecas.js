let peso = 150;

if (peso >= 100) //Peso maior ou igual a 100kg?
{
    console.log("A peça possui o peso adequado, pode ser cadastrada!")// Se maior ou igual a 100 kG 
} 
else //Negação de Peso maior ou igual a 100kg? 
{
    console.log("A peça não pode ser cadastrada, não possui o peso minimo") // Se não maior ou igual a 100 kG 
}

let listaPecas = ["amortecedor","disco de freio","pneus","cambio","bateria","radiador","correia","step","ignicao","farol","fusivel"];

console.log("Exemplo: A minha primeira peça da lista é: " + listaPecas[0]);

let numeroPecas = listaPecas.length; //Armazenando a quatidade vetores ocupados na variavel, onde cada vetor armazena o nome de um produto

if (numeroPecas < 10) // Menos de 10 peças cadastradas?
{
    console.log("A lista ainda possui espaço para cadastro de peças")  //Imprimindo que ainda possui disponibilidade de espaço
} 
else //Negação da logica se <10
{
    console.log("Não há mais espaço disponivel para cadastro de peças, a lista já atingiu a capacidade máxima") //Imprimindo que a disponibilidade de espaço acabou...
}


let nomePeca = listaPecas[5]; // Passando as informações que estão na variável listaPeças vetor 5 para a variável NomePeca

if (nomePeca.length > 3) //Verificando a quantidade de caracteres na variável nomePeças
{
    console.log("Nome de peça é valido, pode seguir com o cadastro.")  //Se maior que 3 caracteres, imprime esse texto...
} else {
    console.log("Nome da peça é invalido, o nome deve ter mais de 3 caracteres.") //Se menor que 3 caracteres, imprime esse texto...
}