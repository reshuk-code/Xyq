```javascript
// Utility function to format a phone number
function formatPhoneNumber(phoneNumber) {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
}

// Example Usage (for testing in a browser environment):
// console.log(formatPhoneNumber("1234567890"));
// console.log(formatPhoneNumber("123-456-7890"));
// console.log(formatPhoneNumber("+11234567890"));
// console.log(formatPhoneNumber("invalid"));


// DOM Manipulation snippet to toggle a class on a button click
document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myDiv = document.getElementById('myDiv');

    if (myButton && myDiv) {
        myButton.addEventListener('click', function() {
            myDiv.classList.toggle('active');
        });
    }
});
// Example HTML:
// <button id="myButton">Toggle Class</button>
// <div id="myDiv">This is a div.</div>
// Example CSS (to see the toggle effect):
// .active {
//   background-color: yellow;
// }

```