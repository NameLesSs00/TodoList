/*
const input = document.getElementById("EnterItem");
const doneCounter = document.getElementById("done");
let counter = 1;
let doneCount = 0;

function addToTheList() {
    let inputValue = input.value.trim(); // Trim whitespace
    if (inputValue === "") {
        alert("Please enter a task."); // Notify user if input is empty
        return;
    } else {
        if (counter <= 5) {
            let itemText = document.getElementById(`Item${counter}`);
            itemText.innerHTML = `${inputValue} <button onclick="markAsDone(${counter})">Done</button>`;
            itemText.className = "showCon";
            counter++;
            input.value = ""; // Clear the input field
        } else {
            alert("List is full!");
        }
    }
}

function markAsDone(itemNumber) {
    let itemText = document.getElementById(`Item${itemNumber}`);
    itemText.style.textDecoration = "line-through"; // Strikethrough the text
    itemText.querySelector("button").disabled = true; // Disable the Done button
    doneCount++;
    updateDoneCounter();
}

function updateDoneCounter() {
    doneCounter.innerHTML = `Done (${doneCount} / 5) For Today`;
}

// Optional: Add event listener for the Enter button
document.getElementById("btnEnter").addEventListener("click", addToTheList);

// Optional: Add event listener for Enter key to trigger addToTheList
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addToTheList();
    }
});
*/

const input = document.getElementById("EnterItem");
const doneCounter = document.getElementById("done");

let counter = 1;
let doneCount = 0;

function addToTheList(){
    let inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Please enter a task."); //input is empty
        return;
    }
    else{
        if(counter <= 5){
            const itemText = document.getElementById(`Item${counter}`);
            itemText.innerHTML = `${inputValue} <button onclick="markAsDone(${counter})">Done</button>`;
            itemText.className = "showCon";
            counter++;
            input.value = "";
        }
        else{
            alert("THE LIST IS FULL!");
        }
    }

}
function markAsDone(itemNumber){
    let itemText = document.getElementById(`Item${itemNumber}`);
    itemText.style.textDecoration = "line-through";
    itemText.querySelector("button").disabled = true;
    doneCount++;
    updateDoneCounter();
}
function updateDoneCounter(){
    doneCounter.innerHTML = `Done (${doneCount} / 5) For Today`;
}

document.getElementById("btnEnter").addEventListener("click", addToTheList);

input.addEventListener("keypress",function(event) {
    if (event.key === "Enter") {
        addToTheList();
    }
});