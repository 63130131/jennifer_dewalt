function noOneWatching() {
	var height = $(window).height(),
		width = $(window).width();

	function playVWebCamVideo() {
		window.URL = window.URL || window.webkitURL;
		navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
	                          	  navigator.mozGetUserMedia || navigator.msGetUserMedia;

		var video = document.querySelector('video');

		var onDenial = function(e) {
	    	;
	  	};

		if (navigator.getUserMedia) {
		  navigator.getUserMedia({audio: false, video: true}, function(stream) {
		    video.src = window.URL.createObjectURL(stream);
		  }, onDenial);
		} 		
	};

	function flashMessageIn() {
		$('#message').fadeIn(300);

		setTimeout(flashMessageOut, 300);
	};

	function flashMessageOut() {
		$('#message').fadeOut(randomInt(300));

		setTimeout(flashMessageIn, randomInt(8000, 20000));
	};

	$('video')[0].width = width;

	playVWebCamVideo();

	setTimeout(flashMessageIn, 10000);

}