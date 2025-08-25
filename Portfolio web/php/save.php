<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form ke values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // CSV file ka path
    $file = fopen("contact_data.csv", "a");

    // Row add karo (Excel me open hoga)
    fputcsv($file, [$name, $email, $message, date("Y-m-d H:i:s")]);

    fclose($file);

    echo "Thank you $name, your message has been saved!";
}
?>