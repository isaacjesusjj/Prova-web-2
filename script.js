const meses = Array.from(document.querySelectorAll(".mes"));
const btnProximo = document.getElementById("proximoMes");
const btnVoltar = document.getElementById("voltarMes");
let mesAtual = 0;

function mostrarMes(posicao) {
    if (posicao < 0 || posicao >= meses.length) return;
    mesAtual = posicao;
    meses[mesAtual].scrollIntoView({ behavior: "smooth" });
}

btnProximo.addEventListener("click", function () {
    mostrarMes(mesAtual + 1);
});

btnVoltar.addEventListener("click", function () {
    mostrarMes(mesAtual - 1);
});

window.addEventListener("scroll", function () {
    meses.forEach(function (mes, indice) {
        if (mes.getBoundingClientRect().top < 180) {
            mesAtual = indice;
        }
    });
});
