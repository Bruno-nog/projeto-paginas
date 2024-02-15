const botoesCarrossel = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.image');
const titulos = document.querySelectorAll('.titulo')
const descricoes = document.querySelectorAll('.description')

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener('click', () => {
        
        // const botaoSelecionado = document.querySelector('.selected');
        // botaoSelecionado.classList.remove('selected');
        desativarBotaoSelecionado(); //REFATORADO
        
        botao.classList.add('selected');

        // const imagemAtiva = document.querySelector('.actived');
        // imagemAtiva.classList.remove('actived')
        esconderImagemAtiva(); //REFATORADO

        images[indice].classList.add('actived')

        const tituloAparecer = document.querySelector('.aparecer')
        tituloAparecer.classList.remove('aparecer')

        titulos[indice].classList.add('aparecer')

        const mostrarDescricao = document.querySelector('.mostrar')
        mostrarDescricao.classList.remove('mostrar')
        descricoes[indice].classList.add('mostrar')
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.actived');
    imagemAtiva.classList.remove('actived');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selected');
    botaoSelecionado.classList.remove('selected');
}

