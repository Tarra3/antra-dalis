//pasiimame HTML elementus is DOM pagal ID
const addBtn = document.getElementById("add_task"); //<button>
const list = document.getElementById("task_list"); // <ul> elementas
const taskName = document.getElementById("task_name"); // <input>
const clearTasks = document.getElementById("clear_tasks"); // <button> isvalyti visa sarasa

//kintamasis kuriame saugomos uzduotys
let tasks = [];

const showTasks = () => {
    //isvalyti buvusi rasara
    list.innerHTML = "";


    //su kiekviena uzduotimi atliksime veiksma
    //kintamasis t- masyvo elementas (uzduotis)
    tasks.forEach((t) => {
        // sukuriam nauja objekta(HTMLElement klase)
        const newTask = document.createElement("li");
        //objekto atributam priskiriame reiksmes
        newTask.className = "list-group-item";
        newTask.textContent = t;
        //nauja objekta patalpiname i DOM (saraso apacia)
        list.appendChild(newTask);

    });
}

const addTask = () => {
    //pasiimame uzduoties pavadinima
    const text = taskName.value;
    //issaugom uzduoti masyve
    tasks.push(text);

    //isvalome buvusia forma
    taskName.value = "";

    //atvaizduojami irasai
    showTasks();

    //issaugoti i localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearList = () => {
    //isvalom masyva
    tasks = [];

    //isvalyti localstorage
    localStorage.removeItem("tasks");

    //atvaizduoti is naujo
    showTasks();
}


addBtn.onclick = addTask;
clearTasks.onclick = clearList;

//pasiimame is localstorage info.
const lsTasks = localStorage.getItem("tasks")
//patikrinam ar  localstorage buvo kintamasis tasks
if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    //jei kintamasis egzistavo, tuomet atvaizduojame uzduotis
    showTasks();
}


//JSON.stringify(["a", "asd"]) sugeneruoja du elementus jsono
//is teksto i objekta: JSON.parse("");
