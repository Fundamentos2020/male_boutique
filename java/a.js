
    const boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
    
         const xhr = new XMLHttpRequest();
        
         xhr.open('GET','/java/carito.json', true);
    
         xhr.onload = function() {
              if(this.status === 200) {
                       const personal =  JSON.parse( this.responseText );
    
                       let htmlTemplate = '';
                       personal.forEach(function(persona) {
                             htmlTemplate += `
                             <ul>
                                  <li>producto: ${persona.producto}</li>
                                  <li>decripcion: ${persona.descipcion}</li>
                                  <li>cantidad: ${persona.cantidad}</li>
                                  <li>costo: ${persona.costo}</li>
                    
                                  
                             </ul>
                             `;
                                                                               
                        
                       })
                       document.getElementById('pokemon').innerHTML = htmlTemplate;
                      
              }
         }
    
         xhr.send();
    
    })
    
    