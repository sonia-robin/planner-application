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

$(".time-block").each(function(){
    var timeIdInt = this.id
    console.log(timeIdInt);
    if(currentHour > timeIdInt){
        $(this).children("textarea").addClass("past");
    }
    else if(currentHour === timeIdInt){
        $(this).children("textarea").addClass("present");
    }
    else {
        $(this).children("textarea").addClass("future");
    }
});
