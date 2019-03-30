var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var del = document.createElement("button");


// Add the buttons to existing list items
for (i = 0; i < listItems.length; i++ ) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove!"));
    //Add a span tag to give some breathing room b/w the content and the button
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("  -  "));
    listItems[i].appendChild(span);
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
  	}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
    // Add the buttons on creation of new list elements
	var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove!"));

    //Add a span tag to give some breathing room b/w the content and the button
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("  -  "));
    li.appendChild(span);
    li.appendChild(btn);
    //remove the added elements upon clicking the butttons newly created
    btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// If you click on the list item, it toggles the .done  class on and off
listItems.forEach(function(e){
	e.addEventListener("click",function(){
		e.classList.toggle("done");
	})
});


// Remove the list element on click using this function
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}






























