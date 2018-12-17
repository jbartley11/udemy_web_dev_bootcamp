// all li's
var lis = document.querySelectorAll("li") // returns all li's

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}


// working on first li only
// var firstLI = document.querySelector("li") // returns first li

// firstLI.addEventListener("mouseover", function(){
//     firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function(){
//     firstLI.style.color = "black";
// });