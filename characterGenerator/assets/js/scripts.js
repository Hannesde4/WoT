let matrixArray = [];

const buildMatrix = () => {
    // getting the div with the id matrix
    const matrix = document.getElementById('matrix');

    for(i = 0; i < 64; i++){
        // inserting the matrixes in the html
        matrix.innerHTML += '<div class="cell" id="' + i + '"></div>';
        matrixArray[i] = 0;
    }
 
}

buildMatrix();

// Get the element, add a click listener...
document.getElementById("matrix").addEventListener("click", (e) => {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "DIV") {
		// List item found!  Output the ID!
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