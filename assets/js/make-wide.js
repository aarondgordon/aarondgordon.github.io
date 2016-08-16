$(function() {
  $("p > .is-wide").unwrap();
  $(".is-wide")
      .wrap("<div class='wide-container'></div>")
      .before("</div>")
      .after("<div class='container'");
  $("img.is-wide")
      .wrap("<div class='wide-img-container'></div>")
      .addClass("wide-img");
});
