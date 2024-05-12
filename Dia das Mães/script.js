    let indexAtual = 0; // Inicialmente, exibindo a primeira imagem
    let numero = 0; // Inicialmente, exibindo a primeira imagem
    
    var botao = document.querySelector("#botao");
    function mostrarProximaImagem() {
        var botao = document.querySelector("#botao");
        var titulo = document.querySelector("#titulo");
        
        botao.style.backgroundColor = "#ffffff3b";
        botao.style.color = "#ffffff";
        botao.style.borderColor = "#ffffff";
        titulo.style.display = "none";
        


        const imagens = document.querySelectorAll('.imagem');
        
        // Esconde a imagem atual
        imagens[indexAtual].style.display = 'none';
    
        // Avança para a próxima imagem
        indexAtual++;
        if (indexAtual >= imagens.length) {
        indexAtual = 0; // Volta para a primeira imagem se chegou ao final
        }
    
        // Exibe a próxima imagem
        imagens[indexAtual].style.display = 'block';
    }

