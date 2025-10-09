```javascript
// Utility function: Debounce

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


// Example usage (with a hypothetical function):

// function handleInput(event) {
//   console.log("Input changed:", event.target.value);
// }

// const debouncedInputHandler = debounce(handleInput, 300);

// // Attaching to an input element (in a browser context):
// // document.getElementById("myInput").addEventListener("input", debouncedInputHandler);



//Small game snippet: Rock Paper Scissors

function rockPaperScissors(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  return `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

// Example usage:
// console.log(rockPaperScissors("rock"));
// console.log(rockPaperScissors("paper"));
// console.log(rockPaperScissors("scissors"));

//DOM manipulation snippet: Adding a list item

function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (!list) return;

  const listItem = document.createElement("li");
  listItem.textContent = text;
  list.appendChild(listItem);
}

//Example Usage (assuming <ul id="myList"></ul> exists in the HTML)
// addListItem("myList", "New Item");
// addListItem("myList", "Another Item");
```