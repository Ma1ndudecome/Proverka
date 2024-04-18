<?php

// Функция для отправки команды RCON
function sendRconCommand($host, $port, $password, $command) {
    // Создаем сокетное соединение
    $socket = fsockopen($host, $port, $errno, $errstr, 3);
    if (!$socket) {
        return false; // В случае ошибки соединения
    }

    // Авторизация в RCON
    fwrite($socket, pack('VV', 0, 3).$password.pack('a2', 0, 0));

    // Чтение данных из сокета
    fread($socket, 4096);

    // Отправка команды
    fwrite($socket, pack('VV', 0, 2).$command.pack('a2', 0, 0));

    // Получение ответа
    $response = fread($socket, 4096);

    fclose($socket);

    return $response;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверяем, что форма была отправлена
    if (!empty($_POST['Nick']) || !empty($_POST['Email'])) {
        $nickname = $_POST['Nick'];
        $email = $_POST['Email'];
        $promo = $_POST['Promo'];

        // Параметры RCON сервера Minecraft
       
$rconHost = '45.93.200.34'; // Адрес сервера RCON
$rconPort = 17576; // Порт сервера RCON
$rconPassword = 'bi580x1jSs'; // Пароль RCON

        // Формируем команду RCON (например, выдача доната)
        $command = 'kick' . $nickname . '123';

        // Отправляем команду RCON
        $response = sendRconCommand($rconHost, $rconPort, $rconPassword, $command);

        // Проверяем результат выполнения команды
        if ($response !== false) {
            echo 'Донат успешно выдан!';
        } else {
            echo 'Ошибка при отправке команды RCON';
        }
    } else {
        // Поля не заполнены, выдаем сообщение об ошибке
        echo 'Заполните все обязательные поля!';
    }
} else {
    // Обрабатываем случай, когда страница была запрошена напрямую, без отправки формы
    echo 'Ошибка: страница запрошена неправильно!';
}

?>
