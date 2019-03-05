
<?php
ob_start();
echo 'Name: '.$_POST['name'].'<br>';
echo 'Email: '.$_POST['email'].'<br>';
echo 'Phone: '.$_POST['phone'].'<br>';
echo 'Message: '.$_POST['message'].'<br>';


$mails_content = ob_get_clean();
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'From: info@alisher.me' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail('alisher.musurmonov89@gmail.com', 'New request from Alisher.me'. $_post['name'], $mails_content, $headers);
 



ob_start();

echo 'Dear '.$_POST['name'].'<br>
<br>
Thank you for your interest to work with me.<br>
<br>
I have received your message and I will contact you shortly. You can call me at +998995558877 at any time.<br>
<br><br>
<br>
Sincerely,<br>
<br>
Alisher<br>
<br>';

$mail_content = ob_get_clean();
mail($_POST['email'], 'Thank you! We received your request', $mail_content, $headers);

?>
