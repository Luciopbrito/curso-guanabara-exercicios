'use scrict'

function carregar (){
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let hora = new Date().getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.scr = 'img/foto-manha.png';
        document.body.style.background = '#677AA4'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'img/foto-tarde.png';
        document.body.style.background = '#FFCD94'
    } else {
        //boa noite
        img.src = 'img/foto-noite.png';
        document.body.style.background = '#192346'
    }
}