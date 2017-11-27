
$(document).ready(function(){
    
    var estado = true;
    
    $('#cuenta-toggle').on('click', function(){
        
        if (estado == true){
        $('.titulo').text("Cuenta");
            
       $('#espacio').css({
              "padding-top": "750px",
             "overflow": "auto"
            
        });
             $('.titulo').css({
              "font-size": "60px"
        });
         
         estado=false;
       }   
       
    else {
         $('.titulo').text("Web Estándar Design");
        $('#espacio').css({
              "padding-top": "150px",
             "overflow": "auto"
            
        });
          $('.titulo').css({
              "font-size": "60px"
           
     });
        
          estado=true;
    }
    });
        
    });

