let main=document.querySelector("#main");
let crsr=document.querySelector(".cursor");


main.addEventListener("mousemove",function(details){ //parameter of mousemove
crsr.style.left=details.x+"px";
crsr.style.top=details.y+"px"; //passs size in pixels/%, otherwise dont work 

})