<?php
header('Access-Control-Allow-Origin: *'); 
?>
<?php
	$con = mysqli_connect('localhost','root','root','angular_db');
	$sql = "select * from user_details";
	$result = mysqli_query($con,$sql);
	if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $output[] = $row;
    }
    echo json_encode($output);
}
?>