function validar() {
  console.log("++++++++++++++validar+++++++++++++++");

  const mailRegistrado = "empresa@arcor.com";
  const passwordRegistrado = "123456";

  var infoMailInicioSesion = document.getElementById("mail").value;
  var infoPswInicioSesion = document.getElementById("psw").value;
  console.log(" Mail InicioSesion: " + infoMailInicioSesion);
  console.log("Password InicioSesion: " + infoPswInicioSesion);

  if (
    mailRegistrado == infoMailInicioSesion &&
    passwordRegistrado == infoPswInicioSesion
  ) {
    alert("Inicio de Sesion CORRECTO!");
    redireccionar();
  } else {
    alert("Inicio de Sesion INCORRECTO!");
  }
}

function redireccionar() {
  window.location.replace("../api.html");
}
