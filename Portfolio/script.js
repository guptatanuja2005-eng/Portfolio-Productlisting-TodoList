const projects = [
    {
        title: "Student Management System",
        description:
            "A web application for managing student records, authentication and dashboard functionality.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
        github: "https://github.com/guptatanuja2005-eng/student-management-system"
    },

    {
        title: "Rental Management System",
        description:
            "A responsive rental management application with product browsing, rentals and user-friendly interfaces.",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
        github: "https://github.com/guptatanuja2005-eng/Rental-Management-System-"
    },

    {
        title: "Task Manager",
        description:
            "A simple task management application that allows users to create, manage and complete tasks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/guptatanuja2005-eng/Task-Manager"
    },

    {
        title: "Quiz & Random Joke",
        description:
            "An interactive JavaScript application combining quiz functionality with random joke generation.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/guptatanuja2005-eng/Quiz-Random-Joke"
    }
];


function displayProjects() {

    const container =
        document.getElementById("projectsContainer");

    if (!container) return;

    container.innerHTML = projects.map(project => `

        <article class="project-card">

            <div class="project-content">

                <div class="project-number">
                    ${String(projects.indexOf(project) + 1).padStart(2, "0")}
                </div>

                <h2>${project.title}</h2>

                <p>${project.description}</p>

                <div class="tech-stack">
                    ${project.technologies.map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}
                </div>

                <div class="project-links">

                    <a href="${project.github}"
                       target="_blank"
                       class="project-btn">
                        GitHub ↗
                    </a>

                </div>

            </div>

        </article>

    `).join("");
}

displayProjects();