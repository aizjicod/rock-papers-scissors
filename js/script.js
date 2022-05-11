// game structure
const scissor = document.querySelector(".scissors-img");
const paper = document.querySelector(".paper-img");
const rock = document.querySelector(".rock-img");
const container = document.querySelector(".second__options");
const h3 = document.getElementById("warrior");
let result = document.querySelectorAll(".result");
const btn__play = document.querySelector(".play-button");
const firstDisplay = document.querySelector(".first-display");
const secondDisplay = document.querySelector(".second-display");

let warrior = undefined;
let contricant = undefined;
const showSecondDisplay = () =>{
    firstDisplay.style.display = "none"
    secondDisplay.style.display = "flex"
};
btn__play.addEventListener("click",showSecondDisplay);


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
    // h3.textContent = `you had selected ${warrior}`;
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
                    // draw
                    document.body.style.backgroundColor = "#888";
                    h3.textContent = `it's a draw!!`;
                    break;
                case "paper":
                    // loss
                    document.body.style.backgroundColor = "#af1313";
                    h3.textContent = `you LOST!!`;
                    break;
                case "scissor":
                    //win
                    document.body.style.backgroundColor = "#181";
                    h3.textContent = `you have WIN!!`;
                    break;
            }
        break;
        case "paper":
            switch (contricant) {
                case "rock":
                     //win
                     document.body.style.backgroundColor = "#181";
                     h3.textContent = `you have WIN!!`;
                    break;
                case "paper":
                    // draw
                    document.body.style.backgroundColor = "#888";
                    h3.textContent = `it's a draw!!`;
                    break;
                case "scissor":
                    // loss
                    document.body.style.backgroundColor = "#af1313";
                    h3.textContent = `you LOST!!`;
                    break;
            }
        break;
        case "scissor":
            switch (contricant) {
                case "rock":
                    // loss
                    document.body.style.backgroundColor = "#af1313";
                    h3.textContent = `you LOST!!`;
                    break;
                case "paper":
                    //win
                    document.body.style.backgroundColor = "#181";
                    h3.textContent = `you have WIN!!`;
                    break;
                case "scissor":
                    // draw
                    document.body.style.backgroundColor = "#888";
                    h3.textContent = `it's a draw!!`;
                    break;
            }
        break;
    
    }
}
// const reload = () =>{
//     location.reload()
// };

const btn__refresh = document.getElementById("refresh");

btn__refresh.addEventListener("click",() =>{
    location.reload()
    btn__refresh.style.transform = "scale(.9)";
});

