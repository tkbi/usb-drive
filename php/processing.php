<?php
if($_POST){  
  
	$name = $_POST['name']; //gets the entered name  
	$email = $_POST['email']; //gets the entered email address  
	$message = $_POST['message']; //gets the entered message   
  
	$to = "valery29@live.seminolestate.edu"; //email address  

	//validating the fields if any empty  
	if($name != "" && $email != ""  && $message != ""){  
		mail($to,$name,$email,$message); //calling php mail function
		echo "Thank You for Contact Acme Widget Corporation!";  
	} else {  
	echo "Please fill in all fields and submit again!";  
	}  
}
?>