<?php
include_once('./phpmailer/PHPMailerAutoload.php');

if (isset($_POST["action"]) && $_POST["action"] == 'send_form') {

	$to = "zhuraavl@gmail.com"; // eater.in.ua@gmail.com КУДА ОТПРАВЛЯЕМ ДАННЫЕ - eater.in.ua@gmail.com

	if (isset($_POST["subject"])) {
    
		$subject = $_POST["subject"];
		$username = ( isset($_POST["username"]) ? $_POST["username"] : ' — ' );
		$phone = ( isset($_POST["phone"]) ? $_POST["phone"] : ' — ' );
		$dom = ( isset($_POST["dom"]) ? $_POST["dom"] : ' — ' );
		$ulitsa =  ( isset($_POST["ulitsa"]) ? $_POST["ulitsa"] : ' — ' );
    $kvartira =  ( isset($_POST["kvartira"]) ? $_POST["kvartira"] : ' — ' );
    $comment =  ( isset($_POST["comment"]) ? $_POST["comment"] : ' — ' );
		$calories = ( isset($_POST["calories"]) ? $_POST["calories"] : ' — ' );
    $callme = ( isset($_POST["callme"]) ? $_POST["callme"] : ' — ' );
    $time = ( isset($_POST["time"]) ? $_POST["time"] : ' — ' );
    $startdate = ( isset($_POST["startdate"]) ? $_POST["startdate"] : ' — ' );
    $days = ( isset($_POST["days"]) ? $_POST["days"] : ' — ' );
   

	} else $subject = false;

	if ($subject != false) {
		$message = "<html><body><h2>".$subject."</h2>"
			."<br/>"."ФИО: ".$username
			."<br/>"."Телефон: ".$phone
			."<br/>"."Улица: ".$ulitsa
			."<br/>"."Дом: ".$dom
      ."<br/>"."Квартира: ".$kvartira
      ."<br/>"."Комментарий: ".$comment
			."<br/>"."Меню: ".$calories
			."<br/>"."Время: ".$time
			."<br/>"."Число: ".$startdate
			."<br/>"."Колличество дней: ".$days
			."<br/>"."Звонить? ".$callme
			."<br/>"."<hr><br/> Запрос отправлен: ".date("d M Y, H:i:s")
			."<br/>"."IP Отправителя: ".$_SERVER['REMOTE_ADDR']
			."<br/>"."</body></html>";
		if ($username != '' && $phone != '') $sendmail = true; else $sendmail = false;
	} else $sendmail = false;

	if ($sendmail == true) {
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->IsHTML(true);
		$mail->SMTPDebug = 0;
		$mail->SMTPAuth = 'login';
		$mail->SMTPSecure = 'ssl';
		$mail->Host = 'mail.eater.in.ua';
		$mail->Port = 465;
		$mail->Username = 'form@eater.in.ua'; // ЛОГИН
		$mail->Password = 'poggodda22'; // ПАРОЛЬ
		$mail->CharSet = "utf8";
		$mail->SetFrom('form@eater.in.ua', 'Eater Robot'); // ОТ КОГО
		$mail->Subject = ($subject);
		$mail->Body = $message;
		$mail->AddAddress($to); // КОМУ
		$mail->Send();

	} else {
		header($_SERVER['SERVER_PROTOCOL'] . ' 202 Accepted', true, 202);
	}
}
?>