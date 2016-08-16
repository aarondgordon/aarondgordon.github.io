$(function() {
  $("p > .is-wide").unwrap();
  $(".is-wide").wrap("<div class='wide-container'></div>");
  $("img.is-wide").wrap("<div class='wide-img-container'></div>");
});
