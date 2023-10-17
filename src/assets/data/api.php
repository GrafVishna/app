<?php
// Дані підключення до бази даних
$hostname = "gc485015.mysql.tools"; // або IP-адреса сервера бази даних
$username = "gc485015_api";
$password = "X(6hpB3+3c";
$database = "gc485015_api";

// Підключення до бази даних
$conn = new mysqli($hostname, $username, $password, $database);

// Перевірка підключення
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Отримання параметра "table" з URL
$tableName = $_GET['table'] ?? '';

// Отримання параметра "column" з URL
$columnName = $_GET['column'] ?? '';

// Отримання параметра "oldValue" з URL
$oldValue = $_GET['oldValue'] ?? '';

// Отримання параметра "newValue" з URL
$newValue = $_GET['newValue'] ?? '';

// Встановлення заголовків CORS
header("Access-Control-Allow-Origin: *"); // Дозволити всім доменам
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (empty($tableName)) {
    // Якщо параметр "table" не був переданий, отримуємо всі таблиці з бази даних разом з їх вмістом
    $tablesQuery = "SHOW TABLES";
    $tablesResult = $conn->query($tablesQuery);

    if ($tablesResult) {
        $tables = $tablesResult->fetch_all(MYSQLI_ASSOC);

        $resultData = [];

        foreach ($tables as $table) {
            $tableName = $table['Tables_in_' . $database];
            $selectQuery = "SELECT * FROM $tableName";
            $selectResult = $conn->query($selectQuery);

            if ($selectResult) {
                $tableData = $selectResult->fetch_all(MYSQLI_ASSOC);
                $resultData[$tableName] = $tableData;
            } else {
                $resultData[$tableName] = ['error' => 'Failed to retrieve table data'];
            }
        }

        echo json_encode(['tables' => $resultData]);
    } else {
        echo json_encode(['error' => 'Failed to retrieve tables']);
    }
} else {
    if (!empty($columnName) && !empty($oldValue) && !empty($newValue)) {
        // Підготовлений запит з параметром "table", "column", "oldValue" та "newValue"
        $stmt = $conn->prepare("UPDATE $tableName SET $columnName = ? WHERE $columnName = ?");

        if ($stmt) {
            // Прив'язка параметрів та виконання запиту
            $stmt->bind_param("ss", $newValue, $oldValue);
            $stmt->execute();

            // Перевірка наявності помилок
            if ($stmt->error) {
                echo json_encode(['error' => 'Failed to update values']);
            } else {
                echo json_encode(['success' => 'Values updated successfully']);
            }

            // Закриття підготовленого запиту
            $stmt->close();
        } else {
            echo json_encode(['error' => 'Failed to prepare statement']);
        }
    } else {
        // Якщо не вказані параметри для оновлення, просто вивести дані
        $selectQuery = "SELECT * FROM $tableName";
        $selectResult = $conn->query($selectQuery);

        if ($selectResult) {
            $data = $selectResult->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data);
        } else {
            echo json_encode(['error' => 'Failed to retrieve data']);
        }
    }
}

// Закриття підключення
$conn->close();
?>
