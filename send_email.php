<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $body = $_POST["body"];

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && strpos($email, '@gmail.com') !== false) {
        $to = "youremail@gmail.com";
        $headers = "From: $email";
        $message = "Subject: $subject\n\n$body";

        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        echo "Invalid email address. Please provide a valid Gmail address.";
    }
} else {
    echo "Invalid request.";
}
?>
