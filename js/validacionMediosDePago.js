validartarjeta=() =>{
    
    const rtarjeta= document.getElementById("rtarjeta").value;
    const nombreYApellido= document.getElementById("tnombres").value;;
   
    
   
    const expresionesTarjeta = {
      letras: /[a-zA-Z]/,
      caracterEspecial: /[ -/:-@[-`{-■]/,
      vacio: /^$/
      
       }

      const expresionesNombreApellido = {
        numeros: /[0-9]/,
        caracterEspecial: /[ -/:-@[-`{-■]/,
        vacio: /^$/

      }

         if (expresionesTarjeta.vacio.test(rtarjeta)){
          swal({
              title: "Número de tarjeta vacio",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            });
      }

      if (rtarjeta.length >0 && rtarjeta.length < 16){
        swal({
            title: "Número de tarjeta es menor a 16 digitos",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (rtarjeta.length >16 ){
      swal({
          title: "Número de tarjeta excede de 16 digitos",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
  }

  if (expresionesTarjeta.letras.test(rtarjeta) || expresionesTarjeta.caracterEspecial.test(rtarjeta)){
    swal({
        title: "Número de tarjeta contiene algun caracter no numerico",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      });
}


if(  expresionesNombreApellido.numeros.test(nombreYApellido)  ){
  swal({
      title: "El nombre no puede contener numeros",
      text: "",
      icon: "warning",
      button: "Volver a ingresar dato",
    });
   }

   if(  expresionesNombreApellido.caracterEspecial.test(nombreYApellido)  ){
    swal({
        title: "El nombre no puede contener caracteres especiales",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      });
     }

     if(  expresionesNombreApellido.vacio.test(nombreYApellido)  ){
      swal({
          title: "El nombre no puede estar vacio",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        });
       }

    if( expresionesNombreApellido.length>20){
      swal({
        title: "El nombre del titular no puede ser mayor a 20",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      });

    }
  
}

validarTarjetaMercado=() =>{

  const cuentaMP= document.getElementById("rcuenta-mercado").value;

  const expresionesEmail = {
    caracterEspecial: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9\-]+)((\.([a-zA-Z]){2,9}){0,2})$/ ,
    vacio: /^$/
}

if (!expresionesEmail.caracterEspecial.test(cuentaMP)){
  swal({
      title: "No se permite utilizar caracteres especiales en el email",
      text: "",
      icon: "warning",
      button: "Volver a ingresar dato",
    }); 
}

if (expresionesEmail.vacio.test(cuentaMP)){
  swal({
      title: "No se permite dejar vacío el email",
      text: "",
      icon: "warning",
      button: "Volver a ingresar dato",
    }); 
} 
    
     }


