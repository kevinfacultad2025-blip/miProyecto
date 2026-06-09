//EJERCICIO 1
// PRESIONAR BTN Y QUE CAMBIE EL TITULO
const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function() {
    titulo.textContent = "¡Bienvenido al DOM!"
    titulo.style.color = "navy";
});

//EJERCICIO 2
//BOTONES QUE CAMBIAN DE COLOR
/*const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", function (){
    cuadrado.style.background = "Red";
});
btnAmarillo.addEventListener("click", function (){
    cuadrado.style.background = "Yellow";
});
btnVerde.addEventListener("click", function (){
    cuadrado.style.background = "Green";
});*/

//LECTURA DE VALORES
/*const inputText = document.getElementById("input");
const btnJS = document.getElementById("btn");
const titulo = document.getElementById("titulo");

btnJS.addEventListener("click", function (){
    const texto = inputText.value.trim();
    console.log (" Escribiste :", texto )
    inputText.value = "";
    titulo.textContent = texto;
})


//EJERCICIO 3
//SIMULA UN LOGIN//

/*const inputUsuario = document.getElementById("usuario")
const inputContrasena = document.getElementById("contrasena")
const btnLogin = document.getElementById("btnLogin")
const mensaje = document.getElementById("mensaje")

inputUsuario.addEventListener("input", function(){
    mensaje.textContent = "";
})
inputContrasena.addEventListener("input", function(){
    mensaje.textContent = "";
})

btnLogin.addEventListener("click", function(){
const usuario = inputUsuario.value.trim();
const contrasena = inputContrasena.value.trim();
    if(usuario === "" || contrasena === ""){
        mensaje.textContent = "Completa los campos";
        mensaje.style.color = "red";
    }

    else if(usuario === "admin" && contrasena === "1234"){
        mensaje.textContent = "Bienvenido, Admin";
        mensaje.style.color = "green";
    }
    else{
        mensaje.textContent = "usuario o clave incorrecta";
        mensaje.style.color = "red";
    }
})/*


//EJERCICIO 4

/*const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener(("input"), function(){
    const nombre = inputNombre.value.trim();

    if(inputNombre === ""){
        preview.textContent = "Escribe el nombre arriba";
    }
    else{
        preview.textContent = "Hola, " + nombre + "!";
    }
})*/


//Crear, insertar y eliminar nodos
//crear elemento
/*const nuevoParrafo = document.createElement("p");

//darle contenido
nuevoParrafo.textContent = "Soy un parrafo nuevo";
//insertar en el DOM (al final del contenedor)
const contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoParrafo);
//quitar un elemento
nuevoParrafo.remove();*/


//EJERCICIO 5
/*
const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    // Si el nombre está vacío: mostrar aviso y salir
    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    // Ocultar el aviso si había uno
    aviso.textContent = "";

    // 1. Crear el <li>
    const li = document.createElement("li");

    // 2. Poner el nombre como texto del <li>
    li.textContent = nombre;

    // 3. Crear el botón "Quitar"
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    // 4. Al hacer clic en "Quitar", eliminar el <li>
    btnQuitar.addEventListener("click", function () {
        li.remove();
    });

    // 5. Insertar el botón dentro del <li>
    li.appendChild(btnQuitar);

    // 6. Insertar el <li> dentro de la lista
    listaInvitados.appendChild(li);

    // 7. Limpiar y enfocar el campo
    inputNombre.value = "";
    inputNombre.focus();
});*/

//EJERCICIO 6
/*
    const tarjeta = document.getElementById("tarjeta");
    const btnToggle = document.getElementById("btnToggle");

    btnToggle.addEventListener("click", function () {

        // Ocultar o mostrar la tarjeta
        tarjeta.classList.toggle("oculto");

        // Cambiar texto del botón
        if (tarjeta.classList.contains("oculto")) {
        btnToggle.textContent = "Mostrar";
        } else {
            btnToggle.textContent = "Ocultar";
        }
        });*/


//EJERCICIO 7
/*
const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {

    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    // Validar que nombre y profesión no estén vacíos
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Completá nombre y profesión.";
        return;
    }

    // Limpiar aviso
    avisoP.textContent = "";

    // Crear la tarjeta
    const tarjeta = document.createElement("div");

    tarjeta.style.borderLeft = "8px solid " + color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    tarjeta.style.backgroundColor = "#f0f0f0";

    // Crear el <h3> con el nombre
    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    // Crear el <p> con la profesión
    const texto = document.createElement("p");
    texto.textContent = profesion;

    // Crear el botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    // Evento para eliminar tarjeta
    btnEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });

    // Armar la jerarquía
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(btnEliminar);

    // Agregar al DOM
    resultados.appendChild(tarjeta);

});*/