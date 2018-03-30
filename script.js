var sectionButtons = document.querySelectorAll(".element");
var visible = document.querySelector(".boxes");
console.log(visible);
visible.style.display="block";
for(var i =0 ;i<sectionButtons.length;i++){
    sectionButtons[i].addEventListener("click",function(){
        console.log(this.getAttribute("ref"));
        masquer(this.getAttribute("ref"));
    });
}
function masquer(show){
    visible.style.display="none";
    visible = document.querySelector("#"+show);
    console.log("#"+show);
    visible.style.display="block";
}

