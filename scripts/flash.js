/*
		Project: USBdrive 
		Author: Valery Samovich
    	Date: 12/11/2012
    	Filename: flash.js
*/

// Performance functions
function writeText1(){
	var d = document.getElementById("mydiv1");
	d.className = "squareImgOver1";
	d.innerHTML = "<br />Performance<hr />Kingston USB Flash Drive<br />Data Traveler 300<br />256GB";
}
	
function eraseText1(){
	var d = document.getElementById("mydiv1");
	d.className = "squareImg1";
	d.innerHTML = "";
}

//Design functions
function writeText2(){
	var d = document.getElementById("mydiv2");
	d.className = "squareImgOver2";
	d.innerHTML = "<br />Design<hr />SanDisk USB Flash Drive<br />Extreme Ducati<br />16GB";
}
	
function eraseText2(){
	var d = document.getElementById("mydiv2");
	d.className = "squareImg2";
	d.innerHTML = "";
}

// Concept functions
function writeText3(){
	var d = document.getElementById("mydiv3");
	d.className = "squareImgOver3";
	d.innerHTML = "<br />Concept<hr />Concept USB Flash Drive<br />Micro SD Collector<br />Size: N/A";
}
	
function eraseText3(){
	var d = document.getElementById("mydiv3");
	d.className = "squareImg3";
	d.innerHTML = "";
}


