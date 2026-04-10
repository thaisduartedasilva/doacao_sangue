document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let telefone = document.getElementById("telefone").value;
    let tipoSanguineo = document.getElementById("tipoSanguineo").value
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

});