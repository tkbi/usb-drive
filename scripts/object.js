/*
	Project: USBdrive
	Author: Valery Samovich
    Date: 12/11/2012
    Filename: object.js
*/

// Syntax for creating an XMLHttpRequest object
function loadXMLDoc(){
	var xmlhttp;  
	if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}else{ // old versions of Internet Explorer (IE5 and IE6) uses an ActiveX Object:
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
  			// responseText or responseXML property of the XMLHttpRequest object to get the response from the server
    		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	// The open() and send() methods of the XMLHttpRequest object send a Request to a server
	// .open() method specifies the type of request, the URL, and asynchronously or not
	
	// request txt file asynchronously
	xmlhttp.open("GET","files/ajax.txt",true);
	
	// ASP example: xmlhttp.open("GET",".asp?q="+str,true);
	
	// PHP example: xmlhttp.open("GET","gethint.php?q="+str,true);
	
	// Java Servlets example: xmlhttp.open("GET", "text.do", true);
	
	// .send() method sends the request off to the server.
	xmlhttp.send();
}

