let inputDOM = document.querySelector("#task")
inputDOM.addEventListener("submit", addTask)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function addTask(event) {

    const TASK_NAME = document.querySelector("#task")
    if (TASK_NAME.value) {
        addItem(TASK_NAME.value)
        TASK_NAME.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "success"
        )
    }

}

let ListDOM = document.querySelector("#list")
const addItem = (task) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${task}`
    ListDOM.appendChild(liDOM)
}


let list = document.querySelector("ul")
list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
}, false);

let myNodeList = document.getElementsByTagName("li")
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function addTask() {
    let liDOM = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let x = document.createTextNode(inputValue);
    liDOM.appendChild(x);


    if (inputValue.trim() == "") {
        $('.error.toast').toast("show")

    } else {
        let task = document.querySelector("#task")
        document.getElementById("list").appendChild(liDOM);
        $('.success').toast("show")
    }
    document.getElementById("task").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}

