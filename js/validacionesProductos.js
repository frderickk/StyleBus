
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
    
    const categoriaPasajes = document.getElementById("categoria-omnibus").value;
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
      
      else if (expresiones.letras.test(cantidadAdultos)){
        swal({
            title: "La cantidad de adultos contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if (expresiones.letras.test(cantidadMenores)){
        swal({
            title: "La cantidad de menores contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if (expresiones.letras.test(cantidadDiscapacitados)){
        swal({
            title: "La cantidad de discapacitados contiene algun caracter no numerico",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if (expresiones.caracterEspecial.test(cantidadAdultos)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de adultos",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }
 
      else if (expresiones.caracterEspecial.test(cantidadMenores)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de menores",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }
      
      else if (expresiones.caracterEspecial.test(cantidadDiscapacitados)){
        swal({
            title: "No se permite utilizar caracteres especiales en cantidad de discapacitados",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if (cantidadAdultos=="0" && cantidadDiscapacitados=="0" && cantidadMenores=="0"){
        swal({
            title: "Debe ingresar al menos un tipo de pasajero",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if ((cantidadAdultos=="0" && cantidadDiscapacitados=="" && cantidadMenores=="") || (cantidadAdultos=="" && cantidadDiscapacitados=="0" && cantidadMenores=="") ||(cantidadAdultos=="" && cantidadDiscapacitados=="" && cantidadMenores=="0")
       ||(cantidadAdultos=="0" && cantidadDiscapacitados=="0" && cantidadMenores=="") || (cantidadAdultos=="" && cantidadDiscapacitados=="0" && cantidadMenores=="0")||(cantidadAdultos=="0" && cantidadDiscapacitados=="" && cantidadMenores=="0")){
        swal({
            title: "Debe ingresar una cantidad valida",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
      }

      else if (terminalSalida==terminalDestino){
        swal({
            title: "La terminal de salida es igual a la de destino",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
        }

        else if (categoriaPasajes == ''){
          swal({
              title: "Debe seleccionar una categoria",
              text: "",
              icon: "warning",
              button: "Volver a ingresar dato",
            });
          }


  else{
  const div = document.getElementById("cargar-pasajes");
  const cantA = parseInt(cantidadAdultos) || 0;
  const cantM = parseInt(cantidadMenores) || 0;
  const cantD = parseInt(cantidadDiscapacitados)|| 0;
  const precioAdulto = 1;
  const precioMenor = 0.75; 
  const precioDisca = 0.5; 
  const precio = 50000;
    div.innerHTML=`
    <div class="col">
      <div class="card" style="">
        <div class="card-body">
          <h5 class="card-title">Ver disponibilidad</h5>
          <p class="card-text">El viaje de ${terminalSalida} a ${terminalDestino} tiene un valor de ${(precio*cantA*precioAdulto) + (precio*cantM*precioMenor) + (cantD*precio*precioDisca)} pesos!</p>
          <a href="reserva.html" class="boton" id="reservar">Reservar
        </a>
        </div>
      </div>
    </div>
    `;  
  }
}
  
validarExcursiones=() =>{
  
  const destinoExc = document.getElementById("ter-destino-exc").value;
  const cantidadAdultosExc = document.getElementById("cantidad-adultos-exc").value;
  const cantidadMenoresExc = document.getElementById("cantidad-menores-exc").value;
  const cantidadDiscapacitadosExc = document.getElementById("cantidad-discapacitados-exc").value;

  const expresiones= {
    letras: /[a-zA-Z]/,
    caracterEspecial: /[!-/:-@[-`{-■]/,
    vacio: /^$/
    }

    if (expresiones.vacio.test(cantidadAdultosExc) && expresiones.vacio.test(cantidadDiscapacitadosExc) && expresiones.vacio.test(cantidadMenoresExc)){
      swal({
          title: "Debe ingresar al menos un tipo de pasajero",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }
    
    else if (expresiones.letras.test(cantidadAdultosExc)){
      swal({
          title: "La cantidad de adultos contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.letras.test(cantidadMenoresExc)){
      swal({
          title: "La cantidad de menores contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.letras.test(cantidadDiscapacitadosExc)){
      swal({
          title: "La cantidad de discapacitados contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.caracterEspecial.test(cantidadAdultosExc)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de adultos",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.caracterEspecial.test(cantidadMenoresExc)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de menores",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }
    
    else if (expresiones.caracterEspecial.test(cantidadDiscapacitadosExc)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de discapacitados",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (cantidadAdultosExc=="0" && cantidadDiscapacitadosExc=="0" && cantidadMenoresExc=="0"){
      swal({
          title: "Debe ingresar al menos un tipo de pasajero",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if ((cantidadAdultosExc=="0" && cantidadDiscapacitadosExc=="" && cantidadMenoresExc=="") || (cantidadAdultosExc=="" && cantidadDiscapacitadosExc=="0" && cantidadMenoresExc=="") ||(cantidadAdultosExc=="" && cantidadDiscapacitadosExc=="" && cantidadMenoresExc=="0")
     ||(cantidadAdultosExc=="0" && cantidadDiscapacitadosExc=="0" && cantidadMenoresExc=="") || (cantidadAdultosExc=="" && cantidadDiscapacitadosExc=="0" && cantidadMenoresExc=="0")||(cantidadAdultosExc=="0" && cantidadDiscapacitadosExc=="" && cantidadMenoresExc=="0")){
      swal({
          title: "Debe ingresar una cantidad valida",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (destinoExc == ''){
     swal({
         title: "Debe seleccionar un destino",
         text: "",
         icon: "warning",
         button: "Volver a ingresar dato",
       }); 
   }
  
else {
const div = document.getElementById("cargar-excursiones");
const cantAExc = parseInt(cantidadAdultosExc) || 0;
const cantMExc = parseInt(cantidadMenoresExc) || 0;
const cantDExc = parseInt(cantidadDiscapacitadosExc)|| 0;
const precioAdultoExc = 1;
const precioMenorExc = 0.75; 
const precioDiscaExc = 0.5; 
const precioExc = 50000*0.2;
  div.innerHTML=`
  <div class="col">
    <div class="card" style="">
      <div class="card-body">
        <h5 class="card-title">Ver disponibilidad</h5>
        <p class="card-text">La excursion de ${destinoExc} tiene un valor de ${(precioExc*cantAExc*precioAdultoExc) + (precioExc*cantMExc*precioMenorExc) + (precioExc*cantDExc*precioDiscaExc)} pesos!</p>
        <a href="reserva.html" class="boton" id="reservar">Reservar
        </a>
      </div>
    </div>
  </div>
  `;  
}
}

validarPaquetes=() =>{
  
  const categoriaPaquetes = document.getElementById("categoria-omnibus-paq").value;
  const terminalSalidaPaq= document.getElementById("ter-salida-paq").value;
  const terminalDestinoPaq= document.getElementById("ter-destino-paq").value;
  const cantidadAdultosPaq = document.getElementById("cantidad-adultos-paq").value;
  const cantidadMenoresPaq = document.getElementById("cantidad-menores-paq").value;
  const cantidadDiscapacitadosPaq = document.getElementById("cantidad-discapacitados-paq").value;

  const expresiones= {
    letras: /[a-zA-Z]/,
    caracterEspecial: /[!-/:-@[-`{-■]/,
    vacio: /^$/
    }

    if (expresiones.vacio.test(cantidadAdultosPaq) && expresiones.vacio.test(cantidadDiscapacitadosPaq) && expresiones.vacio.test(cantidadMenoresPaq)){
      swal({
          title: "Debe ingresar al menos un tipo de pasajero",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }
    
    else if (expresiones.letras.test(cantidadAdultosPaq)){
      swal({
          title: "La cantidad de adultos contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.letras.test(cantidadMenoresPaq)){
      swal({
          title: "La cantidad de menores contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.letras.test(cantidadDiscapacitadosPaq)){
      swal({
          title: "La cantidad de discapacitados contiene algun caracter no numerico",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.caracterEspecial.test(cantidadAdultosPaq)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de adultos",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (expresiones.caracterEspecial.test(cantidadMenoresPaq)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de menores",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }
    
    else if (expresiones.caracterEspecial.test(cantidadDiscapacitadosPaq)){
      swal({
          title: "No se permite utilizar caracteres especiales en cantidad de discapacitados",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (cantidadAdultosPaq=="0" && cantidadDiscapacitadosPaq=="0" && cantidadMenoresPaq=="0"){
      swal({
          title: "Debe ingresar al menos un tipo de pasajero",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if ((cantidadAdultosPaq=="0" && cantidadDiscapacitadosPaq=="" && cantidadMenoresPaq=="") || (cantidadAdultosPaq=="" && cantidadDiscapacitadosPaq=="0" && cantidadMenoresPaq=="") ||(cantidadAdultosPaq=="" && cantidadDiscapacitadosPaq=="" && cantidadMenoresPaq=="0")
     ||(cantidadAdultosPaq=="0" && cantidadDiscapacitadosPaq=="0" && cantidadMenoresPaq=="") || (cantidadAdultosPaq=="" && cantidadDiscapacitadosPaq=="0" && cantidadMenoresPaq=="0")||(cantidadAdultosPaq=="0" && cantidadDiscapacitadosPaq=="" && cantidadMenoresPaq=="0")){
      swal({
          title: "Debe ingresar una cantidad valida",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        }); 
    }

    else if (terminalSalidaPaq==terminalDestinoPaq){
      swal({
          title: "La terminal de salida es igual a la de destino",
          text: "",
          icon: "warning",
          button: "Volver a ingresar dato",
        });

      }

      else if (categoriaPaquetes==''){
        swal({
            title: "Debe seleccionar una categoria",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
  
        }
 
  
 else {       

const div = document.getElementById("cargar-paquetes");
const cantAPaq = parseInt(cantidadAdultosPaq) || 0;
const cantMPaq = parseInt(cantidadMenoresPaq) || 0;
const cantDPaq = parseInt(cantidadDiscapacitadosPaq)|| 0;
const precioAdultoPaq = 1;
const precioMenorPaq = 0.75; 
const precioDiscaPaq = 0.5; 
const precioPaq = 50000-(50000*0.1);
  div.innerHTML=`
  <div class="col">
    <div class="card" style="">
      <div class="card-body">
        <h5 class="card-title">Ver disponibilidad</h5>
        <p class="card-text">El viaje de ${terminalSalidaPaq} a ${terminalDestinoPaq} tiene un valor de ${(precioPaq*cantAPaq*precioAdultoPaq) + (precioPaq*cantMPaq*precioMenorPaq) + (precioPaq*cantDPaq*precioDiscaPaq)} pesos!</p>
        <a href="reserva.html" class="boton" id="reservar">Reservar
        </a>
      </div>
    </div>
  </div>
  `;  
}
}
var estandar = ["Estándar"];
var estandarPlus = ["Estándar", "VIP"];
var premium = ["Estándar", "VIP"];
var excursiones  = ["Museo", "Reserva", "Teatro", "Observatorio"];

document.getElementById("ter-destino-exc").addEventListener("change", function(e){
  var selectExc = document.getElementById("nombre-exc");
  selectExc.innerHTML = "";
  var aItems = [];
  if(this.value == "Retiro" || this.value == "Mar del plata" || this.value == "Cordoba" || this.value == "Rosario"){
    aItems = excursiones;
  }
  for(var i = 0, len = aItems.length; i<len; i++) {
    var option = document.createElement("option");
    option.value = (i+1);
    var textNode = document.createTextNode(aItems[i]);
    option.appendChild(textNode);
    selectExc.appendChild(option);
  }
}, false);

document.getElementById("categoria-omnibus-paq").addEventListener("change", function(e){
  var selectAsientoPaq = document.getElementById("categoria-asiento-paq");
  selectAsientoPaq.innerHTML = "";
  var aItems = [];
  if(this.value == "Estandar"){
    aItems = estandar;
  }
  else if(this.value == "Estandar plus"){
    aItems = estandarPlus;
  }
  else if(this.value == "Premium"){
    aItems = premium;
  }
  for(var i = 0, len = aItems.length; i<len; i++) {
    var option = document.createElement("option");
    option.value = (i+1);
    var textNode = document.createTextNode(aItems[i]);
    option.appendChild(textNode);
    selectAsientoPaq.appendChild(option);
  }
}, false);

document.getElementById("categoria-omnibus").addEventListener("change", function(e){
  var selectAsiento = document.getElementById("categoria-asiento");
  selectAsiento.innerHTML = "";
  var aItems = [];
  if(this.value == "Estandar"){
    aItems = estandar;
  }
  else if(this.value == "Estandar plus"){
    aItems = estandarPlus;
  }
  else if(this.value == "Premium"){
    aItems = premium;
  }
  for(var i = 0, len = aItems.length; i<len; i++) {
    var option = document.createElement("option");
    option.value = (i+1);
    var textNode = document.createTextNode(aItems[i]);
    option.appendChild(textNode);
    selectAsiento.appendChild(option);
  }
}, false);

