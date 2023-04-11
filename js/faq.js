$(function () {
  // Search field filter
  $("#faq-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#faqs .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search reset button
  $("#search-reset").on("click", function () {
    // clear the search input
    $("#faq-search").val("");
    // Show all the cards
    $(".card").fadeIn().removeClass("d-none");
  });

  // open all accordion panels for possible printing or close -----------
  $("#faq-show-all").on("click", function () {
    console.log("clicked");

    if ($("#faq-show-all").text() === "Open All") {
      // Change the button text
      $("#faq-show-all").html("<i class='fa-solid fa-xmark mr-2'></i>Close All</i>");
      // show all accordions
      $("#wrapper .collapse").collapse("show");
    } else {
      // Change the button text
      $("#faq-show-all").html("<i class='fa-solid fa-plus mr-2'></i>Open All</i>");
      // hide all accordions
      $("#wrapper .collapse").collapse("hide");
    }
  });
});
// document.ready
