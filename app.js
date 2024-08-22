



function fazerCriptografia(){
    const texto = document.querySelector('textarea').value;
    const mensagemCriptografada = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    
    document.getElementById('default').style.display = "none";
    document.getElementById('resultado').style.display = "flex";
    const mensagem = document.getElementById('mensagem-resultado');
    mensagem.innerHTML = `<div id="mensagem">${mensagemCriptografada}</div>`;
    

}


function fazerDescriptografia(){
    const texto = document.querySelector('textarea').value;
    const mensagemDescriptografada = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    document.getElementById('default').style.display = "none";
    document.getElementById('resultado').style.display = "flex";
    const mensagem = document.getElementById('mensagem-resultado');
    mensagem.innerHTML = `<div id="mensagem">${mensagemDescriptografada}</div>`;


}


function copiar() {
    const textoCopiado = document.querySelector('#mensagem');
    const range = document.createRange();
    range.selectNodeContents(textoCopiado);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    alert('Mensagem copiada');

    try {
        document.execCommand('copy');
        // alert('Texto copiado!');
    } catch (err) {
        console.error('Falha ao copiar: ', err);
    }
}