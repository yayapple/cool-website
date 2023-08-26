happyDate();
randomCat();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/amongus-s.us/hits");
xhr.send();

xhr.open("GET", "https://api.countapi.xyz/get/amongus-s.us/clicks");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("clickbutton").innerHTML = this.response.value;
}
xhr.send();

function happyDate() {
  const date = new Date();
  const day = date.getDay();
	const weekdays = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
  document.getElementById("message-section").firstElementChild.innerHTML = "happy " + weekdays[day];
}

function randomCat() {
  const number = Math.floor(Math.random() * 138) + 1
  document.getElementById("feature-image").firstElementChild.src="cats/" + number + ".jpg"
}

function clicked(e) {
  xhr.open("GET", "https://api.countapi.xyz/hit/amongus-s.us/clicks");
  xhr.responseType = "json";
  xhr.onload = function() {
    e.innerHTML = this.response.value;
  }
  xhr.send();
}