var myLib = require('./my-lib')

document
  .querySelector('#count-button')
  .addEventListener('click', () => {
    var count = Number(document.querySelector('#count').innerText)
    document.querySelector('#count').innerText = myLib.counter(count)
});