$(function() {
  $("p > .is-wide").unwrap();
  
  splitWideElements($("body"));
      
  $("img.is-wide")
      .wrap("<div class='wide-img-container'></div>")
      .addClass("wide-img");
});

function splitWideElements(container) {
  var wideE = container.find(".is-wide").filter(":first");
  
  if (wideE.length > 0) {
    var above = wideE.prevAll();
    var below = wideE.nextAll();
    wideE.unwrap();
    above.wrap("<div class='container'></div>");
    below.wrap("<div class='container'></div>");
    wideE.wrap("<div class='wide-container'></div>");
    splitWideElements(below);
  }
}
