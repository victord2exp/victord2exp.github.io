function armar_partida(){
    //y ahora estamos aqui... creamos la funcion AJAX...
    var $h = jQuery.noConflict();
    //la direccion del JSON...
    //luego sera asi la direccion: http://www.victord2exp.nixiweb.com/php/index.php?id=1
    //pero para pruebas me cree ese archivo...
    //var url = './JSON/consulta/1.json';    
    var url='http://www.victord2exp.nixiweb.com/php/index.php?id=1';    
    $h("#tabla_contenido").html("");
    //$h("#tabla_contenido").html('<div>Cargando... <img src="./JSON/loading.gif"  height="15px" width="15px" /></div>');
    
    var elem = 0;
    //aqui crea la conexion con URL.. dond es creado el json...
    $h.getJSON(url, null, function(data) {                
        //si entra aqui... es q hubo la conexion...
        //ahora recorremos data..dond esta el JSON
        for (var i in data) {
          //alert(i);        
          /*
          for(var j in data[i]){
              alert(i+" "+j);
              alert(data[i][j]);
              for(var k in data[i][j]){
                //alert(i+" -->" + j+" -->"+k +" -->"+data[i][j][j]);
              }
          }*/
          //alert(data[i]['descr']);
        
          
            var imagen_string="<div class='col-lg-4'>"+
          "<img class='img-circle' src='http://www.victord2exp.nixiweb.com"+data[i]['path']+'/thumbs/thumbs_'+data[i]['file']+"' alt='"+data[i]['text']+"' style='width: 140px; height: 140px;'>"+
          "<h2>"+data[i]['text']+"</h2>"+
          "<p>"+data[i]['descr']+"</p>"+
          "<p><a class='btn btn-default' href='http://www.victord2exp.nixiweb.com"+data[i]['path']+'/'+data[i]['file']+"' role='button'>Ver mas</a></p>"+
        "</div>";
        //alert(imagen_string);
        
  
        $h("#tabla_contenido").append(imagen_string);
        }        
    });
}
function armar_slide(){    
    var $h = jQuery.noConflict();    
    var url = './JSON/consulta/2.json';    
    $h("#tabla_slide").html(""+url);
    var elem = 0;    
    var tipo_item="item active";
    var resultado_final="";
    $h.getJSON(url, null, function(data) {                        
        for (var i in data) {
            if(elem!=0)
                tipo_item="item";
            
        var imagen_string =""+
        "<div class='"+tipo_item+"'>"+
          "<img src='http://www.victord2exp.nixiweb.com/"+data[i]['direccion']+"' alt='"+data[i]['titulo']+"' width='70%' height='400'>"+
          "<div class='container'>"+
           " <div class='carousel-caption'>"+
            "  <h1>"+data[i]['titulo']+"</h1>"+
             " <p>"+data[i]['descr']+"</p>"+
             " <p><a class='btn btn-lg btn-primary' href='http://www.victord2exp.nixiweb.com/"+data[i]['direccion']+"' role='button'>Desplegar</a></p>"+
            "</div>"+
          "</div>"+
        "</div>";
        resultado_final =resultado_final +" "+ imagen_string;
        var imagen_v2=""+        
        "<div class='"+tipo_item+"'>"+
         " <img src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='First slide'>"+
          "<div class='container'>"+
           " <div class='carousel-caption'>"+
            "  <h1>Imagen 1</h1>"+
             " <p>Note: If you're viewing this page via a <code>file://</code> URL, the 'next' and 'previous' Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>"+
             " <p><a class='btn btn-lg btn-primary' href='#' role='button'>Sign up today</a></p>"+
           " </div>"+
          "</div>"+
        "</div>";
            elem++;
        }        
        $h("#tabla_slide").html("");
    });
}
 



function armar_noticias(){    
    var $h = jQuery.noConflict();    
    var url = './JSON/consulta/1.json';    
    $h("#tabla_noticias").html(""+url);    
    var tipo_sector=0;
    var resultado_final="";
    $h.getJSON(url, null, function(data) {                        
        for (var i in data) {
            var contenido_texto=""+        
                "<div class='col-md-7'>"+
                  "<h2 class='featurette-heading'>Titulo. <span class='text-muted'>Subtitulo</span></h2>"+
                  "<p class='lead'>contenido</p>"+
                "</div>";

            var contenido_imagen=""+
                "<div class='col-md-5'>"+
                 " <img class='featurette-image img-responsive' src='http://www.victord2exp.nixiweb.com//wp-content/gallery/slide/DSC_0252.JPG' alt='Alt de Imagen'>"+
                "</div>";

            var columna="<hr class='featurette-divider'><div class='row featurette'>";
            if(tipo_sector==0){
                columna = columna + contenido_texto + contenido_imagen;
                tipo_sector=1;
            }else{
                columna = columna + contenido_imagen + contenido_texto;
                tipo_sector=0;
            }            
            resultado_final = resultado_final + columna+"</div>";
        }        
        $h("#tabla_noticias").html("");        
        $h("#tabla_noticias").append(resultado_final);
    });
} 