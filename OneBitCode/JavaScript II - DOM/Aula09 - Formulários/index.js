const Formulario = document.getElementById('Formulario');

Formulario.addEventListener("submit", function(ev){
    ev.preventDefault() //Evita que o JavaScript atualize a pagina ao enviar o formualario
    
    const Nome = document.getElementById('Nome').value;
    const Endereco = document.getElementById('Endereco').value;
    const TipoSelect = document.getElementById('TipoSelect').value;
    const Main = document.getElementById('main').value;
    
    //const Salada = document.getElementById('salada').value;
    //Como o CHECKBOX da salada permite mais de uma opção, deve-se fazer da sguinte forma:

    let Salada = '';
    document.querySelectorAll('input[name="salada]:checked"').forEach(function(item){
        Salada += " - " + item.value;
    })

    const Observacao = document.getElementById('observacoes').value;

    console.log({
        Nome,
        Endereco,
        TipoSelect,
        Main,
        Salada,
        Observacao
    })

    

});