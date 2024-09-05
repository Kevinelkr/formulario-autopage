//DOM = Document Object Model
/*
//Variable: Espacios de memoria para almacenar datos

let: tiene una alcance (scope) mas limitado y a nivel de un bloque especifico de codigo
var tiene un scope ma amplio y ademas puede ser utilizado dentro y fuera de bloque de codigo
const: es una constante con una valor que no cambia, ademas no tiene alcance fuera de un bloque de codigo.


let, var, const
*/



//Evento al dar click al boton btnSend
//El regex se pega poniendo al inicio "/"" y al final tambien "/""
//Expresión regular para validar cadenas de texto, que tenan el formato especifico.
const REGEX_NAME = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/
const REGEX_PHONE = /^9\d{8}$/

var errores=""
document.getElementById("btnSend").addEventListener("click", ()=>{
    //Almacenando la informacion en una variable
    var nameUser = document.getElementById("inputName").value
    var email = document.getElementById("inputEmail").value 
    var numberPhone = document.getElementById("inputPhone").value

    //Si nameUser tiene el formato correcto
    if(nameUser.match(REGEX_NAME)){
        //Si nameUser tiene el formato adecuado.
        var mensajedeError = "El nombre es válido"
    }else{
        //Si nameUser no cumple con el formato especifico.
        var mensajedeError = "El nombre es inválido"
    }

    console.log(mensajedeError)

    // Validación del correo electrónico
    if (email.match(REGEX_EMAIL)) {
        console.log("El correo es válido")
    } else {
        console.log("El correo es inválido")
    }


      // Validación del número de celular
      if (REGEX_PHONE.test(numberPhone)) {
        console.log("El número de celular es válido");
    } else {
        console.log("El número de celular es inválido");
    }
})
