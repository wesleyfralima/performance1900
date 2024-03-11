document.addEventListener("DOMContentLoaded", () => {

    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);

    var color = null;

    var porcentagem1 = parseFloat(document.querySelector('#porcentagem-grafico-1').innerHTML.replace('%', '').replace(',', '.'));
    var porcentagem2 = parseFloat(document.querySelector('#porcentagem-grafico-2').innerHTML.replace('%', '').replace(',', '.'));
    var porcentagem3 = parseFloat(document.querySelector('#porcentagem-grafico-3').innerHTML.replace('%', '').replace(',', '.'));

    

});

function verProtocolo(target) {
    protocolo = target.firstChild;
    alert(protocolo.innerHTML)
    window.open("https://www.google.com.br/?q=" + protocolo.innerHTML, "_blank");
}

filtrar = () => {
    const trs = document.querySelectorAll('#avisos tr:not(.header)')
    const filter = document.querySelector('#barra-pesquisa').value
    const regex = new RegExp(filter, 'i')
    const isFoundInTds = td => regex.test(td.innerHTML)
    const isFound = childrenArr => childrenArr.some(isFoundInTds)
    const setTrStyleDisplay = ({ style, children }) => {
        style.display = isFound([
            ...children // <-- All columns
        ]) ? '' : 'none' 
    }

    trs.forEach(setTrStyleDisplay)
};