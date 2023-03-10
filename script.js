// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = moment().format('dddd, MMM YYYY');
$("#currentDay").html(currentDate);

(function () {

  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
  function timeOfDay () {

    var currentTime = moment().hour();

    

  }
})

