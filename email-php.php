<?php
if($_POST){
  $email = 'chibuzor.nwankwo@ymail.com';
  $message = json_decode($_POST['message']);
  $copy = $_POST['copy'];
  $subject = $_POST['subject'];
  
	// ini_set('SMTP', "yahoo.com");
	// ini_set('smtp_port', "25");
	// ini_set('sendmail_from', "chibuzornwankwo@ymail.com");
	// ini_set('password', "Jesus'babe");
	// ini_set('username', "chibuzornwankwo@ymail.com");
	
	//send to vendor
	
	$to = $copy;
	
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	// More headers
	$headers .= 'From: <donotreply@impacttcl.com>' . "\r\n";
	
	if (mail($to,$subject,$message,$headers))
	{
		//send to user	
		
		$to = "info@impacttcl.com";
		$subject = "New ". $subject;
		$headers .= 'Cc: chibuzornwankwo@ymail.com' . "\r\n";
		echo (mail($to,$subject,$message,$headers) ? 'true' : 'false');
	
	}	
	else{
		echo 'false';
	}
	
}

?>