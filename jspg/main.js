$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form-campo').validate({
        rules: {
            nome: {
                required: true,
            },
            cpf: {
                required: true,
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            cep: {
                required: true,
            },
            endereco: {
                required: true,
            },
        },
            messages: {
                nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log
        },
            invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})