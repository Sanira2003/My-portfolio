// nav bar
const icons = document.querySelectorAll(".iocn-container");
const linksContainer = document.querySelector(".links-container");
const linksContainerRomever = document.querySelector(".links-container-remover");
const links = document.querySelectorAll(".links");

icons.forEach(icon => {
    icon.addEventListener("click", (event) => {
        icons.forEach(icon => {
            icon.classList.toggle("extended");
        });
        linksContainer.classList.toggle("extended");
        linksContainerRomever.classList.toggle("extended");
    })
});

links.forEach(link => {
    link.addEventListener("click", (event) => {
        if(linksContainer.classList.contains("extended")) {
            icons.forEach(icon => {
                icon.classList.toggle("extended");
            });
            linksContainer.classList.toggle("extended");
            linksContainerRomever.classList.toggle("extended");
        }
})
})

linksContainerRomever.addEventListener("click", (event) => {
    icons.forEach(icon => {
            icon.classList.toggle("extended");
    });
    linksContainer.classList.toggle("extended");
    linksContainerRomever.classList.toggle("extended");
});



// auto typing
let currentRoleIndex = 1;
const text = document.getElementById("typing-text");
const roles = ["Web Developer.","Designer.", "Programmer."];

function typingText() {
  text.innerText = roles[currentRoleIndex];
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

setInterval(typingText, 6000);

// projects

const project1 = document.getElementById("first-project");
const project2 = document.getElementById("second-project");
class Project {
    constructor(imageLink, name1, name2, link) {
        this.imageLink = imageLink;
        this.name1 = name1;
        this.name2 = name2;
        this.link = link;
    }
}

const projects = [
    new Project('portfolio.png','portfolio','website',''), 
    new Project('html.jpg', 'html', 'tutorial', ''),
    new Project('css.jpg', 'css', 'tutorial', '')
];

function createProjectInnerHtml(project) {
    return (
        `<div class="project-image">
            <img src="assets/images/project images/${project.imageLink}" alt="${project.imageLink}">
        </div>
        <div class="project-description">
            <div class="project-link">
                <a href="${project.link}" class="text">click here to visit</a>
                <a href="${project.link}" class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </a>
            </div>
            <div class="project-name">
                <div>${project.name1}</div>
                <div>${project.name2}</div>
            </div>
        </div>`
    )
}

let index = 1;

function indexIncrease() {
    return ((index + 1) % projects.length);
}

function indexDecrease() {
    return ((index - 1 + projects.length) % projects.length);
}

function nextProject() {
    clearInterval(intervalId);
    index = indexIncrease();
    project1.innerHTML = createProjectInnerHtml(projects[index]);
    project2.innerHTML = createProjectInnerHtml(projects[indexIncrease()]);
    intervalId = setInterval(showProjects, 4000);
}

function prevProject() {
    clearInterval(intervalId)
    index = indexDecrease();
    project1.innerHTML = createProjectInnerHtml(projects[index]);
    project2.innerHTML = createProjectInnerHtml(projects[indexIncrease()]);
    intervalId = setInterval(showProjects, 4000);
}



function showProjects() {
    project1.innerHTML = createProjectInnerHtml(projects[index]);
    project2.innerHTML = createProjectInnerHtml(projects[indexIncrease()]);
    index = indexIncrease(); 
}

let intervalId = setInterval(showProjects, 4000);
