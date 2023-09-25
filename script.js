const h3ElementsPortafolio = document.querySelectorAll("#portafolio h3");

h3ElementsPortafolio.forEach((element) => {
    element.addEventListener("click", () => {
        const content = element.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
