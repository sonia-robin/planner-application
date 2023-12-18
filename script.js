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

var currentHour = dayjs().format("H");
console.log(currentHour);