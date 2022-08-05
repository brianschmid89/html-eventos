const seccionActividades = document.getElementById("actividades");
const compras = document.getElementById("compras");
const iconoCarrito = document.getElementById("carrito");
const cantidadDeactividades = 4;

const definirActividad = (mensaje, precio) => {
  console.log(mensaje);
  let mensajeCompra = document.createElement("p");
  mensajeCompra.innerHTML = mensaje;
  let totalPrecio = document.createElement("p");
  totalPrecio.innerHTML = `El total es de $${precio}`;
  compras.append(mensajeCompra);
  compras.append(totalPrecio);
};

function evaluarActividad(actividad, cantidad) {
  let mensaje = "";
  let precio = 0;
  switch (actividad) {
    case 1:
      precio = 2000;
      mensaje = "Seleccionaste Crossfit";
      break;
    case 2:
      precio = 2000;
      mensaje = "Seleccionaste Functional";
      break;
    case 3:
      precio = 1800;
      mensaje = "Seleccionaste Spinning";
      break;
    case 4:
      precio = 2300;
      mensaje = "Seleccionaste Gimnasio";
      break;
    default:
      mensaje = "No seleccionaste una actividad";
  }
  definirActividad(mensaje, precio);
}

const mostrarTotalActividades = (cantidad) => {
  let totalActividades = document.createElement("div");
  totalActividades.innerHTML = cantidad;
  iconoCarrito.append(totalActividades);
};

const contratarActividad = () => {
    const actividad = Number(
        prompt(`Bienvenido a SportClub. Que actividad te gustaria realizar?

    1-Crossfit - $2000
    2-Functional - $2000
    3-Spinning - $1800
    4-Gimnasio - $2300
       `)
  );

const cantidad = Number(prompt(`Ingresa cuantos dias queres venir`));

  mostrarTotalActividades(cantidad);
  evaluarActividad(actividad, cantidad);
};

const mostrarActividad = () => {
  let contador = 0;

  while (contador < cantidadDeactividades) {1
        
    seccionActividades.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./img/imagen${contador}.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Actividad ${contador}</h5>
            <a href="#" class="btn btn-primary">Pedir turno!</a>
            </div>
        </div>    
        `;
    contador++;
  }
};

mostrarActividad();
contratarActividad();

// SALUDO
function saludar (){
  alert('Muchas gracias por elegirnos!')
}

const btnSaludar = document.getElementById('enviarSaludo');
btnSaludar.addEventListener("click", saludar);


//PEDIR TURNO

/* 
function pedirTurno(){
  alert('Acabas de reservar un turno')
}

const btn-primary = document.getElementById('guardarTurno');
btn-primary.addEventListener("click", pedirTurno) */