const cards=document.querySelectorAll(".card");
cards.forEach((card)=>card.addEventListener("click",flip));
var isFlipped=false;
var firstCard;
var secondCard;
 function flip(){
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped=true;
        firstCard=this;
    }
    else{
        secondCard=this;
        checkIt();
    }
}
function checkIt(){
   if(firstCard.dataset.image===secondCard.dataset.image)
    {success();}
   else
    {fail();}
}
function success(){
    window.open("success.html");
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
    reset();
}
var fail=()=>{
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },1000)
}
function reset(){
    isFlipped=false;
    firstCard=null;
    secondCard=null;
}
(function shuffle(){
    cards.forEach((card)=>{
        var index =Math.floor(Math.random()*16);
        card.style.order = index;
    })
})();