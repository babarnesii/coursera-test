(function (window) {
var helloSpeaker = {};
	function speak (name) {
		console.log(speakWord + " " + name);
	}
var speakWord = "Hello";

	window.helloSpeaker = helloSpeaker;
}) (window);
