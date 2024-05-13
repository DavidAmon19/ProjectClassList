

// const
// let


// const listaDeDevs = [];


// function Listagem(){

// }


// const ListagemNova = () => {
//     return (
//         <div>
//             <h1>Lista de Devs</h1>
//         </div>
//     )
// }


function somar(){
    return 10 + 10;
}

// push insere dados no final do array
// filter filtra dados de acordo com o indice passado
// map mapeia os itens e guarda em um novo array
// foreach mapeia os itens
// pop remove o ultimo elemnto de um array
// shift remove elemento do indice zero
// unshift remove primeiro elemento

let nomes = ["Davi", 123, undefined, null, somar()];

let sobrenome = {
    nome: "Davi",
    sobrenome: "Silva"
}


let funcionarios = [
    {
        nome: "Davi",
        sobrenome: "Silva",
        idade: 20,
        cargo: "desenvolvedor"
    },

    {
        nome: "Lucas",
        sobrenome: "Dutra",
        idade: 25,
        cargo: "Desenvolvedor Front-end"
    },

    {
        nome: "Maria",
        sobrenome: "Silva",
        idade: 22,
        cargo: "Desenvolvedora"
    }
]


// função anonima
// callback
// arrow function

function somar( numero1, numero2){
    return numero1 + numero2;
}

somar(20 + 30);

funcionarios.map(function(cada){
    console.log(cada);
})


