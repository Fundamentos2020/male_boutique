
    const boton2 = document.getElementById('boton2');
    boton.addEventListener('click', function() {
    
         const xhr = new XMLHttpRequest();
        
         xhr.open('GET','/java/c.json', true);
    
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
                       document.getElementById('pokemon2').innerHTML = htmlTemplate;
                      
              }
         }
    
         xhr.send();
    
    })
    
    