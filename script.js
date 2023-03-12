// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Date and time for the planner
var currentDate = $("#currentDay");

function showDate () {
  var currentTime = () => {
    //setting the format date and time will displayed in
    var time = dayjs().format("dddd, MMM D YYYY");
    currentDate.text(time);
  }
  currentTime();
  setInterval(currentTime, 1000);
}
showDate();

//add save button click event
var scheduledEvents = $('.saveBtn');

scheduledEvents.click(function() {
  Event.preventDefault();
  var hour = $(this).parent('div').attr('id');
  var value = $('#' + hour, '' + value);
  localStorage.setItem('#' + hour, '' + value);
 
});


