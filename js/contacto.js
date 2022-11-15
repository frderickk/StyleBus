enviarConsulta=() =>{
    
    const rapellido= document.getElementById("rapellido").value;
    const rnombre= document.getElementById("rnombre").value;
    const email= document.getElementById("remail").value;
    const consulta= document.getElementById("consulta-contacto").value;


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

    const expresionesEmail = {
        caracterEspecial: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9\-]+)((\.([a-zA-Z]){2,9}){0,2})$/ ,
        vacio: /^$/
    }

    const expresionesConsulta = {
        vacio: /^$/
    }

  /* ------------validacion de todos los campos vacios---------- */

    if (expresionesEmail.vacio.test(email) && expresionesApellidos.vacio.test(rapellido) && expresionesNombres.vacio.test(rnombre) && expresionesConsulta.vacio.test(consulta)){
                swal({
                    title: "Los campos no deben estar vacios",
                    text: "",
                    icon: "warning",
                    button: "Volver a ingresar dato",
                  }); 
            }

    else if (expresionesConsulta.vacio.test(consulta)){
        swal({
            title: "No se permite enviar una consulta vacia",
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
            title: "No es un email valido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    else if(expresionesNombres.vacio.test(rnombre)){
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

    else {
        swal({
            title: "Envio de consulta exitosa",
            text: "",
            icon: "success",
            button: "Aceptar"})
    } 

}