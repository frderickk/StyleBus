loguearse=() =>{
    
    const lemail= document.getElementById("lemail").value;
    const lcontraseña= document.getElementById("lcontraseña").value;
   
    
   
    /* ---------------email---------- */

    const expresionesEmail = {
        caracterEspecial: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9\-]+)((\.([a-zA-Z]){2,9}){0,2})$/ ,
        vacio: /^$/
    }

    if (!expresionesEmail.caracterEspecial.test(lemail)){
        swal({
            title: "No se permite utilizar caracteres especiales en el email",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (expresionesEmail.vacio.test(lemail)){
        swal({
            title: "No se permite dejar vacío el email",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 

    
     /* ------------password---------- */

     const expresionesPassword = {
        caracterEspecial: /[!-/:-@[-`{-■]/,
        noTieneMayus: /[A-Z]/,
        vacio: /^$/
    }

    if (!expresionesPassword.noTieneMayus.test(lcontraseña)){
        swal({
            title: "La contraseña no contiene ninguna mayúscula",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (!expresionesPassword.caracterEspecial.test(lcontraseña)){
        swal({
            title: "La contraseña no contiene caracteres especiales",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (expresionesPassword.vacio.test(lcontraseña)){
        swal({
            title: "No se permite dejar vacía la contraseña",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (lcontraseña.length < 8 && lcontraseña.length > 0){
        swal({
            title: "La contraseña es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 

         /* ------------validacion de todos los campos vacios---------- */

    if (expresionesEmail.vacio.test(lemail) && expresionesPassword.vacio.test(lcontraseña)){
        swal({
            title: "Los campos no deben estar vacios",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 

}