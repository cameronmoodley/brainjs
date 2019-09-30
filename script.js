const net = new brain.recurrent.LSTM();

net.train([
    'obrigado, portuguese',
    'agua, portuguese',
    'takk skudal, Norsk',
]);

const output = net.run('takk');

console.log(output);
