<?php
include_once('./phpmailer/PHPMailerAutoload.php');

if (isset($_POST["action"]) && $_POST["action"] == 'send_form') {

	$to = "eater.in.ua@gmail.com"; // КУДА ОТПРАВЛЯЕМ ДАННЫЕ 

	if (isset($_POST["subject"])) {
		$subject = $_POST["subject"];

		$username = ( isset($_POST["username"]) ? $_POST["username"] : ' — ' );
		$phone = ( isset($_POST["phone"]) ? $_POST["phone"] : ' — ' );
		$address = ( isset($_POST["address"]) ? $_POST["address"] : ' — ' );
		$time =  ( isset($_POST["time"]) ? $_POST["time"] : ' — ' );//  date("d M Y, H:i:s");
        $days =  ( isset($_POST["days"]) ? $_POST["days"] : ' — ' );
        $person =  ( isset($_POST["person"]) ? $_POST["person"] : ' — ' );
		$calories = ( isset($_POST["calories"]) ? $_POST["calories"] : ' — ' );
        $howmenu = ( isset($_POST["howmenu"]) ? $_POST["howmenu"] : ' — ' );
        $comment = ( isset($_POST["comment"]) ? $_POST["comment"] : ' — ' );
        $callme = ( isset($_POST["callme"]) ? $_POST["callme"] : ' — ' );
		$ves = ( isset($_POST["ves"]) ? $_POST["ves"] : ' — ' );
		$rost = ( isset($_POST["rost"]) ? $_POST["rost"] : ' — ' );
		$vozrast = ( isset($_POST["vozrast"]) ? $_POST["vozrast"] : ' — ' );
		$alergiya = ( isset($_POST["alergiya"]) ? $_POST["alergiya"] : ' — ' );
		$activity = ( isset($_POST["activity"]) ? $_POST["activity"] : ' — ' );
		$goal = ( isset($_POST["goal"]) ? $_POST["goal"] : ' — ' );

	} else $subject = false;

	if ($subject != false) {
		$message = "<html><body><h2>".$subject."</h2>"
			."<br/>"."ФИО: ".$username
			."<br/>"."Телефон: ".$phone
			."<br/>"."Адрес: ".$address
			."<br/>"."Время: ".$time
			."<br/>"."Дней: ".$days
			."<br/>"."Приборов: ".$person
			."<br/>"."Меню: ".$calories
			."<br/>"."С мясом/без: ".$howmenu
			."<br/>"."Комментарий: ".$comment
			."<br/>"."Звонить? ".$callme
			."<br/>"."<hr>"."Вес: ".$ves
			."<br/>"."Рост: ".$rost
			."<br/>"."Возраст: ".$vozrast
			."<br/>"."Аллергии: ".$alergiya
			."<br/>"."<hr>"."Активность: ".$activity
			."<br/>"."Цель: ".$goal
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