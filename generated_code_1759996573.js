```javascript
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function createDiceRoller(numDice = 1) {
  return () => {
    let rolls = [];
    for (let i = 0; i < numDice; i++) {
      rolls.push(rollDice());
    }
    return rolls;
  };
}

// Example usage (not part of the function definition):
// const rollOneDice = createDiceRoller();
// const rollTwoDice = createDiceRoller(2);

// console.log(rollOneDice());
// console.log(rollTwoDice());
```