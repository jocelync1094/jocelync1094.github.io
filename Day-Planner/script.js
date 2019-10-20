var timeArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

// creating the basic framework for my planner
function makeThePlanner () {
    var tableDiv = $("<table>");
    for (var i = 0; i<timeArray.length ; i++){
    var hourRow = $("<tr>")
    hourRow.attr("class",[i]);
    var timeColumn = $("<td>" + timeArray[i] + "</td>");
    timeColumn.addClass("time=block")
    timeColumn.attr("style","background-color:white;color:black;border-bottom:solid 2px; padding: 20px");
    var eventColumn = $("<td>");
    eventColumn.attr("style","border-bottom:solid 2px");
    var saveColumn = $("<td>")
    saveColumn.addClass("saveBtn");
    saveColumn.attr("style","padding:20px")
    
    
    //my event details
    var formDiv = $("<form>");
    formDiv.addClass("form-group")
    formDiv.attr("id",[i]);
    var userInputArea = $("<textarea>");
    
    formDiv.append(userInputArea);
    eventColumn.append(formDiv);
    
    //save detail
    var saveBtn = $("<button>" + "Save" + "</button>");
    saveBtn.attr("data-index",[i]);
    saveColumn.append(saveBtn);

    hourRow.append(timeColumn);
    hourRow.append(eventColumn);
    hourRow.append(saveColumn);
    tableDiv.append(hourRow);
    }
    $(".container").append(tableDiv);
}
makeThePlanner();

// saving the input in local storage
$("button").on("click",function(){
    rowSelected = $(this).attr("data-index");
    console.log(rowSelected);
    localStorage.setItem("rowChosen",rowSelected);
    var formSelected = $("form#"+ rowSelected);
    console.log(formSelected);
    var InputArea = formSelected.children().val();
    console.log(InputArea);
    var localKey = "text" + rowSelected;
    localStorage.setItem(localKey,InputArea);   
})


//after clicking save the event is displayed
function displaySavedEvent(){
for (var i=0; i<timeArray.length;i++)
{
var key = "text"+[i];
var storedEvents = localStorage.getItem(key);
    console.log(storedEvents);
    $("form#"+ [i]).children().text(storedEvents);
}
}

displaySavedEvent();
//setting today's date
var $currentDay = $("<div>");
$currentDay.text(moment().format("MMM Do YY")); 
$("#currentDay").append($currentDay);

//getting the current hour
var hours = [9,10,11,12,1,2,3,4,5];
var currentHour = moment().hour();
if(currentHour>12){
    currentHour-=12;
}
var positionOfTime = hours.indexOf(currentHour);

//setting the color for current hour
var currentTimeRow = $("tr."+ positionOfTime );
currentTimeRow.addClass("present");

//setting the color for past hours
for (var i=0; i<positionOfTime; i++){
var pastTimeRow = $("tr." + [i]);
pastTimeRow.addClass("past");
}

//setting the color for future hours
for (var i = positionOfTime+1; i< hours.length;i++){
    var futureTimeRow = $("tr." + [i]);
    futureTimeRow.addClass("future");
}