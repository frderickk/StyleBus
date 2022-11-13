validartarjeta=() =>{
    
    const rtarjeta= document.getElementById("rtarjeta").value;
    const nombreYApellido= document.getElementById("tnombres").value;
    const fechaDeExpiracion= document.getElementById("rfecha").value;
    const cuentaMP= document.getElementById("rcuenta-mercado").value;
    const contraseñaMP= document.getElementById("mppassword").value;
    const numeroDeCuentaBancaria= document.getElementById("rnumero-bancaria").value;
    const nombreDeTitutar= document.getElementById("rnombre-bancaria").value;

   
    const expresiones = {
        vacio: /^$/
         }

         if (expresiones.vacio.test(rtarjeta)){
          swal({
              title: "El numero de tarjeta esta vacio",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            });

          
      }




    
}