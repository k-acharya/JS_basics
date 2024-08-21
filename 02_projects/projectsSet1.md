# Projects Related to DOM

## Projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javaScript
console.log("Kaberi")
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
## project 2

```javaScript
const form = document.querySelector('form');
//this usecase will give you empty
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  
});
```
## project 3
```javaScript
document.getElementById('clock');
//document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString());

//kitne interval tak chalana ha yafir har wakt ka updation khud ho...therefore this function helps out here

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // mujhe console me nai chalani thi ,mujhe ye document update karna tha, node update karna tha

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```