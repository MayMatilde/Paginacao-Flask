const detalhesBtns = document.querySelectorAll('.detalhes-btn');  //querySelectorAll- retorma os elementos de uma lista (no caso os detalhes)
const detalhesDiv = document.getElementById('produto-detalhes');
const descricaoProduto = document.getElementById('descricao-produto');
const fecharDetalhes = document.getElementById('fechar-detalhes');

// funcão anônima
detalhesBtns.forEach(btn => { //Itera sobre cada botão da lista detalhesBtns
    btn.addEventListener('click', () => { // reagir a um evento do usuário, ou seja, click
        const descricao = btn.getAttribute('data-descricao'); //Obtém o valor do atributo data-descricao do botão clicado
        descricaoProduto.textContent = descricao; //Insere a descrição obtida no elemento <p> com ID descricao-produto (<p id="descricao-produto"></p>)
        detalhesDiv.classList.add('visible'); //Adiciona a classe visible ao contêiner de detalhes (detalhesDiv). Css (.produto-detalhes.visible { display: block;})
    });
});

// funcão anônima
fecharDetalhes.addEventListener('click', () => { // reagir a um evento do usuário, ou seja, click
    detalhesDiv.classList.remove('visible'); //Remove a classe visible do contêiner de detalhes (detalhesDiv). Css 
});

