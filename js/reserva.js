continuar=() =>{

    const emailRes= document.getElementById("res-email").value;
    const nombreRes= document.getElementById("res-nombre").value;
    const apellidoRes= document.getElementById("res-apellido").value;
    const domicilioRes= document.getElementById("res-domicilio").value;
    const dniRes= document.getElementById("res-dni").value;

    const expresionesNombres = {
          numeros: /[0-9]/,
          caracterEspecial: /[!-/:-@[-`{-■]/,
          vacio: /^$/
          }
          const expresionesApellidos = {
            numeros: /[0-9]/,
            caracterEspecial: /[!-/:-@[-`{-■]/,
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

    /* ------------validacion de todos los campos vacios---------- */

    if (expresionesNombres.vacio.test(nombreRes) && expresionesApellidos.vacio.test(apellidoRes) && expresionesDNI.vacio.test(dniRes) && 
        expresionesDomicilios.vacio.test(domicilioRes) && expresionesEmail.vacio.test(emailRes)){
        swal({
            title: "Los campos no deben estar vacios",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    } 
        else if (expresionesNombres.numeros.test(nombreRes)){
            swal({
                title: "No se permite utilizar caracteres numericos en el nombre",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              }); 
        }
    
        else if (expresionesNombres.caracterEspecial.test(nombreRes)){
            swal({
                title: "No se permite utilizar caracteres especiales en el nombre",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              }); 
        }
    
        else if (expresionesNombres.vacio.test(nombreRes)){
            swal({
                title: "No se permite dejar vacío el nombre",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              }); 
        }
    
        else if (nombreRes.length < 3 && nombreRes.length > 0){
            swal({
                title: "El nombre es menor a lo permitido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              }); 
        }
    
        else if (nombreRes.length > 20){
            swal({
                title: "El nombre es mayor a lo permitido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              }); 
        }
   /* -----------------apellido---------- */
   else if (expresionesApellidos.vacio.test(apellidoRes)){
    swal({
        title: "No se permite dejar vacío el apellido",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      }); 
}

else if (expresionesApellidos.caracterEspecial.test(apellidoRes)){
    swal({
        title: "No se permite utilizar caracteres especiales en el apellido",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      }); 
}

else if (expresionesApellidos.numeros.test(apellidoRes)){
    swal({
        title: "No se permite utilizar caracteres numericos en el apellido",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      }); 
}

    else if (apellidoRes.length > 20){
        swal({
            title: "El apellido es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (apellidoRes.length < 3 && apellidoRes.length > 0){
        swal({
            title: "El apellido es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    /* ----------------DNI---------- */


    else if (expresionesDNI.vacio.test(dniRes)){
        swal({
            title: "No se permite dejar vacío el DNI",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesDNI.letras.test(dniRes) || expresionesDNI.caracterEspecial.test(dniRes)){
        swal({
            title: "El DNI contiene caracteres no numéricos",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }
    else if (dniRes.length > 8){
        swal({
            title: "El DNI es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (dniRes.length < 7 && dniRes.length > 0){
        swal({
            title: "El DNI es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    /* ----------------domicilio---------- */

    else if (expresionesDomicilios.caracterEspecial.test(domicilioRes)){
        swal({
            title: "No se permite utilizar caracteres especiales en la dirección",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (expresionesDomicilios.vacio.test(domicilioRes)){
        swal({
            title: "No se permite dejar vacía la dirección",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (domicilioRes.length < 5 && domicilioRes.length > 0){
        swal({
            title: "La dirección es menor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (domicilioRes.length > 40){
        swal({
            title: "La dirección es mayor de lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }
    /* ---------------email---------- */
    
    else if (expresionesEmail.vacio.test(emailRes)){
        swal({
            title: "No se permite dejar vacío el email",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if (!expresionesEmail.caracterEspecial.test(emailRes)){
        swal({
            title: "No es un email valido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }


    else {
        swal({
            title: "Reserva exitosa",
            text: "",
            icon: "success",
            button: "Aceptar"}).then(function() {
                window.location = "eleccionRegistroLogin.html";
            });
    } 
}

