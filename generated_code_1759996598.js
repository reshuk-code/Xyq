```javascript
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDots(numDots) {
  const container = document.body;
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${randomNumber(0, window.innerWidth - 20)}px`;
    dot.style.top = `${randomNumber(0, window.innerHeight - 20)}px`;
    dot.style.backgroundColor = `hsl(${randomNumber(0, 360)}, 100%, 50%)`;
    container.appendChild(dot);
  }
}

window.onload = () => {
  createDots(50);
};

const style = document.createElement('style');
style.textContent = `
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
}
body {
  margin: 0;
  overflow: hidden;
  background-color: black;
}
`;
document.head.appendChild(style);
```