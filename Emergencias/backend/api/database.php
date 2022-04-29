<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Max-Age: 3600");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With');

//PRODUCCION
define('DB_HOST', 'servidordebian'); 
define('DB_USER', 'emergencias');
define('DB_PASS', 'Emergencias123');
define('DB_NAME', 'Emergencias');


function connect(){
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);
 /* if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }*/
  
  mysqli_set_charset($connect, "utf8");

  return $connect;
}


$con = connect();
