var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log('Speed is', video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 1.1;
	console.log('Speed is', video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead video");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video current time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log('Unmute');
		video.muted = false;
		this.innerHTML = 'Mute'
	}
	else {
		console.log('Mute');
		video.muted = true;
		this.innerHTML = 'Unmute'
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log('Volume is', video.volume)
	video.volume = this.volume;
	console.log('Volume is', video.volume)
	console.log(document.querySelector('#volume'))
	document.querySelector('#volum,')
});
