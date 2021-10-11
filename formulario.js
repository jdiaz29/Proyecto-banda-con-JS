
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"

const infoPost =  $("#form");

$("body").append('<div><button id="btn1"">Enviar</button></div>');

$("#btn1").click(() => { 
    $.post(URLPOST, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            alert ("Solicitud enviada, gracias")

   }  
    })
});

