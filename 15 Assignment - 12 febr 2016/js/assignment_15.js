// I used a Self Executing Anonymous Function to "keep" all the functions inside it
(function() {

// exercise 1

// The addEventListener() method is not supported in IE 8 and earlier versions.
// That is why I used a solution that works for all browsers

var jsCalendar = document.getElementById("js_calendar");
var jsEvent    = document.getElementById("js_event");
var jsLike     = document.getElementById("js_like");

if (jsCalendar.addEventListener) {
    jsCalendar.addEventListener("click", selection);
} else if (jsCalendar.attachEvent) {
    jsCalendar.attachEvent("onclick", selection);
}

if (jsEvent.addEventListener) {
    jsEvent.addEventListener("click", selection);
} else if (jsEvent.attachEvent) {
    jsEvent.attachEvent("onclick", selection);
}

if (jsLike.addEventListener) {
    jsLike.addEventListener("click", selection);
} else if (jsLike.attachEvent) {
    jsLike.attachEvent("onclick", selection);
}

function selection() {
  //get all the elements by class name
  var arr = document.getElementsByClassName("js-footer-top-col");

  //search for the element with class "js-selected" and remove it
  for (var i = 0, len = arr.length; i < len; i++) {
    if ( arr[i].classList.contains("js-selected") ) {
      arr[i].classList.remove("js-selected");
    }
  }
  //make the clicked element active, adding the class "js-selected"
  event.currentTarget.classList.add("js-selected");
}

// exercise 2 - The Slider

// The addEventListener() method is not supported in IE 8 and earlier versions.
// That is why I used a solution that works for all browsers

var jsLeft  = document.getElementById("js_left");
var jsRight = document.getElementById("js_right");

if (jsLeft.addEventListener) {
    jsLeft.addEventListener("click", toTheLeft);
} else if (jsLeft.attachEvent) {
    jsLeft.attachEvent("onclick", toTheLeft);
}

if (jsRight.addEventListener) {
    jsRight.addEventListener("click", toTheRight);
} else if (jsRight.attachEvent) {
    jsRight.attachEvent("onclick", toTheRight);
}

function toTheRight() {
   //get all the elements by id
  //  event.stopPropagation;
   var arrSlider = document.getElementsByClassName("js-slide");

  if ( arrSlider[0].classList.contains("js-chosen") ) {
    arrSlider[0].classList.remove("js-chosen");
    arrSlider[1].classList.add("js-chosen");
  } else if (arrSlider[1].classList.contains("js-chosen")) {
    arrSlider[1].classList.remove("js-chosen");
    arrSlider[2].classList.add("js-chosen");
  } else if (arrSlider[2].classList.contains("js-chosen")) {
    arrSlider[2].classList.remove("js-chosen");
    arrSlider[0].classList.add("js-chosen");
  }
}

function toTheLeft() {
  // event.stopPropagation;
  //get all the elements by id
  var arrSlider = document.getElementsByClassName("js-slide");

  if ( arrSlider[0].classList.contains("js-chosen") ) {
    arrSlider[0].classList.remove("js-chosen");
    arrSlider[2].classList.add("js-chosen");
  } else if (arrSlider[1].classList.contains("js-chosen")) {
    arrSlider[1].classList.remove("js-chosen");
    arrSlider[0].classList.add("js-chosen");
  } else if (arrSlider[2].classList.contains("js-chosen")) {
    arrSlider[2].classList.remove("js-chosen");
    arrSlider[1].classList.add("js-chosen");
  }
}


// exercise 3

// The addEventListener() method is not supported in IE 8 and earlier versions.
// That is why I used a solution that works for all browsers

var allJSSanctuary = document.getElementsByClassName("js-sanctuary");
for (var i = 0, len = allJSSanctuary.length; i < len; i++) {
  allJSSanctuary[i].addEventListener("click", cloneElem);
  allJSSanctuary[i].addEventListener("contextmenu", removeElem);
}

var allJSVers = document.getElementsByClassName("js-vers");
for (var j = 0, len1 = allJSVers.length; j < len1; j++) {
  allJSVers[j].addEventListener("click", cloneElem);
  allJSVers[j].addEventListener("contextmenu", removeElem);
}

var allJSReddit = document.getElementsByClassName("js-reddit");
for (var k = 0, len2 = allJSReddit.length; k < len2; k++) {
  allJSReddit[k].addEventListener("click", cloneElem);
  allJSReddit[k].addEventListener("contextmenu", removeElem);
}

function cloneElem(event) {
  var cln = event.currentTarget.cloneNode(true);
  cln.classList.add("pad-t");
  cln.addEventListener("click", cloneElem);
  cln.addEventListener("contextmenu", removeElem);
  document.getElementById("js-col-1").appendChild(cln);
}

function removeElem(event) {
  event.preventDefault();
  var elem = event.currentTarget;
  if ( elem.classList.contains("pad-t") ) {
    elem.parentNode.removeChild(elem);
  }
}

}());
