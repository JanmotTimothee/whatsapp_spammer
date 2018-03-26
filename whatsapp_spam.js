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
