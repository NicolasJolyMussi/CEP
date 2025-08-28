function Salvar() {
    const nome = prompt("Nome");
    const nota1Text = prompt("Nota1");
    const nota2Text = prompt("Nota2");
    const turma = prompt("Turma");
    const periodo = prompt("Periodo");

    //Vidacao
    //Tratamento de dados

    const nota1 = Number(nota1Text);
    const nota2 = Number(nota2Text);
    const somarnotas = (nota1 + nota2);
    const media = (somarnotas / 2);



    let aluno = {
        "nome": nome,
        "nota1Bim": nota1,
        "nota2Bim": nota2,
        "turma": turma,
        "periodo": periodo,
        "media": media,
        "aprovado": true
    };

    console.log(aluno);
}



function BuscarCEP() {
    const inputCEP = document.querySelector("#CEP");
    const inputCidade = document.querySelector("#Cidade");
    const inputBairro = document.querySelector("#Bairro");
    const inputEstado = document.querySelector("#Estado");
    const inputRua = document.querySelector("#Rua");
    const inputNumero = document.querySelector("#Numero");
    const CEP = inputCEP.value;
    //https://brasilapi.com.br/api/cep/v2/{cep}

    axios.get(`https://brasilapi.com.br/api/cep/v2/{cep}${CEP}`)
        .then(function (response) {
            console.log(response.data);

            inputCidade.value = response.data.city;
            inputBairro.value = response.data.neighborhood;
            inputEstado.value = response.data.state;
            inputRua.value = response.data.street;
            inputNumero.focus();
        })

        .catch(function (error) {
            console.error(error);
        })
}


function BuscarAlunos() {
    axios.get('/aluno.json')
        .then(function (response) {
            // manipula o sucesso da requisição
            const aluno = response.data;


            for (let i = 0; i < BuscarAlunos.length; i++) {
                console.log(aluno[i].nome);
            }

            console.log("--forEach")
            aluno.forEach(aluno => {
                console.log(aluno.nome);
            });


            console.log("--forEach")
            aluno.forEach(aluno => {
                console.log(aluno.nome);
            });
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })

}


/*---------------------------------------------------------------------------*/

/*
CRIAR ATRIBUTOS PARA AMAZENAR 
TURMA, PERIODO E MEDIA
MOSTRAR NA TABELA ESSAS INFORMAÇÕES
*/
