const form = document.querySelector('#form')
const alone = document.querySelector("#ensam-checkbox");
const flera = document.querySelector("#flera-checkbox");
const home = document.querySelector("#home-checkbox");
const out = document.querySelector("#out-checkbox");
const button = document.querySelector('.options-button')
const addLink = document.querySelector('#option-link')



function radioOptions (){
if (flera.checked && home.checked) {
  window.location.assign("otherhome.html");
}
  if (alone.checked && home.checked) {
    window.location.assign("alonehome.html");
  }
  if (alone.checked && out.checked) {
     window.location.assign("aloneout.html");
  }
  if (flera.checked && out.checked) {
     window.location.assign("otherout.html");
  }
}
 button.addEventListener('click', radioOptions)


function homeAndAlone() {
   fetch("activity?type=recreational?participants=1");
 }
