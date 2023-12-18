// Display the current day and time at the top of the calender when a user opens the planner.
function currentDayTime (){
    var dayTime = dayjs().format("dddd, MMMM Do | HH:mm:ss");
    $("#currentDay").text(dayTime);
}
// Update time every second
setInterval(currentDayTime, 1000)

var currentHour = dayjs().format("HH");
console.log(currentHour);

// Color-code each timeblock based on past, present, and future
$(".time-block").each(function(){
    var timeId = this.id;
    console.log(timeId);
    if(currentHour > timeId){
        $(this).children("textarea").addClass("past");
    }
    else if(currentHour === timeId){
        $(this).children("textarea").addClass("present");
    }
    else {
        $(this).children("textarea").addClass("future");
    }
});

// Save the event in local storage when the save button is clicked in that timeblock.
// Add event listener to the save button
$(".saveBtn").on("click", function(){
    var timeBlockId = $(this).parent().attr('id');
    console.log(timeBlockId);
    var textEntry = $(this).siblings(".description").val();
    console.log(textEntry);
    localStorage.setItem(timeBlockId, textEntry);
})

// Read data from local storage and persist events between refreshes of a page
$(".time-block").each(function(){
    var textEntry = localStorage.getItem(this.id);
    console.log(textEntry);
    $(this).children(".description").val(textEntry);
})