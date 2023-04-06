$(document).ready(function () {

   // Load header and add tooltips dyamically ------------------------
  $("header").load("header.html", function () {
    console.log("Header loaded.");
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Load footer -----------------------------------------------------
  $("footer").load("footer.html", function () {
    console.log("Footer loaded.");
  });



});
// document.ready