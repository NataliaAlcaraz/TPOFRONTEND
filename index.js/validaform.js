
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener('submit',validarFormulario);
});

function validarFormulario(evento){
    evento.preventDefault();
    let nombre = document.getElementsByName("nombre")
    
if(nombre.length == 0){
    alert('No has escrito nada en el nombre');
    return;
}
this.submit();

}  


