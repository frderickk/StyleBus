registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("remail").value;
    const password= document.getElementById("rcontraseña").value;
    const rnombre= document.getElementById("rnombre").value;
    const rapellido= document.getElementById("rapellido").value;
    const rdomicilio= document.getElementById("rdomicilio").value;
    const rdni= document.getElementById("rdni").value;

    const expresionesNombres = {
          rnombre1: /[0-9]/ ,
          rnombre2: /^$ /
          }

    if (expresionesNombres.rnombre1.test(rnombre)){
        swal({
            title: "Nombre contiene numero",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (expresionesNombres.rnombre2.test(rnombre)){
        swal({
            title: "Nombre esta vacio",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }



}

