<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"));
	$_name = ($data->name);
	$_mobile = ($data->mobile);
	$_email = ($data->email);
 	$con = mysqli_connect('localhost','root','root','angular_db');
	if($_name){
 	$sql = "INSERT into user_details(name,mobile,email) VALUES ('$_name','$_mobile','$_email')";
    $result = mysqli_query($con,$sql);
	}
?>