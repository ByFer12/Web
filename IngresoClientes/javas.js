function captura(){
    var nombre=document.getElementById("name").value;
    var apellido=document.getElementById("apellido").value;
    var cui=document.getElementById("num").value;
    var depa=document.getElementById("depa").value;
    if(nombre==""){
    alert("El nombre es obligatorio");
    document.getElementById("name").focus();
 }else if(apellido==""){
     alert("El apellido es oblgatorio");
     document.getElementById("apellido").focus();
 }else if(cui==""){
    alert("El CUI es oblgatorio");
    document.getElementById("num").focus();
}else if(depa==""){
    alert("El departamento es oblgatorio");
    document.getElementById("depa").focus();
}else {
    console.log("Nombre:   "+nombre+"  Apellido:   "+apellido+"   CUI:    "+cui+"    Departamento:    "+depa);
    document.getElementById("name").value="";
    document.getElementById("apellido").value="";
    document.getElementById("num").value="";
    document.getElementById("depa").value="";
    document.getElementById("name").focus();
}
   
 }
  
    
 