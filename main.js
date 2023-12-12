//Que personaje de superhereo eres

//Solicito al usuario los datos y los almaceno en memoria

let caracter = prompt(`Escribe el caracter que mas te representa entre estas opciones:
1 Tranquilo
2 Solitario
3 Estructurado
4 Extrovertido
5 Soberbio`);


let color = prompt(`Escribe tu color entre estas opciones:
1 Rojo
2 Negro
3 Azul`);


let habilidad = prompt(`Escribe una habilidad entre estas opciones:
1 Fuerza
2 Inteligencia`);



//me aseguro que se evalue el resultado en minuscula, no importa lo que ingresara el usuario

caracter = caracter.toLowerCase();
color = color.toLowerCase();
habilidad = habilidad.toLowerCase();



//se declara la funcion para analizar el caracter tranquilo

function tranquilo(color, habilidad) {

  switch (color) {

    case "1":
    case "rojo":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Superman");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Spiderman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "2":
    case "negro":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Superman");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es BlackPanter");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "3":
    case "azul":
      switch (habilidad) {
        case "fuerza":
          alert("El personaje que te representa es Capitan America");
          break;
        case "inteligencia":
          alert("El personaje que te representa es Superman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    default:
      alert("Ingrese el caracter correcta");
  }

}


//se declara la funcion para analizar el caracter solitario

function solitario(color, habilidad) {
  switch (color) {

    case "1":
    case "rojo":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es DeadPool");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Spiderman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "2":
    case "negro":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Hulk");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Batman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "3":
    case "azul":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es BlueBeetle");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Batman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    default:
      alert("Ingrese el caracter correcta");
  }
}


//se declara la funcion para analizar el caracter estructurado

function estructurado(color, habilidad) {
  switch (color) {

    case "1":
    case "rojo":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Capitan America");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Superman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "2":
    case "negro":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es BlackPanter");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Capitan America");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "3":
    case "azul":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Capitana Marvel");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Capitan America");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    default:
      alert("Ingrese el caracter correcta");
  }
}


//se declara la funcion para analizar el caracter extrovertido


function extrovertido(color, habilidad) {
  switch (color) {

    case "1":
    case "rojo":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Thor");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Ironman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "2":
    case "negro":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Thor");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Loky");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "3":
    case "azul":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Thor");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Thor");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    default:
      alert("Ingrese el caracter correcta");
  }
}



//se declara la funcion para analizar el caracter soberbio

function soberbio(color, habilidad) {
  switch (color) {

    case "1":
    case "rojo":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es DeadPool");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Iroman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "2":
    case "negro":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Iroman");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Loky");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    case "3":
    case "azul":
      switch (habilidad) {
        case "1":
        case "fuerza":
          alert("El personaje que te representa es Thor");
          break;
        case "2":
        case "inteligencia":
          alert("El personaje que te representa es Iroman");
          break;
        default:
          alert("Ingreso una habilidad incorrecta");
      }
      break;

    default:
      alert("Ingrese el caracter correcta");
  }
}


//me aseguro que se vuelvan a realizar las preguntas todas las veces necesarias

while (caracter !== "" && color !== "" && habilidad !== "") {

  //se analizan todos los casos del caracter ingresado  
  switch (caracter) {
    case "1":
    case "tranquilo":
      tranquilo(color, habilidad);
      break;

    case "2":
    case "solitario":
      solitario(color, habilidad);
      break;

    case "3":
    case "estructurado":
      estructurado(color, habilidad);
      break;

    case "4":
    case "extrovertido":
      extrovertido(color, habilidad);
      break;

    case "5":
    case "soberbio":
      soberbio(color, habilidad);
      break;

    default:
      alert("Escriba una opcion valida");
  }

  alert("Vualva a elegir las opciones");

  caracter = prompt(`Escribe el caracter que mas te representa entre estas opciones:
1 Tranquilo
2 Solitario
3 Estructurado
4 Extrovertido
5 Soberbio`);


  color = prompt(`Escribe tu color entre estas opciones:
1 Rojo
2 Negro
3 Azul`);


  habilidad = prompt(`Escribe una habilidad entre estas opciones:
1 Fuerza
2 Inteligencia`);
}

alert("No ingreso los datos correctos");
