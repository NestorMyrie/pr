<?php

$destino ="nestormyriee@gmail.com";
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellido"];
$celular = $_POST["celular"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre :". $nombre . "\nApellido" "\nCorreo :" . $correo . "\nCelular :" .$celular ."\nMensaje :" $mensaje  ;

mail($destino,"Contacto :Nestor.site", $contenido)
header("location:enviado.html")
?>