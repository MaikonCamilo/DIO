const lista = [
    {
        name: 'sabao',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldo = 100;

const calcular = (saldo, lista) => lista.reduce(function (acc, el){
    return acc - el.preco;
}, saldo);

console.log(calcular(saldo, lista));