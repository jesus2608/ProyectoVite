
function hacerPeticion(tipo: string,  participants:string): Promise<string> {
    const url = "/api/filter?type="+tipo+"&&participants="+participants;
    return fetch(url)
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error('Error respuesta no válida');
        }
        return respuesta.json();
      })
      .then((Actividades: any[]) => {
        if (Actividades && Actividades.length > 0) {
          const actividadAleatoria = Actividades[Math.floor(Math.random() * Actividades.length)];
          console.log('Actividad:', actividadAleatoria.activity);  
          return actividadAleatoria.activity;  
        } else {
          throw new Error('No se encontraron actividades');
        }
      })
      .catch(error => {
        console.error('Error algo no ha ido bien:', error);
        throw error;
      });
}

function traerImagen(tipo: string): Promise<string> {
    const url = 'https://pixabay.com/api/?key=47303278-ddd6bef9008504e308e01fadf&image_type=photo&q=';

    return fetch(url + tipo)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('Error en la petición de imagen');
            }
            return respuesta.json();
        })
        .then((imagen) => {
            if (imagen.hits.length > 0) {
                const image: string = imagen.hits[0].webformatURL;
                console.log(image)
                return image; 
            } else {
                console.log('No se encontraron imágenes para el tipo:', tipo);
                return ''; 
            }
        })
        .catch((error) => {
            console.error('Error al obtener la imagen:', error);
            return ''; 
        });
}
function main(){
    const tipo = (document.getElementById('tipos')as HTMLSelectElement).value;
    const personas = (document.getElementById('personas')as HTMLSelectElement).value;
    const div = document.getElementById('resultado') as HTMLDivElement;

    hacerPeticion(tipo,personas )
    .then(result => {
      console.log(result);
      const actividadElement = document.createElement('h1');
      actividadElement.textContent = result;
      div.innerHTML = '';
      div.appendChild(actividadElement); 
        traerImagen(result)
        .then(imagenUrl => {
          const imagen = document.createElement('img');
          if (imagenUrl) {
            imagen.src = imagenUrl;
            imagen.alt = 'si';
            div.appendChild(imagen); 
            }
        })
        .catch(error => {
            console.log('Error en la petición de imagen:', error);
        });
    })
    .catch(error => {
      console.log('No se ha encontrado la actividad:', error);
      div.innerHTML = '';
      const imagen = document.createElement('img');

        imagen.src ='error.PNG' ;
        imagen.alt = 'si';
        div.appendChild(imagen); 
        
    })
}
