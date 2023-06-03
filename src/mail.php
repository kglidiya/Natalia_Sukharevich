<?php

$to = "betysmith@yandex.ru";
  $subject = "Вам направлено сообщение с сайта Natalia_Sukharevich";
  $message = "Message, сообщение!";
  $headers = "Content-type: text/plain; charset=utf-8 \r\n";


if($_SERVER["REQUEST_METHOD"] == "POST"){

		if(isset($_POST["username"])){
			$name 		=trim(strip_tags($_POST["username"]));
		}
		if(isset($_POST["useremail"])){
			$email 	= trim(strip_tags($_POST["useremail"]));
		}
		if (isset( $_POST["message"])) {
	    	$messageContent 	= trim(strip_tags($_POST["message"]));
		}
		
			$message  = "Email отправителя: ".$email;
			$message  .= "\nИмя отправителя: ".$name;
			$message  .= "\nТекст сообщения: ".$messageContent;
		
			mail ($to, $subject, $message, $headers);
	
}
else
{

	exit;
} 

?> 