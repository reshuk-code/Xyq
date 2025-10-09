```javascript
function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = (char === char.toLowerCase()) ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
    }
    return char;
  }).join('');
}
```