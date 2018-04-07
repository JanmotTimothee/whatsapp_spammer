var messages_out = document.getElementsByClassName('message-out');
var messages_in = document.getElementsByClassName('message-in');
var date = messages_in[messages_in.length-1].getElementsByClassName('copyable-text')[0].dataset; //get date of last message
setInterval(update,2000);

function update () {
	var text_out = messages_out[messages_out.length-1].getElementsByClassName('selectable-text')[0].innerText;
	var text_in = messages_in[messages_in.length-1].getElementsByClassName('selectable-text')[0].innerText;
	processing(text_out, text_in);
	date = messages_in[messages_in.length-1].getElementsByClassName('copyable-text')[0].dataset; //get date of last message
}

function processing (str_out, str_in) {
	var splited = str_out.split(" ");
	if (splited[0] == "GoRekt")
	  spam(splited[1], splited[2]);
	var dateNew = messages_in[messages_in.length-1].getElementsByClassName('copyable-text')[0].dataset; //get last message date
	if(dateNew != date){
		spam("parle bien !", 3, 1);
	}
}

function whatsAppText(message) {
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var textbox = document.getElementsByClassName('_2S1VP')[0];
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	document.querySelector('[data-icon="send"]').click()﻿;
}

function spam(message, loop, delay = 1000) {
	for (var i = 0; i < loop; i++) {
		window.setTimeout(function() {
			whatsAppText(message);
		}, delay * i);
	}
}
