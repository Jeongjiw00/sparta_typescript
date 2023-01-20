function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  // as : 1=>1, 2=>2, ..., 6=>6
  // math.random() : 0 ~ 1
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result4 = rollDice();
console.log(result4);
