formularioPasajes=()=>{
    const formPasajes= document.getElementById("contenedor-formulario-pasajes");
    const formExcursiones= document.getElementById("contenedor-formulario-excursiones");
    const formPaquetes= document.getElementById("contenedor-formulario-paquetes");

    formPasajes.style.display="";
    formExcursiones.style.display="none";
    formPaquetes.style.display="none";
}

formularioExcursiones=()=>{
    const formPasajes= document.getElementById("contenedor-formulario-pasajes");
    const formExcursiones= document.getElementById("contenedor-formulario-excursiones");
    const formPaquetes= document.getElementById("contenedor-formulario-paquetes");

    formPasajes.style.display="none";
    formExcursiones.style.display="";
    formPaquetes.style.display="none";
}

formularioPaquetes=()=>{
    const formPasajes= document.getElementById("contenedor-formulario-pasajes");
    const formExcursiones= document.getElementById("contenedor-formulario-excursiones");
    const formPaquetes= document.getElementById("contenedor-formulario-paquetes");

    formPasajes.style.display="none";
    formExcursiones.style.display="none";
    formPaquetes.style.display="";
}