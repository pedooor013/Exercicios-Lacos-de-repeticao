
let isCorrect = false;
let selectNumber = Math.floor(Math.random() * 10 ) + 1;
let numberAttepts = 0;

console.log(selectNumber);

while(!isCorrect){
  let guess = prompt('Selecione o numero de 0 a 10 que o computador descobriu!')
  if(Number(guess) === selectNumber){
    isCorrect = true;
  }
  numberAttepts++
}

console.log(numberAttepts === 1 ? 'Você usou somente uma tentativa para descobrir! Parabéns!' : `Você usou ${numberAttepts} para descobrir o número secreto! Parabéns!`);

