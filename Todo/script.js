/* =========================
   VARIABLES
========================= */

let tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

let currentFilter = "all";


/* =========================
   DOM ELEMENTS
========================= */

const taskInput =
    document.getElementById("taskInput");

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskList =
    document.getElementById("taskList");

const emptyMessage =
    document.getElementById("emptyMessage");

const taskCount =
    document.getElementById("taskCount");

const clearCompleted =
    document.getElementById("clearCompleted");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* =========================
   SAVE TASKS
========================= */

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


/* =========================
   ADD TASK
========================= */

function addTask() {

    const text = taskInput.value.trim();


    if (text === "") {

        taskInput.focus();

        return;
    }


    const newTask = {

        id: Date.now(),

        text: text,

        completed: false

    };


    tasks.push(newTask);


    saveTasks();


    taskInput.value = "";


    taskInput.focus();


    renderTasks();

}


/* =========================
   TOGGLE TASK
========================= */

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });


    saveTasks();

    renderTasks();

}


/* =========================
   DELETE TASK
========================= */

function deleteTask(id) {

    tasks = tasks.filter(
        task => task.id !== id
    );


    saveTasks();

    renderTasks();

}


/* =========================
   CLEAR COMPLETED
========================= */

function clearCompletedTasks() {

    tasks = tasks.filter(
        task => !task.completed
    );


    saveTasks();

    renderTasks();

}


/* =========================
   FILTER TASKS
========================= */

function getFilteredTasks() {

    if (currentFilter === "pending") {

        return tasks.filter(
            task => !task.completed
        );

    }


    if (currentFilter === "completed") {

        return tasks.filter(
            task => task.completed
        );

    }


    return tasks;

}


/* =========================
   RENDER TASKS
========================= */

function renderTasks() {

    const filteredTasks =
        getFilteredTasks();


    taskList.innerHTML = "";


    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";


        filteredTasks.forEach(task => {

            const taskElement =
                document.createElement("div");


            taskElement.className =
                "task-item";


            if (task.completed) {

                taskElement.classList.add(
                    "completed"
                );

            }


            taskElement.innerHTML = `

                <button
                    class="task-check"
                    aria-label="Complete task">

                    ✓

                </button>


                <span class="task-text">
                    ${escapeHTML(task.text)}
                </span>


                <button
                    class="delete-btn"
                    aria-label="Delete task">

                    Delete

                </button>

            `;


            const checkButton =
                taskElement.querySelector(
                    ".task-check"
                );


            const deleteButton =
                taskElement.querySelector(
                    ".delete-btn"
                );


            checkButton.addEventListener(
                "click",
                () => toggleTask(task.id)
            );


            deleteButton.addEventListener(
                "click",
                () => deleteTask(task.id)
            );


            taskList.appendChild(
                taskElement
            );

        });

    }


    updateTaskCount();

}


/* =========================
   TASK COUNT
========================= */

function updateTaskCount() {

    const pendingTasks =
        tasks.filter(
            task => !task.completed
        ).length;


    taskCount.textContent =
        pendingTasks;

}


/* =========================
   HTML SECURITY
========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================
   FILTER BUTTONS
========================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentFilter =
                button.dataset.filter;


            renderTasks();

        }
    );

});


/* =========================
   EVENTS
========================= */

addTaskBtn.addEventListener(
    "click",
    addTask
);


taskInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            addTask();

        }

    }
);


clearCompleted.addEventListener(
    "click",
    clearCompletedTasks
);


/* =========================
   INITIAL LOAD
========================= */

renderTasks();