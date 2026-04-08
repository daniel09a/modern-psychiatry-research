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