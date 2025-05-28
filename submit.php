<?php
header('Content-Type: application/json');
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $name = isset($input['name']) ? trim($input['name']) : '';
    $email = isset($input['email']) ? trim($input['email']) : '';
    $message = isset($input['message']) ? trim($input['message']) : '';

    // Validation
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Todos los campos son obligatorios']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Formato de correo inválido']);
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        // SMTP server configuration
        $mail->SMTPDebug = 2; // Enable debugging for error diagnosis
        $mail->isSMTP();
        $mail->Host = 'mail.wavdevelop.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'notifications@wavdevelop.com';
        $mail->Password = 'B.OCt[BI6@bR'; // Ensure this is the correct cPanel password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for port 465
        $mail->Port = 465;

        // Configure sender
        $mail->setFrom('notifications@wavdevelop.com', 'Formulario de Contacto');

        // Array of recipient emails for easy future additions
        $recipients = [
            'harvey@wavdevelop.com',
            'ventas@wavdevelop.com'
            // Add more emails here in the future, e.g., 'newemail@wavdevelop.com'
        ];

        // Add recipients by mapping through the array
        foreach ($recipients as $recipient) {
            $mail->addAddress($recipient);
        }

        // Email content
        $mail->isHTML(true); // Changed to HTML for better formatting
        $mail->Subject = 'Nuevo Mensaje de Contacto - WavDevelop';
        $mail->Body = '
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
                    .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #e0e0e0; }
                    .header h1 { margin: 0; color: #0ea5e9; }
                    .content { padding: 20px 0; }
                    .field { margin-bottom: 20px; }
                    .field-label { font-weight: bold; color: #0284c7; }
                    .field-value { margin: 5px 0; padding: 10px; background: #f9fafb; border-radius: 4px; }
                    .footer { text-align: center; font-size: 0.9em; color: #666; padding-top: 20px; border-top: 1px solid #e0e0e0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>WavDevelop - Nuevo Mensaje de Contacto</h1>
                        <p>Recibido el ' . date('Y-m-d H:i:s') . '</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Nombre del Remitente:</div>
                            <div class="field-value">' . htmlspecialchars($name) . '</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Correo Electrónico:</div>
                            <div class="field-value">' . htmlspecialchars($email) . '</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Mensaje:</div>
                            <div class="field-value">' . nl2br(htmlspecialchars($message)) . '</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Este mensaje fue enviado desde el formulario de contacto de WavDevelop.</p>
                        <p>Por favor, no responda directamente a este correo. Para contactar al remitente, use el correo proporcionado.</p>
                    </div>
                </div>
            </body>
            </html>';

        // Plain text alternative for non-HTML email clients
        $mail->AltBody = "WavDevelop - Nuevo Mensaje de Contacto\n\n" .
                         "Recibido el: " . date('Y-m-d H:i:s') . "\n\n" .
                         "Nombre: $name\n" .
                         "Correo: $email\n" .
                         "Mensaje: $message\n\n" .
                         "Este mensaje fue enviado desde el formulario de contacto de WavDevelop.";

        // Send email
        $mail->send();
        echo json_encode(['message' => 'Mensaje enviado con éxito']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
        exit;
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}
?>
