$$(document).on('page:init', '.page[data-name="listadoMateriales"]', function (e) {
console.log('Estoy en el listado de materiales');


$.getJSON(server+'api/materialPorCurso/movil/'+localStorage.getItem("id_curso"), function (data) {
    console.log(JSON.stringify(data));

    //Si existen datos
    if (typeof data !== 'undefined' && data.length > 0) {
      
        //the array is defined and has at least one element
        $("#descripcion-curso").empty();

        if( data[0].descripcion_curso !== null){

            html='';
            html+='<div class="block block-strong tablet-inset">';
            html+='<p id="descripcion-curso">'+data[0].descripcion_curso+'</p>'; 
            html+='</div>'; 
            $("#descripcion").append(html);
            $("#titulo-materiales").append(data[0].nombre_asignatura);
        }
       
    }



})
    .done(function (response) {
        
        html = '';
        var extension;
        $.each(response, function (index, element) {
           
            extension=element.path.split('.');
            html+='<div class="card" id="material_'+element.id_curso+'"">';
            html += '<div class="card-content card-content-padding tarjeta-material"><br><img src="imagenes/'+formatoArchivo(extension[1])+'" width="30px"> <b>'+element.nombre_material+'</b><br><b>Archivo:</b><a  class="link external no-ripple" target="_blank" href="'+storageServer+element.path+'"> '+element.path+'</a><br><b>Descripcion:</b> '+element.descripcion+'</div>';
            html += '</div>';
            //html += '</div>';
            
        })
        console.log(html);
        $("#contenido-listado-materiales").append(html);
    })
    .fail(function () {
         //Info es cuando guarde el arreglo sin conexión, todavia no lo hago
        if (typeof info == 'undefined' || info == 'null' || info == '[]') {
            app.dialog.alert('Por favor intente nuevamente', 'Sin conexión', function () {
                app.router.navigate("/inicio/");
            });
        }
    });

});

function formatoArchivo(archivo){
    //determinar el icono asociado al archivo en base a su extensión
    if(archivo=='jpg' ||archivo=='png' ||archivo=='PNG' ||archivo=='jpeg'){
        return 'imagen.jpg';
    }else{
        if(archivo=='pdf'){
            return 'pdf.png';
        }else{
            if(archivo=='docx'){
                return 'word.png';
            }else{
                if(archivo=='xlsx'){
                    return 'excel.png';
                }else{
                    if(archivo=='zip' || archivo=='rar'){
                        return 'zip.jpg';
                    }else{
                        return 'desconocido.png';
                    }
                }
            }
        }
    }
}