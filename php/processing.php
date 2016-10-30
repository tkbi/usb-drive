<?php

$to = 'valery29@live.seminolestate.edu';

if ($_POST) {
    $subject = $_POST['name'];
    $sender = $_POST['email'];
    $message = $_POST['message'];

    // Disallow the usage of %0A and %0D chars inside
    // the "subject" or "sender" fields to prevent
    // headers injection.
    if (strpbrk($subject, "\r\n") !== false || strstr($sender, "\r\n") !== false) {
        die('A disallowed char was found.');
    }

    if ($subject != '' && $sender != '' && $message != '') {
        mail($to, $subject, $sender, $message);
        echo 'Thank You for Contacting Acme Widget Corporation!';
    } else {
        echo 'Please fill in all fields and submit again!';
    }
}
