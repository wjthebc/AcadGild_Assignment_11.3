//sets var to div using id
var attrs = document.querySelector("#attrs");

//function that get attributes of attr's id and logs it to console
function x () {
  var attribute = attrs.getAttribute("id");
  console.log(attribute);
};

//function that removes div within body when run
function y () {
  document.body.removeChild(attrs);};

//makes function x run when button one is clicked
var b1 = document.querySelector("#b1");
b1.addEventListener('click', x);

//makes function y run when button two is clicked
var b2 = document.querySelector("#b2");
b2.addEventListener('click', y);

