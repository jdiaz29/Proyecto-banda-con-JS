
/* Formulario con AJAX*/

const URLPOST   = "https://jsonplaceholder.typicode.com/posts";

const infoPost =  $("#form")

$('.form').on('submit', () => { 
    $.post(URLPOST, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            swal ("Solicitud enviada, gracias.","","success")
           
   }  
    })
    $('.form').trigger("reset");
});