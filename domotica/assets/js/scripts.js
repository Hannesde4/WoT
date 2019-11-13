const light1 = document.getElementById("light1");
const light2 = document.getElementById("light2");
const light3 = document.getElementById("light3");
const light4 = document.getElementById("light4");

// Get the element, add a click listener on the button
light1.addEventListener("click", (e) => {
	if(e.target.className === "light-off"){
        e.target.classList.remove("light-off");
        e.target.classList.add("light-on");
        e.target.innerHTML = 'Licht 1 uitzetten';
        matrix[19] = 1;
    }else{
        e.target.classList.remove("light-on");
        e.target.classList.add("light-off");
        e.target.innerHTML = 'Licht 1 aanzetten';
        matrix[19] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
light2.addEventListener("click", (e) => {
	if(e.target.className === "light-off"){
        e.target.classList.remove("light-off");
        e.target.classList.add("light-on");
        e.target.innerHTML = 'Licht 2 uitzetten';
        matrix[23] = 1;
    }else{
        e.target.classList.remove("light-on");
        e.target.classList.add("light-off");
        e.target.innerHTML = 'Licht 2 aanzetten';
        matrix[23] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
light3.addEventListener("click", (e) => {
	if(e.target.className === "light-off"){
        e.target.classList.remove("light-off");
        e.target.classList.add("light-on");
        e.target.innerHTML = 'Licht 3 uitzetten';
        matrix[43] = 1;
    }else{
        e.target.classList.remove("light-on");
        e.target.classList.add("light-off");
        e.target.innerHTML = 'Licht 3 aanzetten';
        matrix[43] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
light4.addEventListener("click", (e) => {
	if(e.target.className === "light-off"){
        e.target.classList.remove("light-off");
        e.target.classList.add("light-on");
        e.target.innerHTML = 'Licht 4 uitzetten';
        matrix[47] = 1;
    }else{
        e.target.classList.remove("light-on");
        e.target.classList.add("light-off");
        e.target.innerHTML = 'Licht 4 aanzetten';
        matrix[47] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
document.getElementById("lightAllOff").addEventListener("click", (e) => {
    light1.classList.add("light-off");
    light1.classList.remove("light-on");
    light2.classList.add("light-off");
    light2.classList.remove("light-on");
    light3.classList.add("light-off");
    light3.classList.remove("light-on");
    light4.classList.add("light-off");
    light4.classList.remove("light-on");
    light1.innerHTML = 'Licht 1 aanzetten';
    light2.innerHTML = 'Licht 2 aanzetten';
    light3.innerHTML = 'Licht 3 aanzetten';
    light4.innerHTML = 'Licht 4 aanzetten';
    matrix[19] = 0;
    matrix[23] = 0;
    matrix[43] = 0;
    matrix[47] = 0;
    updateStatus();
});

// Get the element, add a click listener on the button
document.getElementById("lightAllOn").addEventListener("click", (e) => {
    light1.classList.remove("light-off");
    light1.classList.add("light-on");
    light2.classList.remove("light-off");
    light2.classList.add("light-on");
    light3.classList.remove("light-off");
    light3.classList.add("light-on");
    light4.classList.remove("light-off");
    light4.classList.add("light-on");
    light1.innerHTML = 'Licht 1 uitzetten';
    light2.innerHTML = 'Licht 2 uitzetten';
    light3.innerHTML = 'Licht 3 uitzetten';
    light4.innerHTML = 'Licht 4 uitzetten';
    matrix[19] = 1;
    matrix[23] = 1;
    matrix[43] = 1;
    matrix[47] = 1;
    updateStatus();
});


const power1 = document.getElementById("power1");
const power2 = document.getElementById("power2");
const power3 = document.getElementById("power3");
const power4 = document.getElementById("power4");

// Get the element, add a click listener on the button
power1.addEventListener("click", (e) => {
	if(e.target.className === "power-off"){
        e.target.classList.remove("power-off");
        e.target.classList.add("power-on");
        e.target.innerHTML = 'Power 1 uitzetten';
        matrix[24] = 1;
    }else{
        e.target.classList.remove("power-on");
        e.target.classList.add("power-off");
        e.target.innerHTML = 'Power 1 aanzetten';
        matrix[24] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
power2.addEventListener("click", (e) => {
	if(e.target.className === "power-off"){
        e.target.classList.remove("power-off");
        e.target.classList.add("power-on");
        e.target.innerHTML = 'Power 2 uitzetten';
        matrix[4] = 1;
    }else{
        e.target.classList.remove("power-on");
        e.target.classList.add("power-off");
        e.target.innerHTML = 'Power 2 aanzetten';
        matrix[4] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
power3.addEventListener("click", (e) => {
	if(e.target.className === "power-off"){
        e.target.classList.remove("power-off");
        e.target.classList.add("power-on");
        e.target.innerHTML = 'Power 3 uitzetten';
        matrix[32] = 1;
    }else{
        e.target.classList.remove("power-on");
        e.target.classList.add("power-off");
        e.target.innerHTML = 'Power 3 aanzetten';
        matrix[32] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
power4.addEventListener("click", (e) => {
	if(e.target.className === "power-off"){
        e.target.classList.remove("power-off");
        e.target.classList.add("power-on");
        e.target.innerHTML = 'Power 4 uitzetten';
        matrix[60] = 1;
    }else{
        e.target.classList.remove("power-on");
        e.target.classList.add("power-off");
        e.target.innerHTML = 'Power 4 aanzetten';
        matrix[60] = 0;
    }
    updateStatus();
    console.log(matrix);
});

// Get the element, add a click listener on the button
document.getElementById("powerAllOff").addEventListener("click", (e) => {
    power1.classList.add("power-off");
    power1.classList.remove("power-on");
    power2.classList.add("power-off");
    power2.classList.remove("power-on");
    power3.classList.add("power-off");
    power3.classList.remove("power-on");
    power4.classList.add("power-off");
    power4.classList.remove("power-on");
    power1.innerHTML = 'Power 1 aanzetten';
    power2.innerHTML = 'Power 2 aanzetten';
    power3.innerHTML = 'Power 3 aanzetten';
    power4.innerHTML = 'Power 4 aanzetten';
    matrix[24] = 0;
    matrix[4] = 0;
    matrix[32] = 0;
    matrix[60] = 0;
    updateStatus();
});

// Get the element, add a click listener on the button
document.getElementById("powerAllOn").addEventListener("click", (e) => {
    power1.classList.remove("power-off");
    power1.classList.add("power-on");
    power2.classList.remove("power-off");
    power2.classList.add("power-on");
    power3.classList.remove("power-off");
    power3.classList.add("power-on");
    power4.classList.remove("power-off");
    power4.classList.add("power-on");
    power1.innerHTML = 'Power 1 uitzetten';
    power2.innerHTML = 'Power 2 uitzetten';
    power3.innerHTML = 'Power 3 uitzetten';
    power4.innerHTML = 'Power 4 uitzetten';
    matrix[24] = 1;
    matrix[4] = 1;
    matrix[32] = 1;
    matrix[60] = 1;
    updateStatus();
});

const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");

// Get the element, add a click listener on the button
door1.addEventListener("click", (e) => {
	if(e.target.className === "door-closed"){
        e.target.classList.remove("door-closed");
        e.target.classList.add("door-open");
        e.target.innerHTML = 'Deur 1 sluiten';
        matrix[0] = 1;
        matrix[1] = 1;
        matrix[2] = 1;
    }else{
        e.target.classList.remove("door-open");
        e.target.classList.add("door-closed");
        e.target.innerHTML = 'Deur 1 openen';
        matrix[0] = 0;
        matrix[1] = 0;
        matrix[2] = 0;
    }
    updateStatus();
});

// Get the element, add a click listener on the button
door2.addEventListener("click", (e) => {
	if(e.target.className === "door-closed"){
        e.target.classList.remove("door-closed");
        e.target.classList.add("door-open");
        e.target.innerHTML = 'Deur 2 sluiten';
        matrix[56] = 1;
        matrix[57] = 1;
        matrix[58] = 1;
    }else{
        e.target.classList.remove("door-open");
        e.target.classList.add("door-closed");
        e.target.innerHTML = 'Deur 2 openen';
        matrix[56] = 0;
        matrix[57] = 0;
        matrix[58] = 0;
    }
    updateStatus();
});