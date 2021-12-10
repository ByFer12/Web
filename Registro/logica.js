function captura(){
    var nombre=document.getElementById("name").value;
    var edad=document.getElementById("num").value;
    var sexo=document.getElementById("Sexo").value;
    if(nombre==""){
    alert("El correo es obligatorio");
    document.getElementById("contraseña").focus();
 }else {
     if(edad==""){
     alert("La contraseña es oblgatorio");
     document.getElementById("correo").focus();
 }else{
    console.log("Nombre:   "+nombre+"  Edad:   "+edad+"   Sexo:    "+sexo);
    document.getElementById("name").value="";
    document.getElementById("num").value="";
    document.getElementById("Sexo").focus();
 }
  }
    
}