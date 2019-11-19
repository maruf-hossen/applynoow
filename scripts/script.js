// create references to page elements
var addButton = document.getElementById("add");
var linkInput = document.getElementById("linkField");
var linkList = document.getElementById("linkList");
var clearButton = document.getElementById("clear");


// add new link to link list
addButton.addEventListener("click", function(){
    var jobLink = linkInput.value;
    // Don't add an empty string
    if(jobLink.trim()){
        // add new link list item
        var newLink = document.createElement("LI");
        var clicableElement = document.createElement("a");
        clicableElement.setAttribute("href", jobLink.trim());
        clicableElement.setAttribute("target","_blank");
        clicableElement.innerHTML = jobLink.trim();
        var doneButton = document.createElement("button");
        doneButton.innerHTML="Done";
        doneButton.className = "doneButton";
        doneButton.addEventListener("click",applied);
        
        newLink.appendChild(clicableElement);
        newLink.appendChild(doneButton);
        // clear text input box
        linkInput.value = "";
        linkList.appendChild(newLink);
    }
    else{
        alert("link cannot be empty");
    }
});
clearButton.addEventListener("click", function(){
    linkList.innerHTML = "";
})
function applied(e){
    var jobItem = e.target.parentElement;
    linkList.removeChild(jobItem);
}

