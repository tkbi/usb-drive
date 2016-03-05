<?php
$doc = new DomDocument('1.0');
$qs = $_GET["xml"];
$doc->loadXML($qs);
$doc->save('data.xml');
?>
