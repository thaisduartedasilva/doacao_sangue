let dados = [];
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    function validarFormulario() {

        let nome = document.getElementById("nome").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let email = document.getElementById("email").value;
        let idade = document.getElementById("idade").value;
        let peso = document.getElementById("peso").value;
        let telefone = document.getElementById("telefone").value;
        let tipoSanguineo = document.getElementById("tipoSanguineo").value
        let cidade = document.getElementById("cidade").value;
        let estado = document.getElementById("estado").value;

        if (nome === ""){
            alert("Campo obigatório!");
            return false;
        } 
        if (sobrenome === ""){
            alert("Campo obigatório!");
            return false;
        }
        if (email === ""){
            alert("Campo obigatório!");
            return false;
        } 
        if (idade === ""){
           alert("Campo obigatório!");
            return false;
        }
        if (peso === ""){
            alert("Campo obigatório!");
            return false;
        }
        if (telefone === ""){
            alert("Campo obigatório!");
            return false;
        }
        if (cidade === ""){
            alert("Campo obigatório!");
            return false;
        }
        if (estado === ""){
            alert("Campo obigatório!");
            return false;
        }
        if (tipoSanguineo === ""){
            alert("Selecione um tipo sanguineo!");
            return false;
        }

        if (nome.length < 3) {
            alert("Nome inválido");
            return false;
        }
        if (sobrenome.length < 3){
            alert("Sobrenome inválido");
            return false;
        }
        if (!email.includes("@")){
            alert("Email inválido!");
            return false;
        }
        if (telefone.length < 8) {
            alert("Número de telefone inválido!");
            return false;
        }
        if (isNaN(telefone)) {
            alert("Informe um número de telefone válido!");
            return false;
        }
        if (idade < 16) {
            alert("Você ainda é muito novo para doar sangue!");
            return false;
        }
        if (peso < 50) {
            alert("Você precida ter mais de 50kg para poder doar sangue!");
            return false;
        }

        let cadastro = {
            nome,
            sobrenome,
            email,
            idade,
            peso,
            tipoSanguineo,
            telefone,
            cidade,
            estado
        };

        dados.push(cadastro);

        console.log(dados);

            document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso ! <br>" + "Total cadastrados: " + dados.length;

        return true;

    }
        validarFormulario();
});