// display the current time of day
var timeDisplay = $('#currentDay');
function showTime() {
  var currentTime = dayjs().format('dddd, MMMM D, YYYY');
  timeDisplay.text(currentTime);
}
showTime();

// save button click event
$('.saveBtn').on('click', function() {
  var save = $(this).parent().attr('id').split('-')[1];

  var description = $(this).parent().find('.description').val();

  localStorage.setItem(save,description);
});

// applying style boxes to the boxes to reflect if past, present, or future
$(".time-block").each(function() {
  var scheduleHour = $(this).attr('id').split('-')[1];

  var scheduledInputs = localStorage.getItem(scheduleHour);
  var inputArea = $(this).find('.description');
  inputArea.val (scheduledInputs);

  if (scheduleHour < showTime) {
    $(this).find('.description').addClass('past');

  } else if (scheduleHour === showTime) {
    $(this).find('.description').addClass('present');

  } else {
    $(this).find('.description').addClass('future');

  }
});
