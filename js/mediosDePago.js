
formularioTarjeta=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("rcontenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("rcontenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("rcontenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("rcontenedor-formulario-tarjeta-bancaria");
   

    formularioTarjeta.style.display="";
    furmularioPrincipal.style.display="none";
    formularioTarjetaMercado.style.display="none";
    formularioBancaria.style.display="none";
    titulo.innerHTML="Tarjeta de credito";
    
}

formularioMercadopago=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("rcontenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("rcontenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("rcontenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("rcontenedor-formulario-tarjeta-bancaria");
   

    formularioTarjeta.style.display="none";
    furmularioPrincipal.style.display="none";
    formularioBancaria.style.display="none";
    formularioTarjetaMercado.style.display="";
    titulo.innerHTML="Mercado Pago";
}

formularioBancaria=()=>{
    const titulo= document.getElementById("titulo");
    const formularioTarjeta= document.getElementById("rcontenedor-formulario-tarjeta");
   const furmularioPrincipal= document.getElementById("rcontenedor-formulario-principal");
   const formularioBancaria= document.getElementById("rcontenedor-formulario-tarjeta-bancaria");
   const formularioTarjetaMercado= document.getElementById("rcontenedor-formulario-tarjeta-mercado");

   formularioTarjeta.style.display="none";
   furmularioPrincipal.style.display="none";
   formularioBancaria.style.display="";
   formularioTarjetaMercado.style.display="none";
   titulo.innerHTML="Cuenta bancaria";

}

volveratras=(b)=>{
    const titulo= document.getElementById("titulo");
    const formularioTarjeta= document.getElementById("rcontenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("rcontenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("rcontenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("rcontenedor-formulario-tarjeta-bancaria");

    formularioTarjeta.style.display="none";
    formularioTarjetaMercado.style.display="none";
    formularioBancaria.style.display="none";
    furmularioPrincipal.style.display="";
    titulo.innerHTML="Crea tu cuenta";

}