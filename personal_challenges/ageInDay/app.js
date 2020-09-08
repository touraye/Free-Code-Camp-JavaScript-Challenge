

 /*
 click me, taking input from user, compute the the value, create an h1 element, render the result to the flex-result in the index
 */
function ageInDays () {
    let age = prompt("Which year were you born.... my friend?");
    let myAge = (2020 - age) * 360;    
    let h1 = document.createElement("h1");    
    let textAnswere = document.createTextNode(`You're ${myAge} days old.`);
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswere);
    document.getElementById("flex-result").appendChild(h1);

}

// reset, remiving the result from the flex-result

function runAgain() {
    document.getElementById("ageInDays").remove();
}