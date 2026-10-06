<?php
$host = 'localhost';
$user = 'root';
// Remember to enter the specific password you used earlier to fix your previous access denied error!
$password = ''; 
$dbname = 'alumni_network_pro';

$conn = new mysqli($host, $user, $password, $dbname, 3307);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>