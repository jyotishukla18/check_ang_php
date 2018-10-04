<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"));
	print_r($data);
 	$con = mysqli_connect('localhost','root','root','angular_db');
 	$sql = "UPDATE user_details SET name = '$data->name' , mobile = '$data->mobile' , email = '$data->email' WHERE id = $data->id ";
    $result = mysqli_query($con,$sql);
?>