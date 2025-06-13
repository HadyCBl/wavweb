<?php
// Start output buffering to catch any errors
ob_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://wavdevelop.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

require '../../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    ob_end_flush();
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos los campos son obligatorios']);
    ob_end_flush();
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Formato de correo inválido']);
    ob_end_flush();
    exit;
}

$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 0; 
    $mail->isSMTP();
    $mail->Host = 'mail.wavdevelop.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'notifications@wavdevelop.com';
    $mail->Password = 'B.OCt[BI6@bR';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('notifications@wavdevelop.com', 'Formulario de Contacto');
    $mail->addAddress('harvey@wavdevelop.com'); 
    $mail->addAddress('ventas@wavdevelop.com'); // Add more 

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo Mensaje de Contacto - WavDevelop';
    $mail->Body = "
        <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    color: #333;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #0ea5e9;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    border-bottom: 2px solid #0d8ac8;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    padding: 30px;
                }
                .details {
                    margin-bottom: 20px;
                }
                .details p {
                    margin: 10px 0;
                    line-height: 1.6;
                }
                .details strong {
                    color: #0ea5e9;
                    font-weight: 600;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #f1f1f1;
                    color: #666;
                    font-size: 12px;
                }
                @media only screen and (max-width: 600px) {
                    .container {
                        width: 100% !important;
                        margin: 0;
                        border-radius: 0;
                    }
                    .content {
                        padding: 15px;
                    }
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Nuevo Mensaje de Contacto</h1>
                </div>
                <div class='content'>
                    <div class='details'>
                        <p><strong>Nombre:</strong> " . htmlspecialchars($name) . "</p>
                        <p><strong>Correo:</strong> " . htmlspecialchars($email) . "</p>
                        <p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
                        <p><strong>Enviado el:</strong> " . date('Y-m-d H:i:s') . "</p>
                    </div>
                </div>
                <div class='footer'>
                    <p>Este mensaje fue enviado desde el formulario de contacto de WavDevelop.</p>
                    <p>Por favor, no responda directamente a este correo. Contacte al remitente usando el correo proporcionado.</p>
                </div>
            </div>
        </body>
        </html>";

    $mail->AltBody = "Nuevo Mensaje de Contacto\n\n" .
                     "Nombre: $name\n" .
                     "Correo: $email\n" .
                     "Mensaje: $message\n" .
                     "Enviado el: " . date('Y-m-d H:i:s');

    $mail->send();
    echo json_encode(['message' => 'Mensaje enviado con éxito']);
} catch (Exception $e) {
    error_log('PHPMailer Error: ' . $mail->ErrorInfo, 3, 'logs/email_errors.log');
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
} finally {
    ob_end_flush();
}
?>