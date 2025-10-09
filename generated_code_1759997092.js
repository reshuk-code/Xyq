```javascript
// Simple utility function:  titleCase(str)
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

// Example usage (optional):
// console.log(titleCase("this is a test string"));

// Small DOM Manipulation snippet:  Add a class to all elements with a specific ID prefix
function addClassToPrefixedElements(prefix, className) {
  const elements = document.querySelectorAll('[id^="' + prefix + '"]');
  elements.forEach(element => {
    element.classList.add(className);
  });
}

// Example Usage (optional - requires HTML context)
// addClassToPrefixedElements("item-", "highlighted");
```