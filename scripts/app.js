function saveTask()
{
    console.log("button clicked")
}

function init() {
    //load data

    //hook events

    $("#btnSave").click(saveTask);
}


//Why I am running the init function...
window.onload = init; //this will run when poage is loaded - 
// when the html and the css are loaded the logic will run
