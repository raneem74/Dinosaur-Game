let container = document.getElementById("container");
let dino = document.getElementById("dino");
let block = document.getElementById("block");
let road = document.getElementById("road");
let cloud = document.getElementById("cloud");
let score = document.getElementById("score");
let gameOver = document.getElementById("gameOver");

let scoreInterval = null;
let currentScore = 0;

//calculate score 
let raiseScore = ()=>{
    currentScore++;
    score.innerHTML = `score <b>${currentScore}</b>`;
}


let start = false ;
//start game
window.addEventListener("keydown",(key)=>{ 
    if (key.code == "Space")
    {
        if (!start)
        {
            console.log("im in start");
            gameOver.style.display="none";
            dino.style.bottom="28px";
            block.style.right="-20px";
            block.classList.add("blockActive");
            road.style.animation = "animateRoad 1.5s linear infinite"; 
            cloud.style.animation = "animateCloud 50s linear infinite";
            scoreInterval = setInterval(raiseScore,200);
            start=!start;
        }
        else 
        {
            
                dino.classList.add("dinoActive");
                setTimeout(()=>dino.classList.remove("dinoActive"),500)
        }
    }
})

setInterval(()=>{
    let dinBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    var testdino = dinBottom;
    var testclock = blockLeft;
    if (blockLeft<=20 && dinBottom <= 100 )
    {
        clearInterval(scoreInterval);
        gameOver.style.display="block";

        // Save the current positions of dino and block
        let dinoBottom = getComputedStyle(dino).getPropertyValue("bottom");
        let blockright = getComputedStyle(block).getPropertyValue("right");

        block.classList.remove("blockActive");
        console.log("block left is"+ blockLeft);
        road.style.animation = "none"; 
        cloud.style.animation = "none";
        currentScore=0;
        start = false ;

        // Apply the saved positions to dino and block
        dino.style.bottom = dinoBottom;
        block.style.right = blockright;
    }


} ,10)