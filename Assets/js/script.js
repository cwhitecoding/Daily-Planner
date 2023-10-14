// Creates variable and displays current date at the top of page
var now = dayjs();
$("#currentDay").text(now.format("MM/DD/YYYY"));

// Function creates colors to correct times
$(".row").each(function() {
  var currentTime = dayjs().hour();
  var hourBlock = $(this).attr("id").slice(5);

  // Coloring correct rows according to current time
  if (hourBlock < currentTime) {
    $(this).addClass("past").removeClass("present future")
  }
  else if (hourBlock == currentTime) {
    $(this).addClass("present").removeClass("past future");
  }
  else {
    $(this).addClass("future").removeClass("past present");
  }
});

// Added a listener for click events on the save button. 
$(".saveBtn").on('click', function (){
  var hourBlock = $(this).parent().attr("id");
  var lastInput = $(this).siblings(".description").val();

  localStorage.setItem(hourBlock, lastInput);
});

// Renders last saved into correct row
$(".row").each(function(){
  var hourBlock = $(this).attr("id");

  $(this).children("textarea").val(localStorage.getItem(hourBlock))
});
