var button = document.getElementsByTagName("button")[0];  //Throws an error, add [0]
button.addEventListener("click", function() {
    console.log("Clicked!!!");
})