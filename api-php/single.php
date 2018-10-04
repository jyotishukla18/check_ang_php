<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	$id = isset($_GET['id']) ? $_GET['id'] : die("No id");
	$data = json_decode(file_get_contents("php://input"));
 	$con = mysqli_connect('localhost','root','root','angular_db');
 	$sql = "select * from user_details where id = $id ";
	$result = $con->query($sql);
    //$result = mysqli_query($con,$sql);

	// $sidemenus = array();
	// while ($sidemenu = mysqli_fetch_object($result)) {
    // $sidemenus[] = $sidemenu;
	
	// while ($row = mysqli_fetch_array ($result)) {
		// //$output[] = $row;
    // echo "<p>id: ".$row['user_id']."</p>";
    // echo "<p>name: ".$row['user_name']."</p>";
    // echo "<p>age: ".$row['user_age']."</p>";
// }

    // while ($row = fetch_assoc($result)) {
        // $output[] = $row;
    // }
    // echo json_encode($output);
	
	if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);



?>