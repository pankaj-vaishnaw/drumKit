var numberOfButtons=document.querySelectorAll(".drumsets").length
for(var i;i<numberOfButtons;i++){
    document.querySelectorAll(".drumsets")[i].addEventListener("click",function(){

    
        var buttonInnerHtml=this.innerHtml;
        MakeSound(buttonInnerHtml)
       
    })
}
document.addEventListener("keypress",function(event){
    MakeSound(event.key);
   
});
function MakeSound(key){
    switch(key){
        case "w":
        var d1=new Audio("./sounds/d1.mp3")
        d1.play();
        break;
        
        case "a" :
        var d2=new Audio("./sounds/d2.mp3")
        d2.play();
        break;
        
        case "s":
        var d3=new Audio("./sounds/d3.mp3")
        d3.play();
        break;
        
        case "d":
        var d4=new Audio("./sounds/d4.mp3")
        d4.play();
        break;
        
        case "j":
        var d5=new Audio("./sounds/d5.mp3")
        d5.play();
        break;
        
        case "k":
        var d6=new Audio("./sounds/d6.mp3")
        d6.play();
        break;
        
        case "l":
        var d7=new Audio("./sounds/d7.mp3")
        d1.play();
        break;
        
        default: console.log(key)
    }
}