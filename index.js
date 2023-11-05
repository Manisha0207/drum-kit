// Detecting button press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

//Detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Making sound
function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:console.log()
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
//MINIFIED VERSION
//for(var numberOfDrumButtons=document.querySelectorAll(".drum").length,i=0;i<numberOfDrumButtons;i++)document.querySelectorAll("button")[i].addEventListener("click",function(){var e=this.innerHTML;makeSound(e),buttonAnimation(e)});function makeSound(e){switch(e){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/crash.mp3").play();break;case"l":new Audio("sounds/kick-bass.mp3").play();break;default:console.log()}}function buttonAnimation(e){var n=document.querySelector("."+e);n.classList.add("pressed"),setTimeout(function(){n.classList.remove("pressed")},100)}document.addEventListener("keypress",function(e){makeSound(e.key),buttonAnimation(e.key)});