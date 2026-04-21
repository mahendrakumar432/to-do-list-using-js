let form = document.getElementById('form');

const alltasks = [];

const validateform = (event) => {
    event.preventDefault();

    let display = document.getElementById('display');
    let userinput = document.getElementById('userinput');

    if (userinput.value.trim() === "") return;

    alltasks.push(userinput.value);

    display.innerHTML = alltasks.map((task, index) =>
        `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`
    ).join("");

    userinput.value = "";
};

form.addEventListener('submit', validateform);

// Delete function
function deleteTask(index) {
    alltasks.splice(index, 1);
    document.getElementById('display').innerHTML = alltasks.map((task, i) =>
        `<li>${task} <button onclick="deleteTask(${i})">Delete</button></li>`
    ).join("");
}