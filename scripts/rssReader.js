/*
	COP 2831 Web Scripting and Ajax
	Assignment: Phase 3
	Author: Valery Samovich
    Date: 12/11/2012
    Filename: rssReader.js
*/
function showRSS(str){
  if (str.length==0){ 
    document.getElementById("rssOutput").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }else{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("rssOutput").innerHTML=xmlhttp.responseText;
  }
}

xmlhttp.open("GET","php/getrss.php?q="+str,true);

xmlhttp.send();
}