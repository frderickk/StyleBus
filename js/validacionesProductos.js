
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


validarPasajes=() =>{
    
    const terminalSalida= document.getElementById("ter-salida").value;
    const terminalDestino= document.getElementById("ter-destino").value;
    const cantidadAdultos = document.getElementById("cantidad-adultos").value;
    const cantidadMenores = document.getElementById("cantidad-menores").value;
    const cantidadDiscapacitados = document.getElementById("cantidad-discapacitados").value;

    const expresiones= {
      letras: /[a-zA-Z]/,
      caracterEspecial: /[!-/:-@[-`{-■]/,
      vacio: /^$/
      }

      if (expresiones.vacio.test(cantidadAdultos) && expresiones.vacio.test(cantidadDiscapacitados) && expresiones.vacio.test(cantidadMenores)){
        swal({
            title: "Debe ingresar al menos un tipo de pasajero",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }
      
      if (expresiones.letras.test(cantidadAdultos)){
        swal({
            title: "La cantidad de adultos contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if (expresiones.letras.test(cantidadMenores)){
        swal({
            title: "La cantidad de menores contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if (expresiones.letras.test(cantidadDiscapacitados)){
        swal({
            title: "La cantidad de discapacitados contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if (expresiones.caracterEspecial.test(cantidadAdultos)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de adultos",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }
 
      if (expresiones.caracterEspecial.test(cantidadMenores)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de menores",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }
      
      if (expresiones.caracterEspecial.test(cantidadDiscapacitados)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de discapacitados",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if (cantidadAdultos=="0" && cantidadDiscapacitados=="0" && cantidadMenores=="0"){
        swal({
            title: "Debe ingresar al menos un tipo de pasajero",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if ((cantidadAdultos=="0" && cantidadDiscapacitados=="" && cantidadMenores=="") || (cantidadAdultos=="" && cantidadDiscapacitados=="0" && cantidadMenores=="") ||(cantidadAdultos=="" && cantidadDiscapacitados=="" && cantidadMenores=="0")
       ||(cantidadAdultos=="0" && cantidadDiscapacitados=="0" && cantidadMenores=="") || (cantidadAdultos=="" && cantidadDiscapacitados=="0" && cantidadMenores=="0")||(cantidadAdultos=="0" && cantidadDiscapacitados=="" && cantidadMenores=="0")){
        swal({
            title: "Debe ingresar una cantidad valida",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      if (terminalSalida==terminalDestino){
        swal({
            title: "La terminal de salida es igual a la de destino",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });

        }

  const div = document.getElementById("cargar-pasajes");
  const precioAdulto = 1;
  const precioMenor = 0.75; 
  const precioDisca = 0.5; 
  const precio = 50000;
    div.innerHTML=`
    <div class="col">
      <div class="card" style="">
        <div class="card-body">
          <h5 class="card-title">${terminalSalida} a ${terminalDestino}</h5>
          <p class="card-text">El viaje de ${terminalSalida} a ${terminalDestino} tiene un valor de ${precio*cantidadAdultos*precioAdulto} pesos!</p>
          <a  class="btn btn-primary" id="pasaje1">Comprar</a>
        </div>
      </div>
    </div>
    `;
    pasaje1.addEventListener("click",(e)=>{
      e.preventDefault();
      if(localStorage.getItem("inicio")=="true"){
          alert("Compra realizada");
      }
      else{
          alert("Debe iniciar sesión para comprar un producto!");
          /*window.location.href="inicioSesion.html";*/
      }
  });

  
}