const nTabuada = document.querySelector('input#txtn');
const select = document.querySelector('select#res');

function tabuada() {
    select.innerHTML = ''
    if (nTabuada.value == '') {
        alert('Por favor, digite um número!');
        nTabuada.focus();
    } else {
        let n = Number(nTabuada.value);
        for (let c = 1; c <= 10; c++) {
          let item = document.createElement('option');
          select.appendChild(item)
          item.text = `${n} X ${c} = ${n * c}`
          item.value = `tab${c}`
        }
    }
}