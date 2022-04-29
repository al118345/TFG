<?php
  
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        
    $folderPath = "upload/";

    $file_tmp = $_FILES['file']['tmp_name'];
    $file_ext = strtolower(end(explode('.',$_FILES['file']['name'])));
    $file = $folderPath . uniqid() . '.'.$file_ext;
    //move_uploaded_file($file_tmp, $file);
  
    $name = uniqid() . '.'.$file_ext;;
    $filename = $file_tmp;


    require 'conf.php'; 

    $destination_file = DESTINATION_FILE."assets/avatar/"; //where you want to throw the file on the webserver (relative to your login dir)
    $conn_id = $con_ftp;        // set up basic connection
    $login_result = $log_ftp;   // login with username and password, or give invalid user message
    
if ((!$conn_id) || (!$login_result)) {  // check connection
    // wont ever hit this, b/c of the die call on ftp_login
    ftp_close($conn_id); // close the FTP stream 
    return http_response_code(422);
} 


$upload = ftp_put($conn_id, $destination_file.$name, $filename, FTP_BINARY);  // upload the file
if (!$upload) {  // check upload status
    ftp_close($conn_id); // close the FTP stream 

    return http_response_code(422);
} else {
    //require 'database.php';
    $id_user    = $_POST["id_user"];
    $foto = $server."assets/avatar/".$name;
    date_default_timezone_set('Europe/Madrid');
    $fecha = date("Y-m-d H:i:s");
    
    $sql = "UPDATE QSC_USUARIOS SET foto='$foto', fec_ult_actualizac = '$fecha', id_usuario = '$id_user' WHERE id_user = '$id_user'";

  if(mysqli_query($con, $sql))
  {
   // http_response_code(204);
    echo json_encode($name);
    

  }
  else
  {
    return http_response_code(422);
  }
}
ftp_close($conn_id); // close the FTP stream 

?>