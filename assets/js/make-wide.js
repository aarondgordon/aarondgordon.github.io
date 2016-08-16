$(function() {
  // Add reverse function to jQuery
  $.fn.reverse = [].reverse;
  
  // Unwrap wide elements from paragraphs added by Jekyll
  $("p > .is-wide").unwrap();
  
  // Grow up wide elements above div container
  growUpWideElements($("body"));
  
  // Wrap wide elements in their own container
  $(".is-wide").wrap("<div class='wide-container'></div>");
  
  // Wrap wide image elements in a second container
  $("img.is-wide")
      .wrap("<div class='wide-img-container'></div>")
      .addClass("wide-img");
      
  // Set wide-img-container height
  $(".wide-img-container").each(function() {
    var img = $(this).children("img.is-wide");
    var width = img.attr("width");
    img.removeAttr("width");
    var height = img.attr("height");
    img.removeAttr("height");
    $(this).css("padding-top", (height / width * 100).toString() + "px");
  });
});

// Moves wide elements in the provided containing element up
// a level in the DOM, splitting the containing element at each
// wide element in the process to maintain page flow
function growUpWideElements(container) {
  var wideE = container.find(".is-wide").filter(":first");
  
  if (wideE.length > 0) {
    var above = wideE.prevAll().reverse();
    var below = wideE.nextAll();
    wideE.unwrap();
    above.wrapAll("<div class='container'></div>");
    below.wrapAll("<div class='container'></div>");
    growUpWideElements(below.parent(".container"));
  }
}
