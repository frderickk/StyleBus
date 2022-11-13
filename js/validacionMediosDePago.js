validartarjeta=() =>{
    
    const rtarjeta= document.getElementById("rtarjeta").value;
    const nombreYApellido= document.getElementById("tnombres").value;
   
    
   
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

  
     validarTarjetaBancaria=() =>{

      const CBUCVU= document.getElementById("rnumero-bancaria").value;
      const DNI= document.getElementById("rdni-bancaria").value;

      const expresionesCBUCVU = {
        letras: /[a-zA-Z]/,
      caracterEspecial: /[!-/:-@[-`{-■]/ ,
      vacio: /^$/
      }

    const expresionesDNI = {
      letras: /[a-zA-Z]/,
    caracterEspecial: /[!-/:-@[-`{-■]/ ,
    vacio: /^$/
    } 

    if(CBUCVU.length>22)
    swal({
      title: "CBU/CVU excede los 22 digitos",
      text: "",
      icon: "warning",
      button: "Volver a ingresar dato",
    });
    
    if(CBUCVU.length<22)
    swal({
      title: "CBU/CVU es menor a 22 digitos",
      text: "",
      icon: "warning",
      button: "Volver a ingresar dato",
    });

    if (expresionesCBUCVU.caracterEspecial.test(CBUCVU)){
      swal({
          title: "CBU/CVU contiene algún digito no numérico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    if (expresionesCBUCVU.vacio.test(CBUCVU)){
      swal({
          title: "CBU/CVU es vacío",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    } 
    if (expresionesCBUCVU.letras.test(CBUCVU)){
      swal({
          title: "CBU/CVU contiene algún digito no numérico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }
   
    if(DNI.length<7 && DNI.length >0){
      swal({
        title: " DNI titular de la cuenta es menor a 7 caracteres numéricos",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      });
    }

      if(DNI.length>8){
        swal({
          title: "DNI titular de la cuenta excede los  8 caracteres numéricos",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        });
      }

        if (expresionesDNI.vacio.test(DNI)){
          swal({
              title: "DNI titular de la cuenta vacío",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            }); 
        }

        if (expresionesDNI.letras.test(DNI)){
          swal({
              title: "DNI titular de la cuenta contiene algún caracter no numérico",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            }); 
        }

        if (expresionesDNI.caracterEspecial.test(DNI)){
          swal({
              title: "DNI titular de la cuenta contiene algún caracter no numérico",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            }); 
        }

    




     }
    


