
// Ejercicio 1 — Selección de elementos
// Selección mediante el <h1> por su ID
var titulo = document.getElementById("titulo");

// Selección mediante el <p> por su clase
var descripcion = document.querySelector(".descripcion");

// Los cambios se mostran en la consola
console.log("Elemento h1:", titulo);
console.log("Elemento p:", descripcion);

// Ejercicio 2 — Modificar contenido con un botón
// Selección del botón del ejercicio 2
var botonTexto = document.getElementById("btn-cambiar-texto");

// Cuando el usuario hace clic, cambia el texto del título
botonTexto.addEventListener("click", function () {
  titulo.textContent = "¡Texto cambiado con JavaScript!";
});

// Ejercicio 3 — Cambiar estilos con un botón

var botonEstilos = document.getElementById("btn-cambiar-estilos");

botonEstilos.addEventListener("click", function () {
  titulo.style.color = "white";           // Cambia el color del texto
  titulo.style.fontSize = "40px";         // Cambia el tamaño de fuente
  titulo.style.backgroundColor = "#8e44ad"; // Cambia el fondo
  titulo.style.padding = "10px";
  titulo.style.borderRadius = "8px";
});


// Ejercicio 4 — Identificación de evento en tiempo real

var campoTexto   = document.getElementById("campo-texto");
var textoMostrado = document.getElementById("texto-mostrado");

// Cada vez que el usuario suelte una tecla, actualizamos el párrafo
campoTexto.addEventListener("keyup", function () {
  // Si el campo está vacío, mostramos un mensaje por defecto
  if (campoTexto.value === "") {
    textoMostrado.textContent = "Aquí aparecerá lo que escribas...";
  } else {
    textoMostrado.textContent = campoTexto.value;
  }
});


// _____________ // ___________________
// Mini proyecto — Contador Interactivo

// Variable que guarda el número actual
var contador = 0;

// Seleccionamos los elementos del contador
var numeroElem = document.getElementById("numero");
var btnAumentar = document.getElementById("aumentar");
var btnDisminuir = document.getElementById("disminuir");

// Función que actualiza el número en pantalla y cambia el color
function actualizarContador() {
  // Mostramos el valor en el DOM
  numeroElem.textContent = contador;

  // Borra clases anteriores
  numeroElem.classList.remove("positivo", "negativo", "cero");

  // Agrega la clase según el valor (BONUS de color)
  if (contador > 0) {
    numeroElem.classList.add("positivo"); // Verde
  } else if (contador < 0) {
    numeroElem.classList.add("negativo"); // Rojo
  } else {
    numeroElem.classList.add("cero");     // Negro
  }
}

// Botón "+" → aumenta el contador
btnAumentar.addEventListener("click", function () {
  contador = contador + 1;
  actualizarContador();
});

// Botón "-" → disminuye el contador
btnDisminuir.addEventListener("click", function () {
  contador = contador - 1;
  actualizarContador();
});

// Llama la función al inicio para aplicar el color desde el principio
actualizarContador();