document.addEventListener("DOMContentLoaded", function () {

    const papers = document.querySelectorAll(".paper");

    papers.forEach(paper => {
        paper.addEventListener("click", function () {

            // cerrar todos
            papers.forEach(p => {
                if (p !== paper) {
                    p.classList.remove("active");
                }
            });

            // abrir/cerrar el clickeado
            paper.classList.toggle("active");
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".item");
    if (!items.length) return;

    const total = items.length;
    const radio = 235;

    let index = 0;

    function posicionar() {
        items.forEach((item, i) => {
            const angulo = ((i - index) / total) * 2 * Math.PI - Math.PI / 2;

            const x = Math.cos(angulo) * radio;
            const y = Math.sin(angulo) * radio;

            const size = 115; // debe coincidir con el width en CSS
            const offset = size / 2;

            item.style.left = `calc(50% + ${x}px - ${offset}px)`;
            item.style.top  = `calc(50% + ${y}px - ${offset}px)`;
        });
    }

    function rotar() {
        index++;
        posicionar();
    }

    const boton = document.querySelector(".btn-rotar");
    if (boton) {
        boton.addEventListener("click", rotar);
    }

    posicionar();

});