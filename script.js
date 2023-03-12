// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Date and time for the planner
var currentDate = $("#currentDay");
currentDate.text (moment().format('dddd, MMM Do YYYY'));

//The current hour
var currentHour = moment().hour();



//add save button click event
$(".saveBtn").on("click", function() {
  var inputKey = $(this).parent().att("id").split("-")[1];

  var inputVal = $(this).parent().find(".description").val();

  localStorage.setItem(inputKey, inputVal);
})

