let matrixArray = [];

const buildMatrix = () => {
    // getting the div with the id matrix
    const matrix = document.getElementById('matrix');

    for(i = 0; i < 64; i++){
        // inserting the matrixes in the html
        matrix.innerHTML += '<div class="cell" id="' + i + '"></div>';
        matrixArray[i] = 0;
    }
    getData();
}

buildMatrix();

// Get the element, add a click listener...
document.getElementById("matrix").addEventListener("click", (e) => {
	// e.target is the clicked element!
	// If it was a div
	if(e.target && e.target.nodeName == "DIV") {
		// div found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        e.target.classList.toggle("clicked");

        if(matrixArray[e.target.id] === 1){
            matrixArray[e.target.id] = 0;
        }else{
            matrixArray[e.target.id] = 1;
        }
        console.log(e.target.id);
        console.log(matrixArray);
	}
});

document.getElementById("saveCharacter").addEventListener("click", () => {
    saveData(matrixArray);
    console.log(matrixArray);
});

const buildSavedMatrix = (data, id) => {
    // getting the div with the id matrix
    const element = document.getElementById('collection');
    character = "<div class='mini-matrix' id='"+ id + "'>"; 
    for(i = 0; i < 64; i++){
        if (data[i] == 1 ){
            character += "<div class='cell clicked "+ id + "'></div>";
        }else{
            character += "<div class='cell "+ id + "'></div>";
        }
    }
    character += "</div>";
    element.innerHTML += character;
}

// Get the element, add a click listener...
document.getElementById("collection").addEventListener("click", (e) => {
	// e.target is the clicked element!
	// If it was a div
	if(e.target && e.target.nodeName == "DIV") {
		// div found!  Output the ID of the parent div!
        console.log(e.target.parentNode.id);
        let key = e.target.parentNode.id;
        // get the data from local storage and store it in a variable
        let storage = localStorage.getItem(key);
        // convert the string data to an array
        let array = JSON.parse("[" + storage + "]");
        console.log(array);
        // change the displayed character on the raspberry pi
        setCharacter(array);
	}
});