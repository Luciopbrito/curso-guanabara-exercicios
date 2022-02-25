'use strict'

const txtn = document.querySelector('input#txtn');
const btn_add = document.getElementsByTagName('input')[1];
const box_select = document.querySelector('select#txtadd');
const btn_finish = document.getElementsByTagName('input')[2]; 
const res = document.querySelector('div.res');

let listAdd = []

btn_add.addEventListener('click', () => {
    verificar(Number(txtn.value))
})

function verificar (num_add) {
    if (num_add == "" || num_add > 100 || num_add < 1 || listAdd.indexOf(num_add) != -1) {
        alert('[ERRO] Valor inválido, ou já inserido na linha')
    } else {
        //criando elemento option com a posição dentro da array.
        listAdd.push(num_add);
        let pos_listAdd = listAdd.indexOf(num_add);
        let op = document.createElement('option');
        op.innerText = `Valor ${listAdd[pos_listAdd]} adicionado`
        box_select.appendChild(op);
        res.innerHTML = ''
    }
}

btn_finish.addEventListener('click', finalizar);

function finalizar() {
    listAdd.sort();
    
    let soma = () => {
        let total = 0;
        for (let pos in listAdd) {
            total = total + listAdd[pos];
        }
        return total;
    }

    let media = () => soma() / listAdd.length;

    res.innerHTML += `<p>Ao todo, temos ${listAdd.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${listAdd[listAdd.length - 1]}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${listAdd[0]}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma()}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media()}.</p>`;
}