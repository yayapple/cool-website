happyDate();
randomCat();


function happyDate() {
  const date = new Date();
  const day = date.getDay();
	const weekdays = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
  document.getElementById("message-section").firstElementChild.innerHTML = "happy " + weekdays[day];
}

function randomCat() {
  const number = Math.floor(Math.random() * 578) + 1
  document.getElementById("feature-image").firstElementChild.src="cats/" + number + ".jpg"
  
  var numClicks = checkCookie(document.cookie)
  document.getElementById("counter").innerHTML = "you have click cat " + numClicks + " time"
} 
function catCounter() {

  var numClicks = checkCookie(document.cookie)
  numClicks = parseInt(numClicks) + 1

  document.cookie="cat=" + numClicks + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
}

function checkCookie(cookie) {
  if (!cookie.includes("cat")) resetCookie()
  if (cookie.includes("NaN")) resetCookie()

  return parseInt(document.cookie.split(";")[0].substring(4))
}

function resetCookie() {
  document.cookie="cat=0; expires=Fri, 31 Dec 9999 23:59:59 GMT"
}