(function() {

var getIt = document.getElementById('js-get-it');

getIt.addEventListener('click', leave);
getIt.addEventListener('click', rotate);

function leave() {
  event.preventDefault();
  var car = document.getElementsByClassName('js-car');
  car[0].classList.add('js-go');
}

var loop;

function rotate() {
  event.preventDefault();
  var wheel = document.getElementsByClassName('js-wheel');
  wheel[0].classList.add('js-rotate');
  wheel[0].classList.add('js-wheel-go');
  loop = setTimeout(jsWheelHidden, 2300);
}

clearTimeout(loop);

function jsWheelHidden() {
  var x = document.getElementsByClassName('js-wheel');
  x[0].classList.add('hidden');
}

}())
