```javascript
// Utility function: Camel case to kebab case converter
function camelToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// Small DOM manipulation script: Adds a class to all paragraphs
function addClassToParagraphs(className) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => p.classList.add(className));
}

// Example usage: (Can be executed in a browser context)
// console.log(camelToKebab("myVariableName")); // Output: "my-variable-name"
// addClassToParagraphs("highlight"); // Adds "highlight" class to all <p> elements
```