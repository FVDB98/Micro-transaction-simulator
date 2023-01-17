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

//add event listener to spint button
document.getElementById("btn csgo-spin").addEventListener("click", spin);

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
            rareItemAlert();
        }
    spins++;
    spending +=2;

    renderStats();
}

document.getElementById("btn csgo-auto-spin").addEventListener("click", autoSpin);

//auto spin until rare Item
function autoSpin(){
    let randomNumber = Math.floor(Math.random() * 4001);
        do{
            spin();
        }
        while (exceedinglyRare === 0);
}

function rareItemAlert (){
    if(exceedinglyRare === 1){
        alert(`Congrats! You managed to uncase a special Item. This would have cost you: £${spending}`);
    }
}