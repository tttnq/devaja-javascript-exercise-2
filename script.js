let index = localStorage.length;
const keys = [];

function openForm(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("add-button").style.display = "none";
}

function closeForm(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("add-button").style.display = "block";

}

function addEntry(){
    const d = new Date();
    const q = document.getElementById("question").value;
    const c = document.getElementById("category").value;

    const entry = {
        date: d.getDate() + "." + d.getMonth() + "." + d.getFullYear(),
        question: q,
        category: c
    };

    index++;    

    localStorage.setItem(index, JSON.stringify(entry));
    createNewElement(entry);
}

function createNewElement(entry){
    const newItem = document.createElement("p");
    const node = document.createTextNode("[" +entry.date + "] [" + entry.category +  "] " + entry.question);
    newItem.appendChild(node);

    const parent = document.getElementById("entries");
    parent.insertBefore(newItem, parent.firstChild);
}


function loadAll(){
    document.getElementById("entries").innerHTML = '';
    const category = document.getElementById("selected-category").value;
    orderKeys();

    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let entry = JSON.parse(localStorage.getItem(key));

        if (category === "ALL") {
            createNewElement(entry);
        } else if(entry.category === category){
            createNewElement(entry);
        }
    
    }
}


function orderKeys(){
    for(let i = 0; i < localStorage.length; i++){
        if(keys.includes(localStorage.key(i))){
            continue;
        }
        keys.push(localStorage.key(i));
        keys.sort((a,b) => a - b);
    }
}