// Display the current day and time at the top of the calender when a user opens the planner.
function currentDayTime (){
    var dayTime = dayjs().format("dddd, MMMM Do | HH:mm:ss");
    $("#currentDay").text(dayTime);
}
// Update time every second
setInterval(currentDayTime, 1000)

// Display the current day at the top of the calender when a user opens the planner.
// var today = dayjs().format("dddd, MMMM Do");
// $("#currentDay").text(today);

var currentHour = dayjs().format("HH");
console.log(currentHour);

// Color-code each timeblock based on past, present, and future
$(".time-block").each(function(){
    var timeId = this.id
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
