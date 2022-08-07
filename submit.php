<?php
require_once("database.php");

$email_id = strip_tags(htmlspecialchars($_REQUEST['email']));

$res = array();

$sql = "Insert into entries (email_id) values ('".$email_id."')";

 if(mysqli_query($link, $sql)) {
    //
    $res['status'] = 'sucess';
    $res['status'] = 'Data Saved Sucessfully';

 }else {
     
     $res['status'] = 'failure';
     $res['status'] = 'Error white processing.';
 }
 echo json_encode($res);
 exit;
 ?>