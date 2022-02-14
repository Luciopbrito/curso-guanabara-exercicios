'use strict'

const inicio = document.querySelector('input#txtinicio');
const fim = document.querySelector('input#txtfim');
const passo = document.querySelector('input#txtpasso');
const res = document.querySelector('div.res')

function contador () {
    if (inicio.value == '' && fim.value != '') {
        res.innerHTML= 'Impossível contar'
    }else if(inicio.value == '') {
        alert('[ERRO] Valor inválido');
        inicio.focus();
    } else if (fim.value == '') {
        alert('[ERRO] Valor inválido');
        fim.focus();
    } else if (passo.value == '') {
        alert('[ERRO] Valor inválido');
        passo.focus();
    }else if (passo.value <= 0 ) {
        alert('[ERRO] Passo inválido! considerando PASSO = 1');

        let i  = Number(inicio.value);
        let f = Number(fim.value);
        let p = 1;

        if (i > f)  {
            res.innerHTML = ''
            for (let c = i; c >= f ; c += p) {
                res.innerHTML += `&#128073 ${c}`;
            }
        } else {
            res.innerHTML = ''
            for (let c = i; c <= f ; c += p) {
                res.innerHTML += `&#128073 ${c}`;
            }
        }
        res.innerHTML += '&#128681' 
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (c > f)  {
            res.innerHTML = ''
            for (let c = i; c >= f ; c += p) {
                res.innerHTML += `&#128073 ${c}`;
            }
        } else {
            res.innerHTML = ''
            for (let c = i; c <= f ; c += p) {
                res.innerHTML += `&#128073 ${c}`;
            }
        }
        res.innerHTML += '&#128681' 
    }
}