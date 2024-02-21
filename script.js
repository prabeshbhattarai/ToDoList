const inputBox = document.getElementById("input-box"); // This line grabs an HTML element with the id "input-box" and stores it in a variable called inputBox. 
//This is typically an input field where users can type their tasks.
const listContainer = document.getElementById("list-cobtainer");

function addTask(){
    if(inputBox.value ===""){
        alert("Please enter a task");
    }else{
        let li = document.createElement("li"); //This creates a new list item (<li>) element.
        li.innerHTML = inputBox.value; //This sets the content of the newly created list item (<li>) to the value that the user typed into the input box.
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);