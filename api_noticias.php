<?php
require_once __DIR__ . '/vendor/autoload.php'; // Asegúrate de que apunta al vendor correcto

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Verifica que el token existe
if (!isset($_ENV['API_NEWS_TOKEN'])) {
    http_response_code(500);
    echo json_encode(["error" => "Token no definido"]);
    exit;
}

$token = $_ENV['API_NEWS_TOKEN'];

$url = "https://api.thenewsapi.com/v1/news/all?locale=mx&language=es&categories=tech&api_token=$token";

$response = @file_get_contents($url);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "No se pudo obtener la información de la API"]);
    exit;
}

$data = json_decode($response, true);
echo json_encode($data['data'] ?? []);
?>
