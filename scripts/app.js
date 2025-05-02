
function sayhello() {
    console.log("Hello World");
}

function init(){
    console.log("hello im the init function");
    sayhello();
}

//specifiy why I am running the init function...

window.onload = init; //this will run when poage is loaded - 
// when the html and the css are loaded the logic will run




