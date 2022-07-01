
//Validación del formulario con Js
function validar_f(){
    //VALIDAR SOCIO
    if(document.validaform.socio.selectedIndex == 1) {

        alert("Felicitaciones!! Por ser socio ud accede a un descuento del 15%")
        
    }
    
    
    //VALIDAR NOMBRE
    if(document.validaform.nombre.value.length == 0){
        alert("Por favor escriba su nombre")
        document.validaform.nombre.focus()//acá se sitúa donde está el error
        return 0;
    }
    
    //VALIDAR TELEFONO
    
    if(document.validaform.telefono.value.length <10){
        alert("Campo incompleto. Por favor complete su nro de teléfono")
        document.validaform.telefono.focus()//acá se sitúa donde está el error
        return 0;
    }
    
   

    // VALIDAR TIPO DE EVENTO
    if(document.validaform.tipo_evento.selectedIndex == 0) {

        alert("Por favor elija el tipo de evento")
        document.validaform.tipo_evento.focus()//acá se sitúa donde está el error
        return 0;
    }

    // VALIDAR FECHA SOLICITADA
    
    if(document.validaform.fecha_solicitada.value.length == 0){
        alert("Por favor ingrese la fecha deseada")
        document.validaform.fecha_solicitada.focus()//acá se sitúa donde está el error
        return 0;
    
    
    }

    //VALIDAR CANTIDAD DE PERSONAS
    if(document.validaform.cantidad_de_personas.value.length == 0){
        alert("Por favor ingrese la cantidad de personas deseada")
        document.validaform.cantidad_de_personas.focus()//acá se sitúa donde está el error
        return 0;
    }else{
    if(document.validaform.cantidad_de_personas.value >200){
        alert("La capacidad máxima del salón es de 200 personas")
        document.validaform.cantidad_de_personas.focus()//acá se sitúa donde está el error
        return 0;
    }

}

alert("SUS DATOS HAN SIDO REGISTRADOS EXITOSAMENTE")

}



