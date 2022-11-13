
function habilitarCheckIdaVuelta() {

  element = document.getElementById("content");
  check = document.getElementById("checkbox-ida-vuelta");

  if (check.checked==false){
    element.style.display='none'; 
  }

  else if (check.checked) {
      element.style.display='block';
  }
}


validarProductos=() =>{
    
    const terminalSalida= document.getElementById("ter-salida").value;
    const terminalDestino= document.getElementById("ter-destino").value;


    if (terminalSalida==terminalDestino){
        swal({
            title: "La terminal de salida es igual a la de destino",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });

        } 




}