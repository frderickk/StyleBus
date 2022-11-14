registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("remail").value;
    const password= document.getElementById("rcontraseña").value;
    const rnombre= document.getElementById("rnombre").value;
    const rapellido= document.getElementById("rapellido").value;
    const rdomicilio= document.getElementById("rdomicilio").value;
    const rdni= document.getElementById("rdni").value;

    const expresionesNombres = {
          numeros: /[0-9]/,
          caracterEspecial: /[!-/:-@[-`{-■]/,
          vacio: /^$/
          }

    const expresionesApellidos = {
        numeros: /[0-9]/,
        caracterEspecial: /[ -/:-@[-`{-■]/,
        vacio: /^$/
    }
  
    const expresionesDNI = {
        letras: /[a-zA-Z]/,
        caracterEspecial: /[ -/:-@[-`{-■]/,
        vacio: /^$/
    }
  
    const expresionesDomicilios = {
        caracterEspecial: /[!-/:-@[-`{-■]/,
        vacio: /^$/
    }

    const expresionesEmail = {
        caracterEspecial: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9\-]+)((\.([a-zA-Z]){2,9}){0,2})$/ ,
        vacio: /^$/
    }

    const expresionesPassword = {
        caracterEspecial: /[!-/:-@[-`{-■]/,
        noTieneMayus: /[A-Z]/,
        vacio: /^$/
    }

    if (expresionesNombres.vacio.test(rnombre)){
        swal({
            title: "No se permite dejar vacío el nombre",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesNombres.numeros.test(rnombre)){
        swal({
            title: "No se permite utilizar caracteres numericos en el nombre",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesNombres.caracterEspecial.test(rnombre)){
        swal({
            title: "No se permite utilizar caracteres especiales en el nombre",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    else if (rnombre.length < 3 && rnombre.length > 0){
        swal({
            title: "El nombre es menor a lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rnombre.length > 20){
        swal({
            title: "El nombre es mayor a lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    /* -----------------apellido---------- */

    else if (expresionesApellidos.vacio.test(rapellido)){
        swal({
            title: "No se permite dejar vacío el apellido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rapellido.length > 20){
        swal({
            title: "El apellido es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rapellido.length < 3 && rapellido.length > 0){
        swal({
            title: "El apellido es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    else if (expresionesApellidos.caracterEspecial.test(rapellido)){
        swal({
            title: "No se permite utilizar caracteres especiales en el apellido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesApellidos.numeros.test(rapellido)){
        swal({
            title: "No se permite utilizar caracteres numericos en el apellido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    /* ----------------DNI---------- */
    
    else if (expresionesDNI.vacio.test(rdni)){
        swal({
            title: "No se permite dejar vacío el DNI",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rdni.length > 8){
        swal({
            title: "El DNI es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rdni.length < 7 && rdni.length > 0){
        swal({
            title: "El DNI es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    else if (expresionesDNI.letras.test(rdni) || expresionesDNI.caracterEspecial.test(rdni)){
        swal({
            title: "El DNI contiene caracteres no numéricos",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    /* ----------------domicilio---------- */

    else if (expresionesDomicilios.caracterEspecial.test(rdomicilio)){
        swal({
            title: "No se permite utilizar caracteres especiales en la dirección",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesDomicilios.vacio.test(rdomicilio)){
        swal({
            title: "No se permite dejar vacía la dirección",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rdomicilio.length < 5 && rdomicilio.length > 0){
        swal({
            title: "La dirección es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (rdomicilio.length > 40){
        swal({
            title: "La dirección es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    /* ---------------email---------- */

    
    else if (expresionesEmail.vacio.test(email)){
        swal({
            title: "No se permite dejar vacío el email",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 

    else if (!expresionesEmail.caracterEspecial.test(email)){
        swal({
            title: "No se permite utilizar caracteres especiales en el email",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    
     /* ------------password---------- */

     else if (expresionesPassword.vacio.test(password)){
        swal({
            title: "No se permite dejar vacía la contraseña",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    else if (!expresionesPassword.noTieneMayus.test(password)){
        swal({
            title: "La contraseña no contiene ninguna mayúscula",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (!expresionesPassword.caracterEspecial.test(password)){
        swal({
            title: "La contraseña no contiene caracteres especiales",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (password.length < 8 && password.length > 0){
        swal({
            title: "La contraseña es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 

         /* ------------validacion de todos los campos vacios---------- */

    else if (expresionesNombres.vacio.test(rnombre) && expresionesApellidos.vacio.test(rapellido) && expresionesDNI.vacio.test(rdni) && 
        expresionesDomicilios.vacio.test(rdomicilio) && expresionesEmail.vacio.test(email) && expresionesPassword.vacio.test(password)){
        swal({
            title: "Los campos no deben estar vacios",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else{

    swal({
        title: "Registrado con exito",
        text: "",
        icon: "success",
        button: "Aceptar"}).then(function() {
            window.location = "compra.html";
        });}
    
}


