'use strict';

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


if(getBrowser() == "Chrome"){
	var constraints = {"audio": true, "video": {  "mandatory": {  "minWidth": 640,  "maxWidth": 640, "minHeight": 480,"maxHeight": 480 }, "optional": [] } };//Chrome
}else if(getBrowser() == "Firefox"){
	var constraints = {audio: true,video: {  width: { min: 640, ideal: 640, max: 640 },  height: { min: 480, ideal: 480, max: 480 }}}; //Firefox
}

var recBtn = document.querySelector('button#rec');
var pauseResBtn = document.querySelector('button#pauseRes');
var stopBtn = document.querySelector('button#stop');

var videoElement = document.getElementById("videowindow");
var dataElement = document.querySelector('#data');
var downloadLink = document.querySelector('a#downloadLink');

function errorCallback(error){
	console.log('navigator.getUserMedia error: ', error);	
}

var mediaRecorder;
var chunks = [];
var count = 0;

function startRecording(stream) {
	log('Start recording...');
	if (typeof MediaRecorder.isTypeSupported == 'function'){
		
		if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
		  var options = {mimeType: 'video/webm;codecs=h264'};
		} else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
		  var options = {mimeType: 'video/webm;codecs=vp9'};
		} else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
		  var options = {mimeType: 'video/webm;codecs=vp8'};
		}
		log('Using '+options.mimeType);
		mediaRecorder = new MediaRecorder(stream, options);
	}else{
		log('Using default codecs for browser');
		mediaRecorder = new MediaRecorder(stream);
	}

	pauseResBtn.textContent = "Pause";

	mediaRecorder.start(10);

	var url = window.URL || window.webkitURL;
	videoElement.src = url ? url.createObjectURL(stream) : stream;
	videoElement.play();

	mediaRecorder.ondataavailable = function(e) {
		//log('Data available...');
		//console.log(e.data);
		//console.log(e.data.type);
		//console.log(e);
		chunks.push(e.data);
	};

	mediaRecorder.onerror = function(e){
		log('Error: ' + e);
		console.log('Error: ', e);
	};


	mediaRecorder.onstart = function(){
		log('Started & state = ' + mediaRecorder.state);
	};

	mediaRecorder.onstop = function(){
		log('Stopped  & state = ' + mediaRecorder.state);

		var blob = new Blob(chunks, {type: "video/webm"});
		chunks = [];

		var videoURL = window.URL.createObjectURL(blob);

		downloadLink.href = videoURL;
		videoElement.src = videoURL;
		downloadLink.innerHTML = 'Download video file';

		var rand =  Math.floor((Math.random() * 10000000));
		var name  = "video_"+rand+".mp4" ;

		downloadLink.setAttribute( "download", name);
		downloadLink.setAttribute( "name", name);
	};

	mediaRecorder.onpause = function(){
		log('Paused & state = ' + mediaRecorder.state);
	}

	mediaRecorder.onresume = function(){
		log('Resumed  & state = ' + mediaRecorder.state);
	}

	mediaRecorder.onwarning = function(e){
		log('Warning: ' + e);
	};
}

//function handleSourceOpen(event) {
//  console.log('MediaSource opened');
//  sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp9"');
//  console.log('Source buffer: ', sourceBuffer);
//}

function onBtnRecordClicked (){
	 if (typeof MediaRecorder === 'undefined' || !navigator.getUserMedia) {
		alert('MediaRecorder not supported on your browser, use Firefox 30 or Chrome 49 instead.');
	}else {
		navigator.getUserMedia(constraints, startRecording, errorCallback);
		recBtn.disabled = true;
		pauseResBtn.disabled = false;
		stopBtn.disabled = false;
		document.getElementById("videoplayer").style.display = "none";
		document.getElementById("rec").style.display = "none";
	}
}

function onBtnStopClicked(){
	mediaRecorder.stop();
	videoElement.controls = true;

	recBtn.disabled = false;
	pauseResBtn.disabled = true;
	stopBtn.disabled = true;
	document.getElementById("videoplayer").style.display = "block";
	document.getElementById("rec").style.display = "inline";
	document.getElementById("download").style.display = "inline";
}

function onPauseResumeClicked(){
	if(pauseResBtn.textContent === "Pause"){
		console.log("pause");
		pauseResBtn.textContent = "Resume";
		mediaRecorder.pause();
		stopBtn.disabled = true;
		document.getElementById("stop").style.display = "none";
	}else{
		console.log("resume");
		pauseResBtn.textContent = "Pause";
		mediaRecorder.resume();
		stopBtn.disabled = false;
		document.getElementById("stop").style.display = "inline";
	}
	recBtn.disabled = true;
	pauseResBtn.disabled = false;
}


function log(message){
	dataElement.innerHTML = dataElement.innerHTML+'<br>'+message ;
}



//browser ID
function getBrowser(){
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	 browserName = "Opera";
	 fullVersion = nAgt.substring(verOffset+6);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1)
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	 browserName = "Microsoft Internet Explorer";
	 fullVersion = nAgt.substring(verOffset+5);
	}
	// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	 browserName = "Chrome";
	 fullVersion = nAgt.substring(verOffset+7);
	}
	// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	 browserName = "Safari";
	 fullVersion = nAgt.substring(verOffset+7);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1)
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	 browserName = "Firefox";
	 fullVersion = nAgt.substring(verOffset+8);
	}
	// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
		   (verOffset=nAgt.lastIndexOf('/')) )
	{
	 browserName = nAgt.substring(nameOffset,verOffset);
	 fullVersion = nAgt.substring(verOffset+1);
	 if (browserName.toLowerCase()==browserName.toUpperCase()) {
	  browserName = navigator.appName;
	 }
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix=fullVersion.indexOf(";"))!=-1)
	   fullVersion=fullVersion.substring(0,ix);
	if ((ix=fullVersion.indexOf(" "))!=-1)
	   fullVersion=fullVersion.substring(0,ix);

	majorVersion = parseInt(''+fullVersion,10);
	if (isNaN(majorVersion)) {
	 fullVersion  = ''+parseFloat(navigator.appVersion);
	 majorVersion = parseInt(navigator.appVersion,10);
	}


	return browserName;
}