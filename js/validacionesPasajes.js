validarPasajes=() =>{
    
    const terminalSalida= document.getElementById("ter-salida").value;
    const terminalDestino= document.getElementById("ter-destino").value;

    if (terminalSalida == terminalDestino){
        swal({
            title: "Son iguales",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

}