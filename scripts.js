var randomButton = document.querySelector('.random')
var resetButton = document.querySelector('.reset')
var body = document.querySelector('body')

function randomColor() {
  return Math.floor(Math.random() * (255)) + 1;
}

randomButton.addEventListener('click', function() {
  var r = randomColor();
  var g = randomColor();
  var b = randomColor();
  body.setAttribute('style', 'background: rgb(' + r + ',' + g + ',' + b + ')')
});

resetButton.addEventListener('click', function() {
  body.setAttribute('style', 'background: white')
});
