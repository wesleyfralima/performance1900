document.addEventListener("DOMContentLoaded", () => {

    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);

    var color = null;

    var porcentagem1 = parseFloat(document.querySelector('#porcentagem-grafico-1').innerHTML.replace('%', '').replace(',', '.'));
    var porcentagem2 = parseFloat(document.querySelector('#porcentagem-grafico-2').innerHTML.replace('%', '').replace(',', '.'));
    var porcentagem3 = parseFloat(document.querySelector('#porcentagem-grafico-3').innerHTML.replace('%', '').replace(',', '.'));

    

});