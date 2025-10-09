```javascript
// Utility function: converts a number to a Roman numeral string

function toRoman(num) {
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  for (let i in romanMap) {
    while (num >= romanMap[i]) {
      roman += i;
      num -= romanMap[i];
    }
  }

  return roman;
}


// Example usage:
// console.log(toRoman(1984)); // Output: MCMLXXXIV
// console.log(toRoman(3));    // Output: III
// console.log(toRoman(14));   // Output: XIV
```