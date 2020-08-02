/* 7) Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto e o seu respectivo preço, agora construa uma função que some todos os valores e te devolva o total. */


var produtos =[
    {nome: "chocolate", preco: 1},
    {nome: "farinha", preco: 2},
    {nome: "ovos", preco: 3},
    {nome: "leite", preco: 4}
];

/* Arrow function que soma a propriedade "preco" de cada item da array recebida, devolvendo o total somado */
somaPrecoArray = (array) => array.reduce( (total, item) => total+ item.preco, 0);

/* Chamada para verificar a função */
console.log(somaPrecoArray(produtos));
