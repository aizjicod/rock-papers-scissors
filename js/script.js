// game structure
const scissor = document.querySelector(".scissors-img");
const paper = document.querySelector(".paper-img");
const rock = document.querySelector(".rock-img");
const container = document.querySelector(".second__options");
const h3 = document.getElementById("warrior");
let result = document.querySelectorAll(".result")



let warrior = undefined;
let contricant = undefined;

scissor.addEventListener("click", ()=>{
    scissor.style.animation = "scales 1s";
    warrior = "scissor";
    paper.style.display = "none";
    rock.style.display = "none";
    h3.textContent = `you had selected ${warrior}`;
    figth();
});
paper.addEventListener("click", ()=>{
    paper.style.animation = "scales 1s";
    warrior = "paper"
    scissor.style.display = "none";
    rock.style.display = "none";
    h3.textContent = `you had selected ${warrior}`;
    figth();
});
rock.addEventListener("click", ()=>{
    rock.style.animation = "scales 1s";
    warrior = "rock"
    paper.style.display = "none";
    scissor.style.display = "none";
    h3.textContent = `you had selected ${warrior}`;
    figth();
});

const figth = ()=>{
    let randomNumber =  Math.floor( Math.random()*100);
    if(randomNumber<33){
        result[0].style.display = "block";
        contricant = "paper";
    }else if(randomNumber>33 && randomNumber<67){
        result[1].style.display = "block";
        contricant = "rock";
    }else{
        result[2].style.display = "block";
        contricant = "scissor";
    }
    desicion();
}

const desicion = ()=>{
    switch (warrior) {
        case "rock":
            switch (contricant) {
                case "rock":
                    console.log("draw")
                    break;
                case "paper":
                    console.log("loss")
                    break;
                case "scissor":
                    console.log("win")
                    break;
            }
        break;
        case "paper":
            switch (contricant) {
                case "rock":
                    console.log("win")
                    break;
                case "paper":
                    console.log("draw")
                    break;
                case "scissor":
                    console.log("loss")
                    break;
            }
        break;
        case "scissor":
            switch (contricant) {
                case "rock":
                    console.log("loss")
                    break;
                case "paper":
                        console.log("win")
                        break;
                case "scissor":
                    console.log("draw")
                    break;
            }
        break;
    
    }
}


