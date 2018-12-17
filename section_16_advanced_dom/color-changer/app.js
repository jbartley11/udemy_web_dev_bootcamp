var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function(){
    console.log("click");
    document.body.classList.toggle("purple");
    
    // back.className = "b-purple";
    // if(button.className === "btn-white"){
    //     button.className = "btn-purple";
    // } else {
    //     button.className = "btn-white";
    // }
})