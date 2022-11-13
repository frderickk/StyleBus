validacionMediosDePago=() =>{
    
    const numeroDeTarjeta= document.getElementById("rtarjeta");
    const nombreYApellido= document.getElementById("tnombres").value;
    const fechaDeExpiracion= document.getElementById("rfecha").value;
    const cuentaMP= document.getElementById("rcuenta-mercado").value;
    const contraseñaMP= document.getElementById("mppassword").value;
    const numeroDeCuentaBancaria= document.getElementById("rnumero-bancaria").value;
    const nombreDeTitutar= document.getElementById("rnombre-bancaria").value;

   
    const expresiones = {
        numeroDeTarjeta: /[1-9]{16}/,
        nombreYApellido:  /^[A-Z]/,
        




          cuenta: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,
          pass: /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/, 
          rnombre: /^[A-z]/  ,
          rapellido: /^[A-z]/ ,
          rdomicilio: /^([a-zA-Z_\s]{1,}\d{1,})+|(\d{1,}[a-zA-Z_]{1,})+$ / ,   
          dni: /[1-9]{8,9}/ }


    
}