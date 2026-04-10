document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let telefone = document.getElementById("telefone").value;
    let tipoSanguineo = document.getElementById("tipoSanguineo").value
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if(nome === "") return alert ("Campo obigatório!");
    if(sobrenome === "") return alert ("Campo obigatório!");
    if(email === "") return alert ("Campo obigatório!");
    if(idade === "") return alert ("Campo obigatório!");
    if(peso === "") return alert ("Campo obigatório!");
    if(telefone === "") return alert ("Campo obigatório!");
    if(cidade === "") return alert ("Campo obigatório!");
    if(estado === "") return alert ("Campo obigatório!");
    // tipo sanguineo 
    if(nome.length < 3) return alert("Nome inválido");
    if (sobrenome < 3) return alert("Sobrenome inválido"); 
    if (!email.includes("@")) return alert("Email inválido!");
    if (telefone.length < 8) return alert("Número de telefone inválido!");
    if (idade < 16) return alert("Você ainda é muito novo para doar sangue!");
    if (peso < 50) return alert("Você precida ter mais de 50kg para poder doar sangue!");


    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso ! <br>" + "Nome: " + nome;

});