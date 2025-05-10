function saveTask(){
    console.log("button clicked");

    displayTask(task);


    //get values from fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

function displayData(){
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net", 
        success: function(response){console.log(response);}, 
        error:function(error){console.log("Error", error);}
}); 
}

    displayTask(task);
    let task = new Task(title, description, color, date, status, budget);
    console.log(task); 
    
    displayTask(data);

    //save logic
    $.ajax({
        type: "post",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/", 
    
        data: JSON.stringify(task), 
        contentType: "application/json", 
        success: function(response){console.log(response);}, 
        error:function(error){console.log("Error", error);}
    }); 

}

//displayTask(task);

function loadTasks(){
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net/api/tasks", 
        success: function(response){
            let data = JSON.parse(response);
            console.log(data);
            for(let i=0;i<data.length;i++)
            {
            displayTask(data[i]);
            }
        },
        error: function(error){console.log("Error",error);}
        });
}
    
function testRequest(){
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net", 
        success: function(response){console.log(response);}, 
        error:function(error){console.log("Error", error);}
    }); 

    displayTask(task);
}

function displayTask(task){
    let syntax = `
        <div class="task-container" style="border-color:${task.color}">
            <div class="task">
                <div class="task-information">
                    <h5>${task.title}</h5>
                    <p>${task.description}</p>
                </div>

                <div class="task-status">${task.status}</div>

                <div class="task-date-budget">
                    <span>${task.date}</span>
                    <span>${task.budget}</span>
                </div>
            </div>
        </div>
    `

    $("#list").append(syntax);
    displayTask(task);
}

function init() {
    $("#btnSave").click(saveTask);
    //load data
    loadTasks();
    //hook events
}

window.onload = init;