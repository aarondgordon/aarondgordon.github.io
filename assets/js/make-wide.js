$(function() {
  $("p > .is-wide").unwrap();
  
  splitWideElements($("body"));
      
  $("img.is-wide")
      .wrap("<div class='wide-img-container'></div>")
      .addClass("wide-img");
});

function splitWideElements(container) {
  var wideE = container.find(".is-wide:first-child");
  
  if (wideE.length > 0) {
    var above = wideElement.prevAll();
    var below = wideElement.nextAll();
    wideE.unwrap();
    above.wrap("<div class='container'></div>");
    below.wrap("div class='container'></div>");
    wideE.wrap("<div class='wide-container'></div>");
    splitWideElements(below);
  }
}
