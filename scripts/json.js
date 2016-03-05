// JavaScript Document for JSON request
function loadJSON()
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{

// Parse the JSON data structure contained in xmlhttp.responseText using the JSON.parse function.
var JSONObject = JSON.parse(xmlhttp.responseText);

// The JSONObject variable now contains the data structure and can be accessed as JSONObject.firstName and
// JSONObject.lastName. Assign the object members to the DOM elements FirstName and LastName so that they get
// displayed on the page
document.getElementById("content").innerHTML = JSONObject.content;
}
}
xmlhttp.open("GET","files/json.txt",true);
xmlhttp.send();
}