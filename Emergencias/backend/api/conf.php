<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Max-Age: 3600");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With');



require 'database.php';




define('FTP_SERVER', 'emergencias.dynamic-dns.net');
define('FTP_USER_NAME', 'acabanas');
define('FTP_USER_PASS', 'Malaga123');

define('SMTPAUTOTLS', 'false');
define('CHARSET', 'UTF-8');


function connect_ftp(){
  $conn_id = ftp_connect(FTP_SERVER);        // set up basic connection 
  return $conn_id;
}

function login_ftp($con_ftp){
  $login_result = ftp_login($con_ftp, FTP_USER_NAME, FTP_USER_PASS); 
  return $login_result;
}  

/*
$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'destination_file';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('DESTINATION_FILE', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  

$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'dominio';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('SERVER', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'srv_mail';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('SERVER_MAIL', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'puerto';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('PUERTO_MAIL', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'usr_mail';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('USER_MAIL', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'correoRemitente';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('REMITENTE', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'nremitente';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('NREMITENTE', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 



$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'auth_mail';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        if ($valor == "1"){
          define('SMTPAUTH', 'true');
        }else{
          define('SMTPAUTH', 'false');
        }
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 



$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'ssl';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        if ($valor == "1"){
          define('SMTPSECURE', 'ssl');
        }else{
          define('SMTPSECURE', null);
        }
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'calusulas';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        if ($valor == "1"){
          define('CLAUSULAS_CORREO', 'true');
        }else{
          define('CLAUSULAS_CORREO', 'false');
        }        
      }else{
        echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'conflicto';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('CONFLICTO', $valor);
      }else{
        echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
} 


$valor = "";
$param = "";
$sql = "SELECT id_clausula, clausula FROM QSC_CLAUSULAS";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['clausula'];
      $param = $row['id_clausula'];
      //if($param == "PRIMERA"){
          define(strtoupper($param), $valor);
      //}
  }
}else{
  return http_response_code(404);
} 



$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'pass_mail';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('PASS_MAIL',$valor);
       // define('PASS_MAIL', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


$valor = "";
$sql = "SELECT valor FROM QSC_PARAM_GLOB WHERE id_parametro = 'dias_visible';";

if($result = mysqli_query($con,$sql)){
  while($row = mysqli_fetch_assoc($result)){
      $valor = $row['valor'];
      if($valor != ""){
        define('DIAS_VISIBLE',$valor);
       // define('PASS_MAIL', $valor);
      }else{
          echo http_response_code(422);
      }
  }
}else{
  return http_response_code(404);
}  


/*
define('SERVER', 'https://desarrollo.buzondenuncia.es/');
define('SERVER_MAIL', 'mail.canaldenuncia.app');         
define('PUERTO_MAIL', '465');                                                                 
define('USER_MAIL', 'canaldenuncia@canaldenuncia.app'); 

define('SMTPAUTH', 'true');  
define('SMTPSECURE', 'ssl');                
define('PASS_MAIL', 'G?t]3(Vs{?O4');*/                


$server = SERVER;

$destination_file = DESTINATION_FILE;
/*
$server_mail = SERVER_MAIL;
$puerto_mail = PUERTO_MAIL;
$smtpauth = SMTPAUTH;
$user_mail = USER_MAIL;
$pass_mail = PASS_MAIL;
$smtpsecure = SMTPSECURE;
$smtpautotls = SMTPAUTOTLS;
$charset = CHARSET;

$remitente = REMITENTE;
$nremitente = NREMITENTE;

$clausulas_PHP = CLAUSULAS_CORREO;
$conflicto = CONFLICTO;
$dias_visible = DIAS_VISIBLE;

$clausula1 = PRIMERA;
$clausula2 = SEGUNDA;
$clausula3 = TERCERA;
$clausula4 = CUARTA;
$clausula5 = QUINTA;
$clausula6 = SEXTA;
$clausula7 = SEPTIMA;
$clausula8 = OCTAVA;
$clausula81 = OCTAVA_1;
$clausula82 = OCTAVA_2;
$clausula83 = OCTAVA_3;
$clausula84 = OCTAVA_4;
$clausula9 = NOVENA;
$clausula10 = DECIMA;
$clausula11 = DECIMOPRIMERA;
$clausula12 = DECIMOSEGUNDA;
$clausula13 = DECIMOTERCERA;
$clausula14 = DECIMOCUARTA;
*/
$con_ftp = connect_ftp();
$log_ftp = login_ftp($con_ftp);  


