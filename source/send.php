<?php
$fio = $_POST['name'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("brain-w8@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$tel ,"From: info@artgarden33.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
