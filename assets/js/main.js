const icons = document.querySelectorAll(".iocn-container");
const linksContainer = document.querySelector(".links-container");
const linksContainerRomever = document.querySelector(".links-container-remover");

icons.forEach(icon => {
    icon.addEventListener("click", (event) => {
        icons.forEach(icon => {
            icon.classList.toggle("extended");
        });
        linksContainer.classList.toggle("extended");
        linksContainerRomever.classList.toggle("extended");
    })
});

linksContainerRomever.addEventListener("click", (event) => {
    icons.forEach(icon => {
            icon.classList.toggle("extended");
    });
    linksContainer.classList.toggle("extended");
    linksContainerRomever.classList.toggle("extended")
});