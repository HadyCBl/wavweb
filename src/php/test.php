<?php
require '../../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'mail.wavdevelop.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'notifications@wavdevelop.com';
    $mail->Password = 'B.OCt[BI6@bR';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('notifications@wavdevelop.com', 'Test');
    $mail->addAddress('test@yourdomain.com'); // Replace with a test email
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email.';
    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo 'Error: ' . $mail->ErrorInfo;
}
?>