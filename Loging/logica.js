function captura(){
    var email=document.getElementById("correo").value;
    var pass=document.getElementById("contraseña").value;
    if(email==""){
    alert("El correo es obligatorio");
    document.getElementById("contraseña").focus();
 }else {if(pass==""){
     alert("La contraseña es oblgatorio");
     document.getElementById("contraseña").focus();
 }else{
    console.log("Contraseña:   "+pass+"  Correo:   "+email);
    document.getElementById("correo").value="";
    document.getElementById("contraseña").value="";
    document.getElementById("correo").focus();
 }
  }
    
}