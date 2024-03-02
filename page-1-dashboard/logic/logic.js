document.addEventListener("DOMContentLoaded", () => {

    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);

    var color = rootStyles.getPropertyValue('--color');

    var porcentagem1 = document.querySelector('#porcentagem-grafico-1').innerHTML;

    if (parseFloat(porcentagem1.replace('%', '')) >= 0) {
        test = true
    } else {
        test = false
    }
});