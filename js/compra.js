
function habilitarCheckCupon() {

    element = document.getElementById("content");
    check = document.getElementById("checkbox-cupon");
  
    if (check.checked==false){
      element.style.display='none'; 
    }
  
    else if (check.checked) {
        element.style.display='block';
    }
  }

comprar=() =>{

    swal({
        title: "Compra exitosa",
        text: "",
        icon: "success",
        button: "Aceptar",
        });

 }