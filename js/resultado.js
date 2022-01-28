let res = document.querySelector('div.res');
// função modificando div res para representar o resultado
function resultado(idade,sexo) {
    switch (sexo) {
       case 0:
            if (idade >= 1 && idade < 10) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Homem com ${idade} anos</p><img src="./img/foto-homem-5-anos.png" alt="criança de 5 anos">`;
            } else if (idade >= 10 && idade <= 15) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Homem com ${idade} anos</p><img src="./img/foto-homem-crianca.png" alt="adolescente">`;
            } else if (idade >= 16 && idade < 30) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Homem com ${idade} anos</p><img src="./img/foto-homem-jovem.png" alt="homem jovem">`;
            } else if (idade >= 30 && idade < 65) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Homem com ${idade} anos</p><img src="./img/foto-homem-40-anos.png" alt="homem adulto">`;
            } else {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Homem com ${idade} anos</p><img src="./img/foto-homem-velho.png" alt="homem idoso">`;
            }
            break
        case 1:
            if (idade >= 1 && idade < 10) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p><img src="./img/foto-mulher-5-anos.png" alt="criança de 5 anos">`;
            } else if (idade >= 10 && idade <= 15) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p><img src="./img/foto-mulher-crianca.png" alt="adolescente">`;
            } else if (idade >= 16 && idade < 30) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p><img src="./img/foto-mulher-jovem.png" alt="mulher jovem">`;
            } else if (idade >= 30 && idade < 65) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p><img src="./img/foto-mulher-40-anos.png" alt="mulher adulta">`;
            } else {
                res.style.textAlign = 'center'
                res.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p><img src="./img/foto-mulher-velha.png" alt="mulher idosa">`;
            }
            break
        default:
            alert('[ERRO] valor inválido');
            window.location.href = 'index.html';
            break
   }
}