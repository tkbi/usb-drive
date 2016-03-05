/*
	Project: USBdrive
	Author: Valery Samovich
    Date: 12/11/2012
    Filename: map.js		
*/
var map = null;
var geocoder = null;
var xmlhttp = null;
if (window.XMLHttpRequest) {
xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
function load(e)
{
if (GBrowserIsCompatible())
{
map = new GMap2(document.getElementById("map"));
geocoder = new GClientGeocoder();
placeMarkers(document.getElementById("address").value, e);
geocoder.getLatLng("Paris", function(point){map.setCenter(point, 13)});
}
}
function placeInXmlFile(point)
{
var xml = null;
if (window.ActiveXObject)
{
xml = new ActiveXObject("Microsoft.XMLDOM");
xml.async = false;
xml.load("data.xml");
}
else
{
xml = document.implementation.createDocument("","", null);
xml.async = false;
xml.load("data.xml");
}
var newmarker = xml.getElementsByTagName("markers")[0];
newtag = xml.createElement("marker");
newmarker.appendChild(newtag);
newtag.setAttribute("lat", point.y);
newtag.setAttribute("lng", point.x);
newtag.setAttribute("address", address.value);
xmlhttp.abort();
var xmlToSave = xml.xml || (new XMLSerializer().serializeToString(xml))
var xmlcode = encodeURIComponent(xmlToSave);
var url = "Save.aspx?xml=" + xmlcode;
xmlhttp.open("GET", url, true);
xmlhttp.setRequestHeader("Content-Type", "text/xml" );
xmlhttp.send(null);
}
function placeMarkers(address, e)
{
if (e == "true")
{
geocoder.getLatLng(address, function(point) {
if (!point) {
alert(address + " not found");
} else {
map.setCenter(point, 13);
var marker = new GMarker(point);
map.addOverlay(marker);
marker.openInfoWindowHtml(address);
placeInXmlFile(point, address);
}
});
}
GDownloadUrl("data.xml", function(data, responseCode) {
var xml = GXml.parse(data);
var markers = xml.documentElement.getElementsByTagName("marker");
for (var i = 0; i < markers.length; i++) {
point2 = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
parseFloat(markers[i].getAttribute("lng")));
map.setCenter(point2, 13);
marker2 = new GMarker(point2);
map.addOverlay(marker2);
marker2.openInfoWindowHtml(markers[i].getAttribute("address"));
}
});
}