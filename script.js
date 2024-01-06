let string = "";
let buttons = document.querySelectorAll('#btn');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {

      string = eval(string);
      document.querySelector('input').value = string;

    } else if (e.target.innerHTML == 'AC') {

      string = "";
      document.querySelector('input').value = string;

    } else if (e.target.innerHTML == 'C') {

      // Clear one digit at a time
      string = string.slice(0, -1); // Remove the last character
      document.querySelector('input').value = string;
      
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

function toggleBackground() {
    const body = document.body;
    const h1 = document.querySelector('h1');
    const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;

    if (currentBackgroundColor === 'rgb(255, 255, 255)') {
      // If background is white, switch to black
      body.style.backgroundColor = '#000';
      h1.style.color = '#fff';
    } else {
      // If background is black (or any other color), switch to white
      body.style.backgroundColor = '#fff';
      h1.style.color = '#000';
    }
  }