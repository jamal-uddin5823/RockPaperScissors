const map = new Map([
    [0,"Rock"],
    [1,"Paper"],
    [2,"Scissors"]
]);

function random(low,high){
    return parseInt(Math.random()*(high-low+1))+low;
}

let suit = document.getElementById("suite-names").onchange = function() {
    const suite = document.getElementById("suite-names").value;

    if(suite === "Rock"){
        document.getElementById("image-player").src = "Assets/RockR.png";
    }
    if(suite === "Paper"){
        document.getElementById("image-player").src = "Assets/PaperR.png";
    }
    if(suite === "Scissors"){
        document.getElementById("image-player").src = "Assets/ScissorR.png";
    }
}

const temp = document.getElementById("start-btn").onclick = function() {
    const suite = document.getElementById("suite-names").value;
    const val = random(0,2);
    const comp_suite = map.get(val);
    

    if(comp_suite === "Rock"){
        document.getElementById("image-comp").src = "Assets/RockL.png";
    }
    if(comp_suite === "Paper"){
        document.getElementById("image-comp").src = "Assets/PaperL.png";
    }
    if(comp_suite === "Scissors"){
        document.getElementById("image-comp").src = "Assets/ScissorL.png";
    }

    if(suite===comp_suite)
        document.getElementById("result").textContent = "It's a tie!😁";

    else if(suite==="Rock" && comp_suite==="Paper")
        document.getElementById("result").textContent = "You Lost!😢";
    else if(suite==="Paper" && comp_suite==="Scissors")
        document.getElementById("result").textContent = "You Lost!😢";
    else if(suite==="Scissors" && comp_suite==="Rock")
        document.getElementById("result").textContent = "You Lost!😢";

    else if(comp_suite==="Rock" && suite==="Paper")
        document.getElementById("result").textContent = "You Won!🥳";
    else if(comp_suite==="Paper" && suite==="Scissors")
        document.getElementById("result").textContent = "You Won!🥳";
    else if(comp_suite==="Scissors" && suite==="Rock")
        document.getElementById("result").textContent = "You Won!🥳";
    
    document.getElementById("replay").textContent = "Choose you suite again to replay!";
}

document.getElementById("suite-names").onclick = function() {
    document.getElementById("result").textContent = "";
    document.getElementById("image-comp").src = "Assets/Mystery.png";
    // document.getElementById("image-player").src = "Assets/Mystery.png";
}