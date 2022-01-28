const BOTAO = document.getElementsByTagName('input')[3];
BOTAO.addEventListener('click', verificarIdadeSexo);
let ano_nasc = document.getElementById('txtnasc');
let ano_atual = new Date().getFullYear();
let sexm = document.getElementById('txtsexm');
let sexf = document.getElementById('txtsexf');

function verificarIdadeSexo() {
    if (ano_nasc.value == '') {
        alert('[ERRO] Ano inválido');
        document.getElementById('txtnasc').focus();
    } else if (ano_nasc.value >= ano_atual) {
        alert('[ERRO] Ano inválido');
        document.getElementById('txtnasc').value = '';
        document.getElementById('txtnasc').focus();
    } else if (ano_nasc.value.length < 4 || ano_nasc.value.length > 4) {
        alert('[ERRO] Ano Inválido');
        document.getElementById('txtnasc').value = '';
        document.getElementById('txtnasc').focus();
    } else if (sexf.checked == false && sexm.checked == false) {
        alert('[ERRO] Selecione o sexo');
    } else if (sexm.checked == true) {
        resultado(ano_atual - Number(ano_nasc.value), 0); 
    } else if (sexf.checked == true) {
        resultado(ano_atual - Number(ano_nasc.value), 1);
    }
}