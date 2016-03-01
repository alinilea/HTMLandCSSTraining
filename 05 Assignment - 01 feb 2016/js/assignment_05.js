(function() {

var allJSBtn = document.getElementsByClassName("js-btn");
for (var i = 0, len = allJSBtn.length; i < len; i++) {
  allJSBtn[i].addEventListener("click", showPrice);
}

function showPrice() {
  //get all the elements by class name
  var arrBtn = document.getElementsByClassName("js-btn");

  //search for the element with class "js-selected" and remove it
  for (var j = 0, len1 = arrBtn.length; j < len1; j++) {
    if ( arrBtn[j].classList.contains("js-btn-active") ) {
      arrBtn[j].classList.remove("js-btn-active");
    }
  }
  //make the clicked element active, adding the class "js-selected"
  var price = event.currentTarget.innerHTML.concat(".00");
  event.currentTarget.classList.add("js-btn-active");
  document.getElementById("js-price").innerHTML = price;
}

}());


// exercise 2 - The Slider

// The addEventListener() method is not supported in IE 8 and earlier versions.
// That is why I used a solution that works for all browsers

// var jsLeft  = document.getElementById("js_left");
// var jsRight = document.getElementById("js_right");
//
// if (jsLeft.addEventListener) {
//     jsLeft.addEventListener("click", toTheLeft);
// } else if (jsLeft.attachEvent) {
//     jsLeft.attachEvent("onclick", toTheLeft);
// }
//
// if (jsRight.addEventListener) {
//     jsRight.addEventListener("click", toTheRight);
// } else if (jsRight.attachEvent) {
//     jsRight.attachEvent("onclick", toTheRight);
// }
//
// function toTheRight() {
//    //get all the elements by id
//   //  event.stopPropagation;
//    var arrSlider = document.getElementsByClassName("js-slide");
//
//   if ( arrSlider[0].classList.contains("js-chosen") ) {
//     arrSlider[0].classList.remove("js-chosen");
//     arrSlider[1].classList.add("js-chosen");
//   } else if (arrSlider[1].classList.contains("js-chosen")) {
//     arrSlider[1].classList.remove("js-chosen");
//     arrSlider[2].classList.add("js-chosen");
//   } else if (arrSlider[2].classList.contains("js-chosen")) {
//     arrSlider[2].classList.remove("js-chosen");
//     arrSlider[0].classList.add("js-chosen");
//   }
// }
//
// function toTheLeft() {
//   // event.stopPropagation;
//   //get all the elements by id
//   var arrSlider = document.getElementsByClassName("js-slide");
//
//   if ( arrSlider[0].classList.contains("js-chosen") ) {
//     arrSlider[0].classList.remove("js-chosen");
//     arrSlider[2].classList.add("js-chosen");
//   } else if (arrSlider[1].classList.contains("js-chosen")) {
//     arrSlider[1].classList.remove("js-chosen");
//     arrSlider[0].classList.add("js-chosen");
//   } else if (arrSlider[2].classList.contains("js-chosen")) {
//     arrSlider[2].classList.remove("js-chosen");
//     arrSlider[1].classList.add("js-chosen");
//   }
// }
//
//
// // exercise 3
//
// // The addEventListener() method is not supported in IE 8 and earlier versions.
// // That is why I used a solution that works for all browsers
//
// var allJSSanctuary = document.getElementsByClassName("js-sanctuary");
// for (var i = 0, len = allJSSanctuary.length; i < len; i++) {
//   allJSSanctuary[i].addEventListener("click", cloneElem);
//   allJSSanctuary[i].addEventListener("contextmenu", removeElem);
// }
//
// var allJSVers = document.getElementsByClassName("js-vers");
// for (var j = 0, len1 = allJSVers.length; j < len1; j++) {
//   allJSVers[j].addEventListener("click", cloneElem);
//   allJSVers[j].addEventListener("contextmenu", removeElem);
// }
//
// var allJSReddit = document.getElementsByClassName("js-reddit");
// for (var k = 0, len2 = allJSReddit.length; k < len2; k++) {
//   allJSReddit[k].addEventListener("click", cloneElem);
//   allJSReddit[k].addEventListener("contextmenu", removeElem);
// }
//
// function cloneElem(event) {
//   var cln = event.currentTarget.cloneNode(true);
//   cln.classList.add("pad-t");
//   cln.addEventListener("click", cloneElem);
//   cln.addEventListener("contextmenu", removeElem);
//   document.getElementById("js-col-1").appendChild(cln);
// }
//
// function removeElem(event) {
//   event.preventDefault();
//   var elem = event.currentTarget;
//   if ( elem.classList.contains("pad-t") ) {
//     elem.parentNode.removeChild(elem);
//   }
// }




// other exercises

// function cloneElem(el) {
//     var itm = document.getElementById(el);
//     var cln = itm.cloneNode(true);
//     cln.classList.add("pad-t");
//     document.getElementById("col-1").appendChild(cln);
// }

// function removeElem(el) {
//     var elem = document.getElementById(el);
//     if( elem.classList.contains("pad-t") ) {
//       elem.parentNode.removeChild(elem);
//     }
//     return false;
// }

// function addOrRemoveElem(event) {
//   // event.stopPropagation();
//   // var btn = event.button;
//     if (event.button == 0) {
//       // console.log(0);
//       // var itm = document.getElementById(event.currentTarget.id);
//       var itm = event.currentTarget;
//       var cln = itm.cloneNode(true);
//       cln.classList.add("pad-t");
//       document.getElementById("js-col-1").appendChild(cln);
//
//     } else if (event.button == 2) {
//       event.stopImmediatePropagation();
//       // console.log(2);
//       // var elem = document.getElementById(event.currentTarget);
//       var elem = event.currentTarget;
//       if ( elem.classList.contains("pad-t") ) {
//         elem.parentNode.removeChild(elem);
//       }
//     }
// }



// function sliderLeft() {
//    //get all the elements by id
//   //  event.stopPropagation();
//    var arrSlider = document.getElementsByClassName('.slide1', '.slide2', '.slide3');
//
//     for (var i = 0; i < arrSlider.length; i++) {
//       if ( arr[i].classList.contains("js-chosen") && i < 2 ) {
//           arr[i+1].classList.add("js-chosen");
//       } else if ( arr[i].classList.contains("js-chosen") && i === 2 ) {
//           arr[0].classList.add("js-chosen")
//       }
//       arr[i].classList.remove("chosen");
//     }
//
//     //make the clicked element selected:
// }
