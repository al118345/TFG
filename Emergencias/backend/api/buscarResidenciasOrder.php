<?php


require 'database.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
  



$residencias = [];
$sql = "SELECT * FROM Residencia ORDER BY Denominacion;";
date_default_timezone_set('Europe/Madrid');
$fecha = date("Y-m-d H:i:s");
if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    //if($row['fec_fin'] == null || $fecha <  date("Y-m-d",strtotime($row['fec_fin']."+5 days"))){ // 1mes de permiso para ver la denuncia una vez finalizada
      $residencias[$i]['Denominacion']             = $row['Denominacion'];
      $residencias[$i]['ID']                       = $row['ID'];
      $residencias[$i]['Direccion']                = $row['Direccion'];
      $residencias[$i]['CP']                       = $row['CP'];
      $residencias[$i]['Municipio']                = $row['Municipio'];
      $residencias[$i]['Telefono']                 = $row['Telefono'];
      $residencias[$i]['Plazas']                   = $row['Plazas'];
      $residencias[$i]['Titularidad']              = $row['Titularidad'];
      $residencias[$i]['URL']                      = $row['URL'];
      $residencias[$i]['Latitud']                  = $row['Latitud'];
      $residencias[$i]['Longitud']                 = $row['Longitud'];
      $residencias[$i]['UltActData']               = $row['UltActData'];
  
      $i++;
    //}
    
  }

  echo json_encode($residencias);
}
else
{
  http_response_code(404);
}

