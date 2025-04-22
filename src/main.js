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
import portfolioImg from './assets/project-images/portfolio.png';
import htmlImg from './assets/project-images/html.jpg';
import cssImg from './assets/project-images/css.jpg';


const project1 = document.getElementById("first-project");
const project2 = document.getElementById("second-project");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");


class Project {
    constructor(imageLink, name1, name2, link) {
        this.imageLink = imageLink;
        this.name1 = name1;
        this.name2 = name2;
        this.link = link;
    }
}

const projects = [
    new Project(portfolioImg,'portfolio','website','#home'), 
    new Project(htmlImg, 'html', 'tutorial', ''),
    new Project(cssImg, 'css', 'tutorial', '')
];

function createProjectInnerHtml(project) {
    return (
        `<div class="project-image">
            <img src="${project.imageLink}" alt="${project.name1} ${project.name2}">
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

let index = 0;

function indexIncrease() {
    return ((index + 1) % projects.length);
}

function indexDecrease() {
    return ((index - 1 + projects.length) % projects.length);
}

function nextProject() {
    clearInterval(intervalId);
    index = indexIncrease();
    showProjects();
    intervalId = setInterval(autoShowProjects, 4000);
}

function prevProject() {
    clearInterval(intervalId)
    index = indexDecrease();
    showProjects()
    intervalId = setInterval(autoShowProjects, 4000);
}



function showProjects() {
    project1.innerHTML = createProjectInnerHtml(projects[index]);
    project2.innerHTML = createProjectInnerHtml(projects[indexIncrease()]);
    applyAnimation(project1);
    applyAnimation(project2); 
}

function autoShowProjects() {
    index = indexIncrease();
    showProjects();
}
showProjects();
let intervalId = setInterval(autoShowProjects, 4000);


prevBtn.addEventListener("click", prevProject);
nextBtn.addEventListener("click", nextProject);

function applyAnimation(element) {
    element.classList.remove("fade-in");
    void element.offsetWidth;
    element.classList.add("fade-in");
}
