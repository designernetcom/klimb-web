<?php
$error = "";

if (!isset($_POST['name']) || empty(trim($_POST['name']))) {
    $error .= "\nName is required";
} else {
    if (!preg_match('/^[a-zA-Z\s]*$/', $_POST['name'])) {  // Removed unnecessary backslash
        $error .= "\nEnter valid Name";
    }
}

if (!isset($_POST['email']) || empty(trim($_POST['email']))) {
    $error .= "\nEmail Id is required";
} else {
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $error .= "\nEnter valid Email Id";
    }
}

if (!isset($_POST['message']) || empty(trim($_POST['message']))) {
    $error .= "\nMessage is required";
}

if (empty($error)) {
    try {
        require 'PHPMailer/src/Exception.php';
        require 'PHPMailer/src/PHPMailer.php';
        require 'PHPMailer/src/SMTP.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
 $mail->Username   = 'netcomenquiry@gmail.com'; 
  $mail->Password   = 'nxhcgknjdzgthqpa';  
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Email content
        $message_body = "<html><body><table border='5px'>";
        $message_body .= "<tr><td colspan='2' style='color: #C50B33; font-size: 20px;'><b>Request For Contact Form</b></td></tr>";
        $message_body .= "<tr><td>Contact's Full Name:</td><td>" . htmlspecialchars($_POST['name']) . "</td></tr>";
        $message_body .= "<tr><td>Contact's Email:</td><td>" . htmlspecialchars($_POST['email']) . "</td></tr>";
        $message_body .= "<tr><td>Contact's Number:</td><td>" . (isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : 'Not provided') . "</td></tr>";
        $message_body .= "<tr><td>Contact's Message:</td><td>" . htmlspecialchars($_POST['message']) . "</td></tr>";
        $message_body .= "</table></body></html>";

        $mail->setFrom('info@klimbint.com', 'Klimb Builtech Solutions');
        $mail->addAddress('ramitsr7@gmail.com');
        $mail->addAddress('kraina303@gmail.com');
        
        $mail->Subject = 'Klimb Builtech Solutions Pvt. Ltd.';
        $mail->isHTML(true);
        $mail->Body = $message_body;

        if ($mail->send()) {
            // Send confirmation email to user
            $mail->ClearAllRecipients();
            $mail->addAddress($_POST['email']);
            $mail->Subject = 'Klimb Builtech Solutions Pvt. Ltd.';
            $mail->Body = "Thank You....We Will Get Back To You Soon.";
            
            $mail->send();
            echo "sent";
        } else {
            echo "Sorry, an error occurred while sending your Mail. Please try again.";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo $error;
}
?>