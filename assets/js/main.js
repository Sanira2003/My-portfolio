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
    linksContainerRomever.classList.toggle("extended");
});


let currentRoleIndex = 1;
const text = document.getElementById("typing-text");
const roles = ["Web Developer.","Designer.", "Programmer."];

function typingText() {
  text.innerText = roles[currentRoleIndex];
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

setInterval(typingText, 6000);


