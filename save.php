<?php

// XXX: This file is probably a bad idea, since anybody
//      can call it directly and change the content of
//      the website. Another way should be found.

// Disallow the usage of external entities, in order to
// avoid XXE vulnerabilities.
libxml_disable_entity_loader(true);

$doc = new DomDocument('1.0');
$doc->loadXML($_GET['xml']);
$doc->save('data.xml');
