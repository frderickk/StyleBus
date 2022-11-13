validartarjeta=() =>{
    
    const rtarjeta= document.getElementById("rtarjeta").value;
    const nombreYApellido= document.getElementById("tnombres").value;
    const fechaDeExpiracion= document.getElementById("rfecha").value;
    const cuentaMP= document.getElementById("rcuenta-mercado").value;
    const numeroDeCuentaBancaria= document.getElementById("rnumero-bancaria").value;
    const nombreDeTitutar= document.getElementById("rnombre-bancaria").value;

   
    const expresionesTarjeta = {
        vacio: /^$/
         }

         if (expresionesTarjeta.vacio.test(rtarjeta)){
          swal({
              title: "El numero de tarjeta esta vacio",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            });
      }
}