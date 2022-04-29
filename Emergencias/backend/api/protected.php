<?php

require_once(__DIR__ . "/../lib/php-jwt/vendor/autoload.php");
use \Firebase\JWT\JWT;

function protectedAuth(){
    return true;
    $secret_key = "MIICXAIBAAKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p";
    $data = json_decode(file_get_contents("php://input"));
    $jwt = null;
    //$token = mysqli_real_escape_string($con,trim($request->token));
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'];

    $arr = explode(" ", $authHeader);
    

    $jwt = $arr[1];

    if($jwt){
        try {
            $decoded = JWT::decode($jwt, $secret_key, array('HS256'));
            return true;       
        }catch (Exception $e){
            return false;
        }
    }else{
        return false;
    }
}
$protectedAuth = protectedAuth();
