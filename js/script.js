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
    const radio = 265;

    let index = 0;

    function posicionar() {
        items.forEach((item, i) => {
            const angulo = ((i - index) / total) * 2 * Math.PI - Math.PI / 2;

            const x = Math.cos(angulo) * radio;
            const y = Math.sin(angulo) * radio;

            item.style.left = "50%";
            item.style.top  = "50%";

            item.style.setProperty('--tx', `${x}px`);
            item.style.setProperty('--ty', `${y}px`);

            const activoIndex = index % total;

            if (i === activoIndex) {
                item.classList.add("activo");
            } else {
                item.classList.remove("activo");
            }
        });
    }

    const boton = document.querySelector(".btn-rotar");
    const resetBtn = document.querySelector(".btn-reset");
    const panel = document.querySelector(".panel-info");
    const contenedor = document.querySelector(".circulo-container");

    const textos = [
        "El creador: origen de la idea.",
        "Receptor PAC1: base científica.",
        "Opinión pública: impacto social.",
        "Japón: contexto del descubrimiento.",
        "Cultura cómic: narrativa visual.",
        "Héroes: simbolismo del cambio.",
        "Redes: difusión moderna."
    ];

    function rotar() {
        index++;
        posicionar();

        // mover carrusel
        contenedor.classList.add("mover");

        // mostrar panel
        panel.classList.add("activo");

        const actual = index % total; // siempre el de arriba
        panel.innerHTML = `<p>${textos[actual] || "Nueva información"}</p>`;
    }

    if (boton) {
        boton.addEventListener("click", rotar);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            index = 0;
            posicionar();

            contenedor.classList.remove("mover");
            panel.classList.remove("activo");
            panel.innerHTML = "";
        });
    }

    posicionar();

});