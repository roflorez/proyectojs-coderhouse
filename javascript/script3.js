
$(document).ready(function () {
  $('#boton-guardar').click(function () {

    let nom = document.querySelector("#nombre").value;
    let apel = document.querySelector("#apellido").value;
    let mat = document.querySelector("#materia").value;
    let not1 = document.querySelector("#nota1").value;
    let not2 = document.querySelector("#nota2").value;

    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", apel);
    localStorage.setItem("Materia", mat);
    localStorage.setItem("Nota1", not1);
    localStorage.setItem("Nota2", not2);

    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#materia").value = "";
    document.querySelector("#nota1").value = "";
    document.querySelector("#nota2").value = "";
  })
})

$(document).ready(function () {
  $("#boton-cargar").click(function () {

    var nombre = localStorage.getItem("Nombre");
    var apellido = localStorage.getItem("Apellido");
    let materia = localStorage.getItem("Materia");
    let nota1 = localStorage.getItem("Nota1");
    let nota2 = localStorage.getItem("Nota2");

    document.querySelector("nombreGuardado").innerHTML = nombre;
    document.querySelector("apellidoGuardado").innerHTML = apellido;
    document.querySelector("materiaGuardado").innerHTML = materia;
    document.querySelector("nota1Guardado").innerHTML = nota1;
    document.querySelector("nota2Guardado").innerHTML = nota2;
  })
});

let inputValues = {
    nombre: "",
    apellido: "",
    materia: "",
    nota1: "",
    nota2: ""
  };
  
const formData = [];


  
const inputs = document.querySelectorAll(".input"); 
const form = document.querySelector("form"); 
const div = document.querySelector("#resultado");
const btnLimpiar = document.querySelector('.limpiar');


inputs.forEach(function(input) {
    input.addEventListener("blur", function(event) {
      
    inputValues = {
      ...inputValues, 
      [event.target.name]: event.target.value 
    }; 
  });
});
  
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  formData.push(inputValues); 
    
  inputValues = {
      nombre: "",
      apellido: "",
      materia: "",
      nota1: "",
      nota2: "",
  };
  
  formData.forEach(function(data) {
    div.innerHTML += `
        <div class="contenedor_resultado">
          <h2>Mi nombre es ${data.nombre} ${data.apellido}</h2>
          <h5>Estoy cursando la materia: ${data.materia}</h5>
          <p>Tu promedio es: ${(Number(data.nota1) + Number(data.nota2))/2}</p>
        </div>
      `;
  })
})



btnLimpiar.addEventListener('click', function(event) {
  inputValues = {
    nombre: "",
    apellido: "",
    materia: "",
    nota1: "",
    nota2: "",
  };
  inputs.forEach(function(input) {
    input.value = ''
  })
})

const json = {
  materias: ["matematicas", "quimica", "fisica"]
};

const appDiv = document.getElementById("app");

json.materias.forEach(function(materia) {
  appDiv.innerHTML += `
    <li>${materia}</li>
  `;
});
