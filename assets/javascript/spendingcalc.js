//Stats Variables
let spins = 0;
let spending = 0;
//Items Variables
let milSpec = 0;
let restricted = 0;
let classified = 0;
let covert = 0;
let exceedinglyRare = 0;

//Stats Tracker
function renderStats(){
    document.getElementById("spins").innerHTML = spins;

    document.getElementById("spending").innerHTML = spending;

    document.getElementById("milSpec").innerHTML = milSpec;

    document.getElementById("restricted").innerHTML = restricted;

    document.getElementById("classified").innerHTML = classified;

    document.getElementById("covert").innerHTML = covert;

    document.getElementById("exceedinglyRare").innerHTML = exceedinglyRare;
}

//call render when page loads
renderStats();

//Event listener to spin button
document.getElementById("btn csgo-spin").addEventListener("click", spin);

//Event listener to auto calculate button
document.getElementById("btn csgo-auto-spin").addEventListener("click", autoSpin);

//spin function
function spin (){
    // generate one random number from 4000
    let randomNumber = Math.floor(Math.random() * 4001);
        if(randomNumber <= 3218){
            milSpec ++;
        }
        else if(randomNumber > 3218 && randomNumber <= 3842){
            restricted ++;
        }
        else if(randomNumber > 3842 && randomNumber <= 3955){
            classified ++;
        }
        else if(randomNumber > 3955 && randomNumber <= 3988){
            covert ++;
        }
        else{
            exceedinglyRare ++;
            congratsMessage();
        }
    spins++;
    spending +=2;

    renderStats();
}

//auto spin until unlocks a Special / Exceedingly Rare Item
function autoSpin(){
    let randomNumber = Math.floor(Math.random() * 4001);
        do{
            spin();
        }
        while (exceedinglyRare === 0);
}

//Message for when one unlocks a Special / Exceedingly Rare Item
function congratsMessage(){
    const congratsMessage = document.getElementById("message");
        congratsMessage.textContent += `Hooray! You managed to uncase a Special Item. You would have had to open: ${spins + 1} cases and spend £${spending + 2}.`; 
}